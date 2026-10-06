export const personalInfo = {
  name: "Nasir Karim",
  title: "Frontend Developer & UI/UX Specialist",
  taglines: [
    "Frontend Developer",
    "React Developer",
    "Full Stack Developer",
    "Software Developer",
    "Website Specialist",
  ],
  bio: "I am a passionate Website & Frontend Developer focused on crafting modern, high-performance, and responsive web applications. With rigorous training from Saylani Mass IT Training and extensive hands-on project experience, I transform creative concepts into clean, pixel-perfect, and accessible digital solutions.",
  dob: "11 October 2005",
  location: "Balochistan, Pakistan",
  nationality: "Pakistani",
  languages: "English (Fluent), Urdu (Native)",
  interests: "Web Development, UI/UX Design, React Architecture, Modern Tech",
  availability: "Available for Freelance / New Projects",
  schedule: "Monday to Saturday, 9:00 AM – 7:00 PM (PKT)",
  phone: "+92 3362046062",
  phoneAlt: "+92 3161014331",
  email: "jaannk93@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1a3ItKnchoAb36W12FJ-cj75UPdViBh1U/view?usp=sharing",
  github: "https://github.com/nasirkarim",
  linkedin: "https://www.linkedin.com/in/nasir-karim-7b2b0925b/",
  twitter: "https://twitter.com/nasirkarim9",
  whatsapp: "https://wa.me/923362046062",
  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Core Technologies", value: "8+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Saylani Certified", value: "SMIT" },
  ],
};

export const githubConfig = {
  username: "nasirkarim",
  apiUrl: "https://api.github.com/users/nasirkarim/repos?sort=updated&per_page=6",
  profileUrl: "https://github.com/nasirkarim",
  showSection: true,
  repoLimit: 6,
};

export const skillsData = [
  {
    category: "Frontend",
    items: [
      {
        id: "react",
        name: "React.js",
        level: "Advanced",
        desc: "Hooks, Component Architecture, Context API, Router",
        icon: "FaReact",
        color: "#61DAFB",
        tag: "Core Stack",
        usedIn: ["maintainiq", "trello-clone", "ecommerce-cart", "personal-portfolio"],
      },
      {
        id: "javascript",
        name: "JavaScript (ES6+)",
        level: "Proficient",
        desc: "DOM Manipulation, Async/Await, Fetch, Closures",
        icon: "SiJavascript",
        color: "#F7DF1E",
        tag: "Core Stack",
        usedIn: ["maintainiq", "baloch-works", "trello-clone", "weather-app", "ecommerce-cart"],
      },
      {
        id: "html5",
        name: "HTML5 & Semantic Web",
        level: "Mastery",
        desc: "Accessible markup, SEO structure, modern elements",
        icon: "SiHtml5",
        color: "#E34F26",
        tag: "Foundation",
        usedIn: ["maintainiq", "baloch-works", "weather-app", "personal-portfolio"],
      },
      {
        id: "css3",
        name: "Modern CSS3",
        level: "Mastery",
        desc: "Flexbox, CSS Grid, Glassmorphism, Custom Variables",
        icon: "SiCss3",
        color: "#1572B6",
        tag: "Styling",
        usedIn: ["maintainiq", "baloch-works", "weather-app", "ecommerce-cart", "personal-portfolio"],
      },
      {
        id: "responsive",
        name: "Responsive Design",
        level: "Mastery",
        desc: "Mobile-first layouts, Fluid typography, Cross-browser",
        icon: "FaMobileScreenButton",
        color: "#38BDF8",
        tag: "Essential",
        usedIn: ["maintainiq", "baloch-works", "trello-clone", "weather-app", "ecommerce-cart", "personal-portfolio"],
      },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      {
        id: "nodejs",
        name: "Node.js",
        level: "Intermediate",
        desc: "JavaScript Runtime, NPM packages, API endpoints",
        icon: "SiNodedotjs",
        color: "#339933",
        tag: "Runtime",
        usedIn: ["maintainiq", "baloch-works"],
      },
      {
        id: "firebase",
        name: "Firebase",
        level: "Intermediate",
        desc: "Cloud Firestore, Authentication, Real-time Database",
        icon: "SiFirebase",
        color: "#FFCA28",
        tag: "Cloud DB",
        usedIn: ["maintainiq", "trello-clone"],
      },
      {
        id: "restapi",
        name: "RESTful APIs",
        level: "Proficient",
        desc: "CRUD operations, API integration, JSON processing",
        icon: "FaServer",
        color: "#A855F7",
        tag: "Integration",
        usedIn: ["weather-app", "maintainiq", "baloch-works"],
      },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      {
        id: "git",
        name: "Git & GitHub",
        level: "Proficient",
        desc: "Version control, Branching, Pull Requests, Hosting",
        icon: "SiGithub",
        color: "#F05032",
        tag: "VCS",
        usedIn: ["maintainiq", "baloch-works", "trello-clone", "weather-app", "ecommerce-cart", "personal-portfolio"],
      },
      {
        id: "vite",
        name: "Vite & Tooling",
        level: "Proficient",
        desc: "Ultra-fast builds, HMR, asset optimization",
        icon: "SiVite",
        color: "#646CFF",
        tag: "Build Tool",
        usedIn: ["personal-portfolio", "trello-clone"],
      },
      {
        id: "uiux",
        name: "UI/UX Prototyping",
        level: "Proficient",
        desc: "Wireframing, visual hierarchy, micro-interactions",
        icon: "FaPalette",
        color: "#EC4899",
        tag: "Design",
        usedIn: ["personal-portfolio", "maintainiq", "baloch-works"],
      },
    ],
  },
];

