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

export type AgentResearchFocus = {
  title: string;
  summary: string;
  evidence: string[];
};

export type PositioningPillar = {
  label: string;
  title: string;
  summary: string;
  points: string[];
};

export type ArchitectureLayer = {
  id: string;
  title: string;
  label: string;
  summary: string;
  details: string[];
};

export type RoadmapItem = {
  phase: string;
  title: string;
  summary: string;
  outputs: string[];
};

export type SupervisionFit = {
  title: string;
  summary: string;
  signals: string[];
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
    "Software engineering student building AI agent systems, full-stack products, and security-aware software.",
  supervisorPitch:
    "I am preparing for graduate research in reliable AI agents, human-AI workflows, orchestration and memory design, and deployable intelligent systems.",
  researchStatement:
    "My strongest interest is not simply using AI tools, but designing governable, traceable, execution-capable systems that can support real work over time.",
  availability: "Graduate research conversations welcome",
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Reliable Personal AI Agent Systems",
    summary:
      "Long-running AI systems that maintain a stable interaction surface while routing work across tools, models, memory layers, and execution engines.",
    methods: ["Agent orchestration", "Tool use", "Memory design", "Evaluation"],
    supervisorFit:
      "A good fit for supervision around reliable agents, human-AI collaboration, explainability, and practical AI system architecture.",
  },
  {
    title: "Human-Centred AI Product Engineering",
    summary:
      "Full-stack and mobile interfaces that turn model capabilities into usable workflows, with attention to user needs, interaction design, and feedback loops.",
    methods: ["React", "Android", "FastAPI", "UX systems"],
    supervisorFit:
      "A good fit for applied AI, HCI, software engineering, and user-facing intelligent systems.",
  },
  {
    title: "Security-Aware Deployable Intelligence",
    summary:
      "AI systems with explicit boundaries, audit trails, local-first reasoning, and careful control over permissions, sensitive data, and automated actions.",
    methods: ["Audit trails", "Governance files", "Android", "Digital forensics"],
    supervisorFit:
      "A good fit for trustworthy AI, AI-assisted security, digital forensics, and secure software deployment.",
  },
];

export const agentResearch: AgentResearchFocus[] = [
  {
    title: "Single Controller, Modular Execution",
    summary:
      "A stable front-end controller keeps the interaction consistent while backend engines remain replaceable. The goal is continuity without visible multi-agent clutter.",
    evidence: [
      "One coherent interaction surface for long-running work",
      "Task routing across different coding and research engines",
      "Cost-aware execution choices rather than one fixed model",
    ],
  },
  {
    title: "Governance and Layered Memory",
    summary:
      "Persistent agents need more than chat history. I am exploring explicit identity, user profile, project memory, tool registry, and boundary files as maintainable system anchors.",
    evidence: [
      "Root-level design files for identity, tools, memory, and rules",
      "Separate durable context from transient runtime state",
      "Inspectable behaviour instead of improvised prompt chains",
    ],
  },
  {
    title: "Local-First, Auditable Workflows",
    summary:
      "Real task execution requires trust. My system design favours controllable workflows, documented tool use, and explicit boundaries for destructive or privacy-sensitive actions.",
    evidence: [
      "Local or semi-local workflows where practical",
      "Clear permission boundaries for tools and account-level actions",
      "Audit-friendly logs linking output to context and decisions",
    ],
  },
];

export const positioningPillars: PositioningPillar[] = [
  {
    label: "01 / Agent Systems",
    title: "Reliable AI agents",
    summary:
      "I am studying how long-running assistants can keep identity, memory, tool use, and execution consistent enough for real work.",
    points: ["single-controller architecture", "multi-model routing", "tool-backed workflows"],
  },
  {
    label: "02 / Product Engineering",
    title: "Full-stack AI products",
    summary:
      "I build interfaces, APIs, mobile flows, dashboards, and interaction systems that turn model capability into usable workflows.",
    points: ["React / Next.js", "Android / Kotlin", "FastAPI / Flask"],
  },
  {
    label: "03 / Trust Boundary",
    title: "Security-aware deployment",
    summary:
      "My cyber-security background shapes how I think about permissions, audit trails, local-first control, and safe automation.",
    points: ["explicit boundaries", "traceable decisions", "forensics-informed thinking"],
  },
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "controller",
    title: "Controller",
    label: "Stable front-end",
    summary:
      "One coherent interaction surface reduces identity drift and keeps long-running collaboration readable.",
    details: [
      "Maintains the user-facing voice and task context.",
      "Separates interface consistency from backend tool choice.",
      "Makes the system feel like one assistant rather than a pile of chats.",
    ],
  },
  {
    id: "orchestration",
    title: "Orchestration",
    label: "Task routing",
    summary:
      "An orchestration layer decides which engine, workflow, or tool chain should handle each task.",
    details: [
      "Routes coding, research, planning, and automation work differently.",
      "Keeps model choice tied to capability, cost, and reliability.",
      "Allows the backend to evolve without changing the user surface.",
    ],
  },
  {
    id: "execution",
    title: "Execution",
    label: "Tool engines",
    summary:
      "Execution engines do real work: coding, file operations, research, analysis, and structured automation.",
    details: [
      "Uses different tools where they are strongest.",
      "Keeps dangerous or account-level actions behind explicit boundaries.",
      "Treats output as inspectable work, not mysterious magic.",
    ],
  },
  {
    id: "memory",
    title: "Memory",
    label: "Layered context",
    summary:
      "Long-term usefulness depends on durable memory anchors, not only chat history.",
    details: [
      "Separates user profile, project context, current task state, and system notes.",
      "Keeps memory readable enough to update manually.",
      "Supports continuity across sessions and tools.",
    ],
  },
  {
    id: "governance",
    title: "Governance",
    label: "Rules and limits",
    summary:
      "Governance files define what the system is, what it can do, and when it should slow down or ask.",
    details: [
      "Documents tools, permissions, boundaries, and operating rules.",
      "Supports auditability for sensitive or destructive actions.",
      "Turns personal AI from improvisation into maintainable infrastructure.",
    ],
  },
];

