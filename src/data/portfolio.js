/**
 * Centralized Portfolio Data
 * Easily update your personal details, projects, skills, and links here.
 */

export const personalInfo = {
  name: "Lohith V",
  displayName: "Lohith V",
  role: "Python & AI/ML Developer",
  education: "BCA Graduate",
  location: "Tiruppur, Tamil Nadu, India",
  tagline: "BCA Graduate focused on Python, Artificial Intelligence, Machine Learning and automation.",
  shortBio: "I build practical applications, automation tools, and AI-powered workflows using Python. Passionate about solving real-world problems through clean code, data processing, and intelligent algorithms.",
  
  // Real contact information from verified resume
  contact: {
    email: "lohithv0126@gmail.com",
    phone: "+91 9043871380",
    linkedin: "https://linkedin.com/in/lohith-v-984176296",
    github: "https://github.com/lokiknok",
    // Link to uploaded resume PDF in public/assets
    resumeUrl: "./assets/Lohith_v resume.pdf",
  },

  // About section highlights (strictly truthful, no fake statistics)
  aboutCards: [
    {
      title: "BCA GRADUATE",
      desc: "Chikkanna Govt. Arts College (Bharathiar University), June 2026",
      iconName: "GraduationCap",
      badge: "Degree",
    },
    {
      title: "PYTHON FOCUSED",
      desc: "Core logic, OOP, data processing, APIs, and algorithmic problem solving",
      iconName: "Terminal",
      badge: "Core Stack",
    },
    {
      title: "AI / ML",
      desc: "Hands-on projects with RAG, vector embeddings, OpenCV & Scikit-learn",
      iconName: "BrainCircuit",
      badge: "Applied AI",
    },
    {
      title: "AUTOMATION",
      desc: "Headless browser scraping (Playwright), workflow bots & data pipelines",
      iconName: "Cog",
      badge: "Workflows",
    },
  ],
};

export const skillCategories = [
  {
    category: "PROGRAMMING",
    description: "Core languages for logic, computation, and interactive web tools",
    skills: [
      { name: "Python", level: "Strong", note: "OOP, scripting, algorithms & data structures" },
      { name: "JavaScript", level: "Working Knowledge", note: "ES6+, DOM manipulation & asynchronous APIs" },
    ],
  },
  {
    category: "AI / MACHINE LEARNING",
    description: "Model workflows, data pipelines, and applied intelligence",
    skills: [
      { name: "Artificial Intelligence", level: "Learning & Building", note: "RAG, LLM integrations & prompt architectures" },
      { name: "Machine Learning", level: "Learning & Building", note: "Supervised workflows, regression & classification" },
      { name: "Scikit-learn", level: "Building", note: "Model training, cross-validation & evaluation metrics" },
      { name: "NumPy", level: "Building", note: "Array math, matrix operations & numerical computing" },
      { name: "Pandas", level: "Building", note: "Dataframes, cleaning, feature transformations & EDA" },
    ],
  },
  {
    category: "BACKEND / APIs",
    description: "Server routing, endpoints, and microservices",
    skills: [
      { name: "Flask", level: "Building", note: "Lightweight routing, API blueprints & services" },
      { name: "REST APIs", level: "Building", note: "JSON endpoints, request handling & schema validation" },
    ],
  },
  {
    category: "AUTOMATION / WEB",
    description: "Browser automation, data collection, and responsive UI",
    skills: [
      { name: "Playwright", level: "Building", note: "Headless browser navigation & dynamic scraping" },
      { name: "Web Scraping", level: "Building", note: "DOM extraction, content normalization & scheduling" },
      { name: "HTML5", level: "Strong", note: "Semantic structure & accessible markup" },
      { name: "CSS3", level: "Strong", note: "Responsive design, Flexbox, Grid & glassmorphism" },
    ],
  },
  {
    category: "TOOLS",
    description: "Version control and collaborative development environments",
    skills: [
      { name: "Git", level: "Working Knowledge", note: "Branching, commit hygiene & version control" },
      { name: "GitHub", level: "Working Knowledge", note: "Remote repos, pull requests & code collaboration" },
    ],
  },
];

