export type ResearchInterest = {
  title: string;
  summary: string;
  methods: string[];
  supervisorFit: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  context: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
  recognition?: string;
  link?: string;
};

export type Note = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
};

export const profile = {
  name: "Zeyu Xu",
  initials: "ZX",
  degree: "Bachelor of Computing (Software Engineering)",
  university: "Curtin University",
  expected: "Expected 2026",
  location: "Perth, WA, Australia",
  email: "zeyu723@gmail.com",
  linkedin: "https://www.linkedin.com/in/zeyu-xu-658a51286",
  github: "https://github.com/Zeyu723",
  portfolioDemo: "https://galaxy-zeyu.vercel.app",
  headline:
    "Software engineering student building deployable AI, security, and computer-vision systems.",
  supervisorPitch:
    "I am preparing for graduate research in applied machine learning for mobile and system security, AI-assisted digital forensics, and human-computer interaction through computer vision.",
  researchStatement:
    "My strongest interest is not purely theoretical modelling, but interpretable systems that can be engineered, evaluated, deployed, and used in real environments.",
  availability: "Graduate research conversations welcome",
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Behaviour-Based Android Malware Detection",
    summary:
      "Applied machine learning for detecting data-exfiltration malware through permissions, network behaviour, and runtime signals rather than static signatures.",
    methods: ["Android", "Kotlin", "Python", "KNN", "Neural networks"],
    supervisorFit:
      "A good fit for supervision around mobile security, interpretable ML, and deployable cyber-defence tools.",
  },
  {
    title: "AI-Assisted Digital Forensics",
    summary:
      "Tooling and workflows that help investigators reconstruct events, keep audit trails, and reason about evidence without hiding methodology behind opaque automation.",
    methods: ["Autopsy", "Wireshark", "John the Ripper", "Audit trails"],
    supervisorFit:
      "A good fit for research on forensic reliability, evidence pipelines, and human-in-the-loop security analysis.",
  },
  {
    title: "Computer Vision for Human-Computer Interaction",
    summary:
      "Gesture-driven interfaces that use computer vision to make interactive systems more natural while remaining stable under noisy real-time input.",
    methods: ["Three.js", "MediaPipe Hands", "WebGL", "OpenCV"],
    supervisorFit:
      "A good fit for applied HCI, real-time interaction, and robust computer-vision interfaces.",
  },
];

export const education = [
  {
    period: "Feb 2023 - Expected 2026",
    title: "Bachelor of Computing - Software Engineering",
    institution: "Curtin University",
    location: "Perth, WA",
    details:
      "Coursework includes algorithms, software architecture, mobile development, machine learning fundamentals, and databases. Capstone project: AI-Driven Android Malware Detection System.",
  },
  {
    period: "2020 - 2022",
    title: "Bachelor of Science - Cyber Security, partial transfer",
    institution: "Edith Cowan University",
    location: "Joondalup, WA",
    details:
      "Foundation in digital forensics, network security, penetration testing, and applied cryptography.",
  },
];