export const roadmap: RoadmapItem[] = [
  {
    phase: "Now",
    title: "Public research portfolio",
    summary:
      "Make the AI-agent direction mentor-safe, evidence-backed, and connected to my software engineering work.",
    outputs: ["Agent Lab page", "project archive", "research notes"],
  },
  {
    phase: "Next",
    title: "Evaluated agent workflows",
    summary:
      "Document real workflows with criteria for cost, reliability, memory quality, failure modes, and human control.",
    outputs: ["workflow logs", "evaluation notes", "case-study pages"],
  },
  {
    phase: "Later",
    title: "Embodied companion systems",
    summary:
      "Extend agent architecture into multimodal interfaces, physical devices, and emotionally aware interaction design.",
    outputs: ["vision interfaces", "robotics prototypes", "human-agent studies"],
  },
];

export const supervisionFit: SupervisionFit[] = [
  {
    title: "Reliable AI agents",
    summary:
      "Supervision around agentic systems, tool use, memory, explainability, evaluation, or human-AI collaboration.",
    signals: ["agent architecture", "model/tool routing", "long-running interaction"],
  },
  {
    title: "Human-centred intelligent systems",
    summary:
      "Projects where AI is evaluated through usability, workflow value, interface design, and real deployment constraints.",
    signals: ["full-stack prototypes", "HCI", "user-facing workflows"],
  },
  {
    title: "Trustworthy and secure deployment",
    summary:
      "Applied research where AI systems need boundaries, audit trails, security reasoning, and operational discipline.",
    signals: ["cyber background", "auditability", "local-first control"],
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
    slug: "personal-ai-agent-research",
    title: "Personal AI Agent Research",
    category: "AI Agent Systems",
    period: "2026",
    context: "Self-directed research and engineering lab",
    role: "System designer and independent researcher",
    stack: ["LLM agents", "Multi-model routing", "Governance files", "Ollama", "Codex", "Claude Code"],
    link: "https://zeyu.app/agent-research",
    summary:
      "A public-facing research direction exploring stable personal AI systems, single-controller architecture, modular execution engines, layered memory, and local-first governance.",
    highlights: [
      "Designed a single-controller / modular-backend architecture to reduce identity drift and keep long-running work coherent.",
      "Compared 10+ model providers and local deployments to understand cost, capability, stability, and workflow fit.",
      "Formalised governance-file thinking around identity, tools, memory, project context, and action boundaries.",
      "Focused on mentor-safe, inspectable AI systems rather than generic chatbot usage or unstructured prompt experimentation.",
    ],
  },
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
    category: "AI & Agents",
    items: ["LLM agents", "Tool use", "Multi-model orchestration", "Memory design", "Ollama", "n8n"],
  },
  {
    category: "Full-Stack & Mobile",
    items: ["React", "Next.js", "Flask", "FastAPI", "Android Studio", "Jetpack Compose", "Firebase"],
  },
  {
    category: "ML, CV & Security",
    items: ["OpenCV", "MediaPipe", "scikit-learn", "Wireshark", "Autopsy", "Docker", "Git / GitHub"],
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
    slug: "stable-personal-ai-agent-architecture",
    title: "Stable Personal AI Agent Architecture",
    date: "2026",
    category: "AI Agents",
    readTime: "5 min read",
    excerpt:
      "Why I am treating personal AI systems as architecture: one stable controller, modular execution engines, layered memory, and explicit governance.",
    tags: ["AI Agents", "Memory", "Human-AI Interaction"],
    content: [
      "My current AI-agent work is driven by one practical question: how can a personal AI system move beyond chat and become a stable, governable, execution-capable assistant for real work over time?",
      "The architectural direction I prefer is a single front-end controller with modular backend execution engines. The user interacts with one coherent surface, while tools and models can be routed behind the scenes based on task, cost, and reliability.",
      "I care about governance because long-running systems cannot depend only on prompt text or chat history. Identity, user context, project memory, tool permissions, and action boundaries should be explicit enough to inspect and maintain.",
      "This is also where my security background matters. A capable agent needs boundaries: what it can do, when it should ask, how sensitive workflows are handled, and how its outputs can be traced back to context and decisions.",
    ],
  },
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