export const servicesData = [
  {
    id: "responsive-web",
    title: "Website Development",
    subtitle: "Modern & High-Performance",
    description:
      "Custom, modern, and pixel-perfect websites built with clean code. Fully responsive across desktops, tablets, and mobile devices with fast loading speeds.",
    features: [
      "Mobile-First Responsive Layouts",
      "Cross-Browser Compatibility",
      "SEO & Speed Optimized",
      "Clean & Maintainable Markup",
    ],
    icon: "FaGlobe",
    color: "#6366f1",
  },
  {
    id: "react-apps",
    title: "React Web Applications",
    subtitle: "Interactive & Scalable",
    description:
      "Dynamic Single Page Applications (SPAs) built with React. Clean component architecture, fluid state management, and seamless client-side routing.",
    features: [
      "Custom React Components",
      "State Management & Hooks",
      "Client-Side Routing",
      "Interactive Real-Time UI",
    ],
    icon: "FaReact",
    color: "#06b6d4",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Implementation",
    subtitle: "Visually Memorable",
    description:
      "Transforming creative design concepts into interactive web interfaces with smooth animations, glassmorphism, elegant typography, and micro-interactions.",
    features: [
      "Glassmorphism & Soft Gradients",
      "Smooth Micro-Animations",
      "Intuitive User Journeys",
      "Dark & Light Mode Integration",
    ],
    icon: "FaPalette",
    color: "#ec4899",
  },
  {
    id: "api-integration",
    title: "API & Cloud Integration",
    subtitle: "Connected & Real-Time",
    description:
      "Integrating RESTful APIs, third-party web services, and cloud databases like Firebase to provide live data, user authentication, and persistent storage.",
    features: [
      "REST API Data Fetching",
      "Firebase Cloud Integration",
      "Local Storage Management",
      "Robust Error Handling",
    ],
    icon: "FaCloudBolt",
    color: "#10b981",
  },
  {
    id: "performance-optimization",
    title: "Performance & SEO Polish",
    subtitle: "Fast & Discoverable",
    description:
      "Speeding up website load times, optimizing assets, eliminating layout shifts, and implementing SEO metadata to maximize visibility and user engagement.",
    features: [
      "Fast Core Web Vitals",
      "Asset & Image Optimization",
      "Search Engine Meta Tags",
      "Accessible Semantic HTML",
    ],
    icon: "FaBolt",
    color: "#f59e0b",
  },
  {
    id: "code-modernization",
    title: "Code Refactoring & Fixes",
    subtitle: "Clean & Maintainable",
    description:
      "Modernizing existing codebases, resolving UI/UX bugs, upgrading old JavaScript/React patterns, and restructuring styles into a scalable design system.",
    features: [
      "Bug Fixing & UI Polish",
      "Component Restructuring",
      "CSS Optimization",
      "Code Clean-up & Upgrades",
    ],
    icon: "FaCode",
    color: "#8b5cf6",
  },
];