export const services = [
  {
    id: "python-dev",
    number: "01",
    title: "PYTHON DEVELOPMENT",
    shortDesc: "Building practical applications and automation tools with Python.",
    details: [
      "Object-oriented architecture & modular code structure",
      "Data wrangling, cleaning, and transformation with Pandas",
      "Custom CLI tools, background runners, and utilities",
    ],
    iconName: "Terminal",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    id: "ai-ml",
    number: "02",
    title: "AI & MACHINE LEARNING",
    shortDesc: "Developing AI/ML-focused applications and experimenting with intelligent solutions.",
    details: [
      "Retrieval-Augmented Generation (RAG) over documents",
      "Scikit-learn model training, tuning, and evaluation",
      "Computer vision frame processing with OpenCV",
    ],
    iconName: "BrainCircuit",
    accent: "from-purple-500 to-indigo-400",
  },
  {
    id: "web-automation",
    number: "03",
    title: "WEB AUTOMATION",
    shortDesc: "Browser automation, web research and scraping using tools such as Playwright.",
    details: [
      "Headless browser crawling of dynamic single-page apps",
      "Automated multi-page web scraping and content synthesis",
      "Structured output export to CSV, JSON, and databases",
    ],
    iconName: "Bot",
    accent: "from-cyan-500 to-teal-400",
  },
  {
    id: "backend-apis",
    number: "04",
    title: "BACKEND & APIs",
    shortDesc: "Building backend applications and APIs using Python and Flask.",
    details: [
      "RESTful API endpoint design and JSON payload handling",
      "Integration between Python ML scripts and web clients",
      "Error handling, input validation, and service modularity",
    ],
    iconName: "Layers",
    accent: "from-blue-500 to-sky-400",
  },
];

