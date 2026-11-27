import React, { useEffect, useRef } from 'react';

/**
 * Real-time WebGL scene behind the hero: a rotating "neural network" globe
 * (glowing nodes joined by lines), a wireframe icosahedron core and a field of
 * depth-parallax dust. Written in raw WebGL so no 3D library is shipped.
 * It follows the mouse, pauses when off-screen and renders one still frame for
 * reduced-motion users. If WebGL is unavailable the canvas simply stays empty.
 */

const VERT = `
attribute vec3 aPos;
attribute vec3 aCol;
uniform mat4 uMVP;
uniform float uSize;
uniform float uTime;
varying vec3 vCol;
varying float vDepth;
void main() {
  vec4 p = uMVP * vec4(aPos, 1.0);
  gl_Position = p;
  gl_PointSize = uSize / max(p.w, 0.2);
  vCol = aCol;
  vDepth = clamp(1.0 - (p.w - 4.0) * 0.18, 0.25, 1.0);
}`;

const FRAG = `
precision mediump float;
uniform float uAlpha;
uniform float uRound;
varying vec3 vCol;
varying float vDepth;
void main() {
  float a = uAlpha * vDepth;
  if (uRound > 0.5) {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    a *= pow(1.0 - d, 1.6);
  }
  gl_FragColor = vec4(vCol * a, a);
}`;

// ---- tiny matrix helpers (column-major, like WebGL expects) -----------------
const perspective = (fovY, aspect, near, far) => {
  const f = 1 / Math.tan(fovY / 2);
  const nf = 1 / (near - far);
  return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
};
const mul = (a, b) => {
  const o = new Array(16).fill(0);
  for (let c = 0; c < 4; c++)
    for (let r = 0; r < 4; r++)
      for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
  return o;
};
const rotX = (t) => { const c = Math.cos(t), s = Math.sin(t); return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]; };
const rotY = (t) => { const c = Math.cos(t), s = Math.sin(t); return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]; };
const trans = (x, y, z) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
const scale = (s) => [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1];

// ---- geometry ---------------------------------------------------------------
const CYAN = [0.22, 0.74, 0.97];
const PURPLE = [0.75, 0.52, 0.99];
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

function buildGlobe(count, radius, linkDist) {
  const nodes = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = golden * i;
    // slight radial jitter so it reads as a network, not a perfect shell
    const k = radius * (0.94 + Math.random() * 0.12);
    nodes.push([Math.cos(th) * r * k, y * k, Math.sin(th) * r * k]);
  }
  const pts = [];
  const lines = [];
  nodes.forEach((n) => {
    const c = mix(CYAN, PURPLE, (n[1] / radius + 1) / 2);
    pts.push(...n, ...c);
  });
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const dz = nodes[i][2] - nodes[j][2];
      if (dx * dx + dy * dy + dz * dz < linkDist * linkDist) {
        const ci = mix(CYAN, PURPLE, (nodes[i][1] / radius + 1) / 2);
        const cj = mix(CYAN, PURPLE, (nodes[j][1] / radius + 1) / 2);
        lines.push(...nodes[i], ...ci, ...nodes[j], ...cj);
      }
    }
  }
  return { pts: new Float32Array(pts), lines: new Float32Array(lines) };
}

function buildIcosahedron(radius) {
  const t = (1 + Math.sqrt(5)) / 2;
  const raw = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ].map((v) => {
    const l = Math.hypot(...v);
    return v.map((x) => (x / l) * radius);
  });
  const edgeLen = Math.hypot(raw[0][0] - raw[1][0], raw[0][1] - raw[1][1], raw[0][2] - raw[1][2]);
  const out = [];
  for (let i = 0; i < raw.length; i++) {
    for (let j = i + 1; j < raw.length; j++) {
      const d = Math.hypot(raw[i][0] - raw[j][0], raw[i][1] - raw[j][1], raw[i][2] - raw[j][2]);
      if (Math.abs(d - edgeLen) < 1e-4) out.push(...raw[i], ...PURPLE, ...raw[j], ...CYAN);
    }
  }
  return new Float32Array(out);
}

function buildDust(count) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const c = mix(CYAN, PURPLE, Math.random());
    out.push((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, ...c);
  }
  return new Float32Array(out);
}