export const projectsData = [
  {
    id: "maintainiq",
    title: "MaintainIQ",
    subtitle: "Asset Maintenance Management Platform",
    category: "Web Apps",
    description:
      "A comprehensive asset maintenance management platform engineered for operations teams. Features issue reporting, QR-based equipment access, maintenance logs, and asset status tracking.",
    problem:
      "Industrial teams and facilities struggled with paper-based equipment logs, slow incident reporting, and untracked maintenance histories.",
    solution:
      "Architected a centralized digital platform featuring QR-code asset tagging, instant ticket submission, and historical servicing records accessible on any mobile device.",
    myContribution:
      "Engineered the responsive UI architecture, interactive status dashboard, QR code access integration, and dynamic local state management.",
    technologies: ["HTML5", "CSS3", "JavaScript", "QR System", "Responsive UI"],
    liveUrl: "https://github.com/nasirkarim",
    githubUrl: "https://github.com/nasirkarim",
    featured: true,
    highlights: [
      "Interactive maintenance logs & status dashboards",
      "QR-code based instant asset identification concept",
      "Preventative maintenance scheduling workflow",
      "Fully responsive touch-friendly mobile UI",
    ],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "baloch-works",
    title: "Baloch Works",
    subtitle: "Regional Skilled Labor & Business Platform",
    category: "Web Apps",
    description:
      "A purpose-driven digital platform concept designed to connect workers, local businesses, and economic opportunities across Balochistan, Pakistan with clean categorized listings.",
    problem:
      "Local artisans and skilled laborers in Balochistan lack digital visibility to showcase their services to regional businesses and homeowners.",
    solution:
      "Designed an accessible web portal with localized skill categories, search filters, and direct contact buttons for verified contractors.",
    myContribution:
      "Created the complete frontend interface, categorical filtering engine, and responsive card layouts optimized for slow mobile internet connections.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Filter Engine", "UI/UX"],
    liveUrl: "https://github.com/nasirkarim",
    githubUrl: "https://github.com/nasirkarim",
    featured: true,
    highlights: [
      "Categorized skilled workforce directory",
      "Intuitive search and service filtration system",
      "Direct employer-to-worker contact points",
      "Community-centric professional design",
    ],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: "trello-clone",
    title: "Trello Workspace Clone",
    subtitle: "Interactive Kanban Task Management",
    category: "React Apps",
    description:
      "A dynamic task management application featuring drag-and-drop boards, card prioritization, list sorting, and persistent local storage to streamline productivity.",
    problem:
      "Teams and solo developers need an intuitive, lightweight board without bloated third-party subscriptions to organize project sprints.",
    solution:
      "Built a modular Kanban board with fluid drag-and-drop interactions, card tags, priority color badges, and instant browser persistence.",
    myContribution:
      "Implemented React state management for column-to-column item transfers, local storage synchronization, and modal editing dialogs.",
    technologies: ["React", "JavaScript", "Modern CSS", "Drag & Drop", "LocalStorage"],
    liveUrl: "https://github.com/nasirkarim",
    githubUrl: "https://github.com/nasirkarim",
    featured: true,
    highlights: [
      "Interactive draggable cards & board management",
      "Task creation, editing, and priority tagging",
      "Instant state persistence across browser reloads",
      "Smooth micro-interactions and transitions",
    ],
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "weather-app",
    title: "Live Weather Forecast",
    subtitle: "Real-Time Meteorological App",
    category: "JavaScript",
    description:
      "A responsive weather application fetching real-time weather information and forecasts via REST API. Features location search, humidity metrics, and atmospheric condition visuals.",
    problem:
      "Users needed immediate, accurate local atmospheric data without having to navigate cluttered ad-heavy forecasting portals.",
    solution:
      "Integrated OpenWeather REST APIs to deliver live temperature, wind speed, pressure, and weather visuals in an elegant glassmorphism card.",
    myContribution:
      "Handled asynchronous API fetching, error handling for unknown locations, and dynamic background theming based on weather codes.",
    technologies: ["JavaScript (ES6+)", "Weather API", "CSS3 Glassmorphism", "Async/Await"],
    liveUrl: "https://github.com/nasirkarim",
    githubUrl: "https://github.com/nasirkarim",
    featured: false,
    highlights: [
      "Live weather data retrieval with error handling",
      "Dynamic weather condition icons & metrics",
      "City search with instant response",
      "Clean glassmorphism weather dashboard",
    ],
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: "ecommerce-cart",
    title: "E-Commerce Shopping Cart",
    subtitle: "Dynamic Storefront Application",
    category: "React Apps",
    description:
      "A full-featured shopping cart application with interactive product catalog, quantity increments, live pricing recalculations, and responsive checkout interface.",
    problem:
      "E-commerce stores often lose buyers when cart interactions are clunky or require full-page reloads.",
    solution:
      "Engineered an instant client-side cart drawer with live subtotal calculation, item quantity counters, and responsive product filtering.",
    myContribution:
      "Developed custom React state handlers, checkout validation forms, and responsive product grid layouts.",
    technologies: ["React", "JavaScript", "CSS3 Grid", "State Management"],
    liveUrl: "https://github.com/nasirkarim",
    githubUrl: "https://github.com/nasirkarim",
    featured: false,
    highlights: [
      "Dynamic cart count & real-time price subtotal",
      "Item addition, removal, and quantity adjustments",
      "Responsive grid product catalog",
      "Smooth checkout user flow",
    ],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    subtitle: "High-Performance Showcase Website",
    category: "React Apps",
    description:
      "A modern, ultra-responsive developer portfolio website featuring dual Dark/Light mode, custom smooth cursor, interactive modals, and agency-quality aesthetic.",
    problem:
      "Developers require a memorable personal digital presence that communicates their competence to technical recruiters and clients immediately.",
    solution:
      "Engineered a Vite-powered React portfolio utilizing modern CSS variables, GSAP micro-animations, command palette, and real GitHub integration.",
    myContribution:
      "Architected the entire design system, GSAP animation hooks, theme provider, and multi-channel contact flows.",
    technologies: ["React 19", "Vite", "Modern CSS", "GSAP", "SEO Optimization"],
    liveUrl: "https://github.com/nasirkarim",
    githubUrl: "https://github.com/nasirkarim",
    featured: true,
    highlights: [
      "Fluid Dark & Light theme with local storage save",
      "Custom magnetic cursor & smooth scroll progress",
      "Command palette (Ctrl+K) for rapid navigation",
      "Live GitHub repositories integration and WhatsApp messaging",
    ],
    gradient: "from-fuchsia-600 to-pink-600",
  },
];