export const projects: Project[] = [
  {
    slug: "ai-driven-android-malware-detection",
    title: "AI-Driven Android Malware Detection System",
    category: "Research Project",
    period: "2025 - Present",
    context: "Curtin University capstone, supervised team project",
    role: "Android client lead and ML pipeline contributor",
    stack: ["Android", "Kotlin", "Jetpack Compose", "Python", "ML", "REST APIs"],
    summary:
      "A cybersecurity application that detects data-exfiltration malware by analysing on-device application behaviour instead of relying only on static signatures.",
    highlights: [
      "Co-designed behaviour features using permissions, network activity, and runtime signals.",
      "Explored KNN and neural-network baselines for malware classification.",
      "Led the Android client with authentication, scan lifecycle, report history, quarantine, and whitelist actions.",
      "Integrated the client with backend REST APIs and coordinated frontend, ML, and backend sub-teams.",
      "Used main, dev, and feature branches with PR review, WBS milestones, and ticketed commits.",
    ],
  },
  {
    slug: "smart-micro-grid-monitoring-platform",
    title: "Smart Micro-Grid Monitoring Platform",
    category: "Full-Stack / IoT",
    period: "2025",
    context: "EcoPulse Hackathon, Perth",
    role: "Full-stack team member",
    stack: ["FastAPI", "Next.js", "Android", "IoT notification panel"],
    summary:
      "A monitoring ecosystem giving grid operators live visibility into simulated micro-grid operations through a backend, dashboard, Android client, and physical alert panel.",
    recognition: "Grand Prize, 1st Place - Renewable Integration & Digitalisation challenge",
    highlights: [
      "Won 1st place in the Renewable Integration & Digitalisation challenge.",
      "Built across simulation backend, real-time dashboard, Android client, and operator notification hardware.",
      "Focused the product story on operational visibility and fast response to grid-state changes.",
    ],
  },
  {
    slug: "ai-content-automation-pipeline",
    title: "AI Content Automation Pipeline",
    category: "AI Automation",
    period: "2025",
    context: "WeMoney Hackathon, Perth",
    role: "Backend orchestration and REST endpoint owner",
    stack: ["Flask", "REST APIs", "n8n", "OpenAI API"],
    summary:
      "An end-to-end AI content pipeline for script and caption generation, bulk publishing preparation, compliance guardrails, and traceable review state.",
    recognition: "Runner-Up, 2nd Place - AI content automation track",
    highlights: [
      "Awarded 2nd place for an OpenAI-driven content generation and automation workflow.",
      "Designed audit-trail logging linking generated assets to prompts, model versions, and review state.",
      "Built the backend orchestration and REST endpoints during a 48-hour sprint.",
    ],
  },
  {
    slug: "galaxy-playground",
    title: "Galaxy Playground",
    category: "Computer Vision / WebGL",
    period: "2024",
    context: "Personal research project",
    role: "Designer and developer",
    stack: ["Three.js", "MediaPipe Hands", "WebGL", "TypeScript"],
    link: "https://galaxy-zeyu.vercel.app",
    summary:
      "A 65,000+ particle interactive visualisation using hand gestures for rotation, zoom, and view locking.",
    highlights: [
      "Implemented gesture-based control for a browser-rendered particle system.",
      "Designed momentum smoothing to stabilise noisy hand-tracking input.",
      "Published a live Vercel demo for supervisor and portfolio review.",
    ],
  },
  {
    slug: "facial-recognition-knn-neural-networks",
    title: "Facial Recognition with KNN and Neural Networks",
    category: "Computer Vision",
    period: "2022",
    context: "Edith Cowan University project",
    role: "Developer",
    stack: ["Python", "OpenCV", "Jupyter", "KNN", "Neural networks"],
    summary:
      "A real-time face-recognition pipeline comparing KNN and shallow neural-network classifiers on a custom dataset.",
    highlights: [
      "Implemented preprocessing, feature extraction, and live webcam inference.",
      "Compared classifier behaviour and performance across the same recognition task.",
    ],
  },
  {
    slug: "digital-forensics-simulation",
    title: "Digital Forensics Simulation",
    category: "Digital Forensics",
    period: "2022",
    context: "Edith Cowan University project",
    role: "Forensic workflow analyst",
    stack: ["Autopsy", "John the Ripper", "Wireshark", "X-Ray"],
    summary:
      "An end-to-end forensic workflow covering disk imaging, password recovery, vulnerability scanning, and network-capture analysis.",
    highlights: [
      "Documented chain-of-custody and evidence extraction methodology.",
      "Practised tool-supported analysis across disk, password, vulnerability, and network evidence.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "Kotlin", "JavaScript / TypeScript", "C", "C++"],
  },
  {
    category: "ML & Computer Vision",
    items: ["scikit-learn", "KNN", "Neural networks", "OpenCV", "MediaPipe", "Jupyter"],
  },
  {
    category: "Mobile & Full-Stack",
    items: ["Android Studio", "Jetpack Compose", "Firebase", "Flask", "FastAPI", "React", "Next.js"],
  },
  {
    category: "Security & Tooling",
    items: ["Wireshark", "Autopsy", "John the Ripper", "Docker", "Linux", "Git / GitHub"],
  },
];

export const awards = [
  {
    title: "Grand Prize, 1st Place",
    event: "EcoPulse Hackathon 2025, Perth",
    detail: "Renewable Integration & Digitalisation challenge.",
  },
  {
    title: "Runner-Up, 2nd Place",
    event: "WeMoney Hackathon 2025, Perth",
    detail: "AI content automation track.",
  },
];

export const experience = [
  {
    period: "2025",
    role: "Web Developer, Freelance",
    organization: "Auskey Education",
    details:
      "Built and deployed a full-stack education-quiz platform with Flask and Google Forms integration, responsive UI, and dynamic quiz management.",
  },
];

export const notes: Note[] = [
  {
    slug: "behaviour-based-android-malware-detection",
    title: "Behaviour-Based Android Malware Detection",
    date: "2025",
    category: "Research",
    readTime: "4 min read",
    excerpt:
      "Why a deployable Android malware detector should combine behavioural features, explainability, and careful mobile engineering.",
    tags: ["Android", "Malware", "Machine Learning"],
    content: [
      "Static signatures are useful, but they do not fully capture how a malicious Android application behaves once it starts requesting permissions, communicating over the network, and moving through runtime states.",
      "My current capstone direction focuses on data-exfiltration malware and a behaviour-first pipeline. The engineering challenge is to connect Android scan workflows, backend APIs, and machine-learning baselines in a way that produces useful reports rather than only model scores.",
      "For graduate research, the open question I want to keep exploring is interpretability: how can a mobile-security system explain why it considers behaviour suspicious, and how can those explanations support real investigation workflows?",
    ],
  },
  {
    slug: "traceable-ai-automation",
    title: "Traceability in AI Automation Pipelines",
    date: "2025",
    category: "AI Engineering",
    readTime: "3 min read",
    excerpt:
      "A short reflection from the WeMoney hackathon on keeping generated content tied to prompts, model versions, and review state.",
    tags: ["OpenAI API", "Audit Trails", "Automation"],
    content: [
      "The fastest AI pipeline is not necessarily the safest one. In the WeMoney hackathon project, our team needed content generation to remain inspectable, so every generated asset could be traced back to a prompt, model version, and review state.",
      "That audit trail changed the design from a simple generator into a workflow system. It made the output easier to review, correct, and trust.",
      "The same pattern applies to research tools: when AI assists a human decision, the system should preserve enough context for the decision to be challenged and improved.",
    ],
  },
  {
    slug: "gesture-controlled-webgl-systems",
    title: "Gesture-Controlled WebGL Systems",
    date: "2024",
    category: "HCI",
    readTime: "3 min read",
    excerpt:
      "Notes from Galaxy Playground on smoothing noisy hand-tracking input for continuous interactive visualisation.",
    tags: ["Three.js", "MediaPipe", "HCI"],
    content: [
      "Gesture interfaces feel impressive when they work, but small input noise quickly becomes exhausting when the output is a continuously moving 3D scene.",
      "Galaxy Playground experiments with hand-tracking input, rotation, zoom, and view locking for a 65,000+ particle system. The most important engineering detail was smoothing: preserving responsiveness while preventing jitter from dominating the interaction.",
      "This project is a useful bridge between computer vision, browser graphics, and HCI because it turns a model output into an embodied interface problem.",
    ],
  },
];