export const projects = [
  {
    id: "ai-web-research-assistant",
    title: "AI Web Research Assistant",
    category: "AI & Scraping Automation",
    featured: true,
    isPlaceholder: false,
    description: "An AI-powered web research assistant that can collect information from web pages, process/summarize content, and provide an interactive chat/research experience.",
    longDescription: "Engineered a Python and Flask application that uses Playwright to navigate live web pages, extract DOM text, normalize unstructured content, and feed it into NLP summarization pipelines. Provides an interactive interface allowing users to converse with and query researched web content.",
    pipeline: "Playwright Crawler ➔ DOM Extraction ➔ NLP Summarizer ➔ Conversational Query Interface",
    tags: [
      "Python",
      "Flask",
      "Web Scraping",
      "Playwright",
      "AI/ML",
      "APIs",
      "HTML/CSS/JavaScript"
    ],
    github: "https://github.com/lokiknok/ai-web-research-assistant",
    liveDemo: null,
    features: [
      "Automated dynamic webpage extraction via Playwright",
      "Structured content cleaning and DOM sanitization",
      "Context-aware summary generation using NLP models",
      "Conversational research interface powered by Flask APIs",
    ],
  },
  {
    id: "naukri-auto-apply",
    title: "Naukri Auto Job Apply",
    category: "Python Automation & Bot",
    featured: false,
    isPlaceholder: false,
    isUpcoming: false,
    description: "An automated Python tool for Naukri that searches job listings, filters matching roles, handles direct applications, logs results to CSV, and sends instant Telegram alerts.",
    longDescription: "Developed a Python automation framework using Selenium and undetected-chromedriver to streamline job hunting workflows on Naukri.com. Automates keyword searches, filters targeted job criteria, handles direct application submissions and external links, writes structured CSV audit logs, and triggers instant alerts via the Telegram Bot API.",
    pipeline: "Selenium Stealth Browser ➔ Role Filtering ➔ Auto-Apply & Redirects ➔ CSV Logger & Telegram Alerts",
    tags: [
      "Python",
      "Selenium",
      "undetected-chromedriver",
      "Telegram Bot API",
      "Requests",
      "CSV Automation"
    ],
    github: "https://github.com/lokiknok/Naukri-automated-job-application-system",
    liveDemo: null,
    features: [
      "Stealth automated browser sessions with undetected-chromedriver",
      "Keyword-based role filtering and automatic form submission",
      "Structured CSV transaction logging of all applied positions",
      "Real-time Telegram notifications with direct job links",
    ],
  },
  {
    id: "linkedin-auto-apply",
    title: "LinkedIn Auto Job Apply",
    category: "Headless Browser Automation",
    featured: false,
    isPlaceholder: false,
    isUpcoming: false,
    description: "A Python automation tool that scans LinkedIn for targeted developer positions, automates multi-step Easy Apply submissions, and tracks application pipelines.",
    longDescription: "Engineered a headless browser automation system using Python and Playwright/Selenium designed to interact with LinkedIn job postings. Automates search filters, identifies Easy Apply opportunities, fills multi-step application questionnaires, attaches candidate resume PDFs, and logs application telemetry with rate-limiting protection.",
    pipeline: "Playwright / Selenium ➔ Role & Location Filters ➔ Easy Apply Step Automation ➔ Application Tracking",
    tags: [
      "Python",
      "Playwright",
      "Selenium",
      "Web Automation",
      "API Integration",
      "Logging"
    ],
    github: "https://github.com/lokiknok/linkedin-auto-apply",
    liveDemo: null,
    features: [
      "Targeted job search filtering by location, title, and posting date",
      "Multi-step Easy Apply form autofill and verified resume upload",
      "Anti-detection rate limiting and human-like interaction timing",
      "Comprehensive local logging of applied positions and dates",
    ],
  },
  {
    id: "ai-document-assistant",
    title: "AI-Powered Document Assistant",
    category: "Generative AI & RAG",
    featured: false,
    isPlaceholder: false,
    isUpcoming: false,
    description: "An intelligent document question-answering system using RAG principles, text chunking, and semantic vector embeddings to generate grounded answers with source citations.",
    longDescription: "Built with Python, LLM APIs, and vector embeddings. Chunks PDFs/documents, generates embeddings, and performs semantic similarity retrieval to supply context-grounded answers without hallucination.",
    pipeline: "PDF Ingestion ➔ Semantic Chunking ➔ Vector Embeddings ➔ LLM Q&A",
    tags: ["Python", "LLM", "RAG", "Embeddings", "Pandas"],
    github: "https://github.com/lokiknok/ai-document-assistant",
    liveDemo: null,
    features: [
      "Semantic vector embeddings for document chunks",
      "Cosine similarity retrieval over knowledge bases",
      "Zero-hallucination source citation pipeline",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understand the problem.",
    desc: "Analyze requirements, identify input datasets, explore constraints, and define measurable outcomes.",
    iconName: "Search",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    number: "02",
    title: "PLAN",
    subtitle: "Plan the solution and architecture.",
    desc: "Design the data pipeline, select the optimal Python libraries/models, and architect clean API boundaries.",
    iconName: "FileSpreadsheet",
    accent: "from-cyan-500 to-blue-400",
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Develop the application.",
    desc: "Write modular, readable code. Implement core algorithmic logic, automation bots, and responsive user interfaces.",
    iconName: "Code2",
    accent: "from-blue-500 to-purple-400",
  },
  {
    number: "04",
    title: "TEST",
    subtitle: "Test and improve the implementation.",
    desc: "Validate edge cases, optimize execution speed, eliminate bottlenecks, and ensure reliable scraper/model outputs.",
    iconName: "ShieldCheck",
    accent: "from-purple-500 to-pink-400",
  },
  {
    number: "05",
    title: "DEPLOY",
    subtitle: "Deploy and maintain the project.",
    desc: "Containerize or host the application, set up clean Git versioning, and document clear usage instructions.",
    iconName: "Rocket",
    accent: "from-pink-500 to-sky-400",
  },
];