export const experienceData = [
  {
    role: "Senior Website Developer",
    company: "Freelance & Independent Client Projects",
    period: "2026 - Present",
    type: "Freelance",
    description:
      "Spearheading end-to-end development of modern, responsive websites and web applications for independent clients and businesses. Architecting reusable React components and optimizing performance.",
    responsibilities: [
      "Developing high-converting landing pages and single-page applications using React and modern JavaScript.",
      "Ensuring 100% responsive compatibility across mobile, tablet, and high-resolution desktop screens.",
      "Implementing custom animations, dark/light themes, and glassmorphic user interfaces.",
      "Communicating directly with clients to analyze requirements and deliver on schedule.",
    ],
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Git", "Responsive Design"],
  },
  {
    role: "Web Developer",
    company: "Web Development Projects & Collaborative Work",
    period: "2025 - 2026",
    type: "Contract / Project",
    description:
      "Designed and developed responsive web interfaces with clean layouts, reusable component architectures, and dynamic database integrations.",
    responsibilities: [
      "Built interactive user interfaces with React and integrated Firebase for data persistence.",
      "Structured accessible HTML5 documents and CSS Flexbox/Grid layouts.",
      "Optimized load times and cross-browser rendering behavior.",
    ],
    tags: ["JavaScript", "React", "Firebase", "CSS3", "REST APIs"],
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects & Open-Source Contributions",
    period: "2025 - 2026",
    type: "Self-Directed",
    description:
      "Began intensive professional frontend development, building modern web applications and mastering web standards and developer workflows.",
    responsibilities: [
      "Constructed modular JavaScript applications with interactive DOM operations.",
      "Learned version control best practices utilizing Git and GitHub repositories.",
      "Created utility tools including weather apps, task trackers, and calculators.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Git", "VS Code"],
  },
];