export default function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const gl = canvas.getContext('webgl', { antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: 'low-power' });
    if (!gl) return undefined;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return undefined;
    gl.useProgram(prog);

    const loc = {
      pos: gl.getAttribLocation(prog, 'aPos'),
      col: gl.getAttribLocation(prog, 'aCol'),
      mvp: gl.getUniformLocation(prog, 'uMVP'),
      size: gl.getUniformLocation(prog, 'uSize'),
      alpha: gl.getUniformLocation(prog, 'uAlpha'),
      round: gl.getUniformLocation(prog, 'uRound'),
    };

    const upload = (data) => {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      return { buf, count: data.length / 6 };
    };
    const bind = (b) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, b.buf);
      gl.enableVertexAttribArray(loc.pos);
      gl.vertexAttribPointer(loc.pos, 3, gl.FLOAT, false, 24, 0);
      gl.enableVertexAttribArray(loc.col);
      gl.vertexAttribPointer(loc.col, 3, gl.FLOAT, false, 24, 12);
    };

    const small = window.innerWidth < 768;
    const globe = buildGlobe(small ? 90 : 150, 1.55, small ? 0.78 : 0.62);
    const globeNodes = upload(globe.pts);
    const globeLines = upload(globe.lines);
    const core = upload(buildIcosahedron(0.62));
    const dust = upload(buildDust(small ? 220 : 520));

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE); // additive glow
    gl.clearColor(0, 0, 0, 0);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(r.width * dpr));
      height = Math.max(1, Math.round(r.height * dpr));
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Smoothed pointer (-1..1) and scroll drive the camera.
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const onPointer = (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let visible = true;
    let raf = 0;
    const t0 = performance.now();

    const draw = (now) => {
      const t = reduced ? 4 : (now - t0) / 1000;
      cur.x += (target.x - cur.x) * 0.05;
      cur.y += (target.y - cur.y) * 0.05;
      const scrollY = Math.min(window.scrollY / Math.max(height / dpr, 1), 1.5);

      const aspect = width / height;
      const wide = aspect > 1.2;
      const proj = perspective(0.9, aspect, 0.1, 40);
      // Globe sits behind the portrait: right of centre on wide screens.
      const view = mul(trans(wide ? 1.7 : 0, wide ? 0 : 0.2, -5.2 - scrollY * 1.2), mul(rotX(cur.y * 0.35 + scrollY * 0.5), rotY(cur.x * 0.5)));

      gl.clear(gl.COLOR_BUFFER_BIT);

      // dust: slow drift + stronger parallax than the globe
      const dustM = mul(proj, mul(trans(cur.x * -0.5, cur.y * 0.35, -6), rotY(t * 0.02)));
      gl.uniform1f(loc.round, 1);
      gl.uniformMatrix4fv(loc.mvp, false, dustM);
      gl.uniform1f(loc.size, 14 * dpr);
      gl.uniform1f(loc.alpha, 0.55);
      bind(dust);
      gl.drawArrays(gl.POINTS, 0, dust.count);

      // globe: nodes + links
      const spin = rotY(t * 0.18);
      const globeM = mul(proj, mul(view, spin));
      gl.uniformMatrix4fv(loc.mvp, false, globeM);
      gl.uniform1f(loc.round, 0);
      gl.uniform1f(loc.alpha, 0.32);
      bind(globeLines);
      gl.drawArrays(gl.LINES, 0, globeLines.count);

      gl.uniform1f(loc.round, 1);
      gl.uniform1f(loc.size, 36 * dpr);
      gl.uniform1f(loc.alpha, 1.0);
      bind(globeNodes);
      gl.drawArrays(gl.POINTS, 0, globeNodes.count);

      // core: counter-rotating wire icosahedron that breathes
      const pulse = 1 + Math.sin(t * 1.4) * 0.06;
      const coreM = mul(proj, mul(view, mul(rotX(t * 0.32), mul(rotY(-t * 0.45), scale(pulse)))));
      gl.uniformMatrix4fv(loc.mvp, false, coreM);
      gl.uniform1f(loc.round, 0);
      gl.uniform1f(loc.alpha, 0.85);
      bind(core);
      gl.drawArrays(gl.LINES, 0, core.count);
      gl.uniform1f(loc.round, 1);
      gl.uniform1f(loc.size, 30 * dpr);
      gl.drawArrays(gl.POINTS, 0, core.count);
    };

    const loop = (now) => {
      raf = 0;
      if (!visible) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    if (reduced) draw(t0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