export const educationData = [
  {
    degree: "Web Development & Modern Programming",
    institution: "Saylani Mass IT Training (SMIT), Pakistan",
    period: "2026 - Present",
    status: "Active / In Progress",
    description:
      "Undergoing rigorous professional training in software development, JavaScript (ES6+), React.js, responsive design principles, and modern web application development at one of Pakistan's most prestigious IT training institutes.",
    highlights: [
      "Comprehensive training in modern JavaScript and React.js",
      "Hands-on project development and peer code reviews",
      "Full coverage of Git workflows and real-world deployment",
    ],
  },
  {
    degree: "Intermediate / Higher Secondary Education",
    institution: "Higher Secondary Institution, Pakistan",
    period: "2021 - 2023",
    status: "Completed",
    description:
      "Completed higher secondary education with a focus on science and computing foundations, developing strong logical problem solving and software interests.",
    highlights: [
      "Solid foundations in mathematics, logic, and computing",
      "Active participant in technology discussions and extracurriculars",
    ],
  },
  {
    degree: "Secondary School Education",
    institution: "Secondary School, Pakistan",
    period: "2025 - 2026",
    status: "Completed",
    description:
      "Completed secondary education while actively exploring computer programming, web technologies, and computational design.",
    highlights: [
      "Graduated with strong academic record",
      "Commenced self-taught web development journey",
    ],
  },
];

export const certificationsData = [
  {
    id: "saylani-web-dev",
    title: "Web & Mobile Application Development",
    issuer: "Saylani Mass IT Training (SMIT)",
    issuedDate: "2026",
    status: "In Progress / Active Scholar",
    credentialId: "SMIT-PAK-2026",
    description:
      "Comprehensive professional curriculum spanning Modern JavaScript (ES6+), React.js, Web Architecture, Git & GitHub, and responsive web systems.",
    skillsCovered: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "Responsive UI", "Git"],
    verifyUrl: "https://saylaniwelfare.com",
  },
  {
    id: "hsc-pakistan",
    title: "Higher Secondary Certificate (HSC)",
    issuer: "Board of Intermediate & Secondary Education, Pakistan",
    issuedDate: "2023",
    status: "Verified",
    credentialId: "HSC-2023-PAK",
    description:
      "Higher secondary educational certificate establishing academic foundations in mathematical logic, computer fundamentals, and scientific inquiry.",
    skillsCovered: ["Mathematics", "Computer Science", "Logical Problem Solving"],
    verifyUrl: null,
  },
];

// Configurable Testimonials - only displayed if real testimonials are provided
export const testimonialsData = [];

export const blogsData = [
  {
    id: 1,
    title: "My Journey Into Web Development & Saylani Training",
    date: "August 2026",
    category: "Career",
    readTime: "4 min read",
    description:
      "How I started learning HTML, CSS, JavaScript, and React from scratch, and how Saylani Mass IT Training shaped my path into a disciplined developer.",
  },
  {
    id: 2,
    title: "Why Mobile-First Responsive Design is Non-Negotiable",
    date: "July 2026",
    category: "Frontend",
    readTime: "5 min read",
    description:
      "Practical techniques to ensure your websites look breathtaking and perform flawlessly across all screen sizes, from mobile phones to 4K displays.",
  },
  {
    id: 3,
    title: "React vs Vanilla JavaScript: When and Why to Choose React",
    date: "June 2026",
    category: "Architecture",
    readTime: "6 min read",
    description:
      "A deep dive into declarative component architectures, virtual DOM reconciliation, and when vanilla JS is still your best friend.",
  },
  {
    id: 4,
    title: "Clean Coding Habits Every Frontend Engineer Should Cultivate",
    date: "May 2026",
    category: "Best Practices",
    readTime: "4 min read",
    description:
      "Simple, actionable habits—like semantic naming, modular component isolation, and DRY principles—that elevate code maintainability.",
  },
  {
    id: 5,
    title: "Git & GitHub Essentials for Beginners and Teams",
    date: "April 2026",
    category: "Tools",
    readTime: "5 min read",
    description:
      "Branching strategies, meaningful commit messages, merge conflicts, and how version control safeguards your development workflow.",
  },
  {
    id: 6,
    title: "Roadmap to Mastering Modern Full-Stack Development",
    date: "March 2026",
    category: "Roadmap",
    readTime: "7 min read",
    description:
      "My personal milestones, recommended resources, and strategic roadmap toward expanding into full-stack architecture with Node and cloud databases.",
  },
];
