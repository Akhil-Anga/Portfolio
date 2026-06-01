import React, { useEffect, useMemo, useRef, useState } from "react";

const profile = {
  name: "Akhil Anga",
  role: "Software Engineer",
  email: "venkatasaiakhilanga@gmail.com",
  linkedin: "https://www.linkedin.com/in/akhil-anga",
  github: "https://github.com/Akhil-Anga",
  resume: "/Venkata_Sai_Akhil_Anga_Software_Engineer_Resume.pdf",
};

const currentYear = new Date().getFullYear();

const sections = ["about", "skills", "projects", "playground", "experience", "education", "contact"];

const metrics = [
  { value: "4+", label: "Years building production software", target: "experience" },
  { value: "99%", label: "Fault classification accuracy", target: "projects" },
  { value: "10K+", label: "Industrial IoT labeled samples", target: "projects" },
  { value: "35%", label: "Database load reduced", target: "experience" },
];

const quickFacts = [
  "Buffalo, NY",
  "4+ Years Experience",
  "MS Data Science",
  "Open to Software Engineering",
];

const aboutHighlights = [
  {
    title: "Backend Systems",
    description: "REST APIs, service architecture, and production backend workflows.",
    icon: "server",
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS Lambda, API Gateway, Docker, Jenkins, and CI/CD delivery.",
    icon: "cloud",
  },
  {
    title: "Data Engineering",
    description: "SQL/NoSQL systems, Redis caching, dbt models, and dashboards.",
    icon: "database",
  },
  {
    title: "AI / Machine Learning",
    description: "Predictive workflows, model benchmarking, and ML-backed systems.",
    icon: "brain",
  },
];

const skills = [
  {
    category: "Backend",
    title: "Backend Engineering",
    description: "Production APIs, service logic, microservices, and scalable backend foundations.",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Microservices", "Java"],
  },
  {
    category: "Cloud",
    title: "Cloud & DevOps",
    description: "Cloud deployment, serverless workflows, containers, automation, and release pipelines.",
    items: ["AWS Lambda", "API Gateway", "S3", "EC2", "Docker", "Jenkins", "CI/CD"],
  },
  {
    category: "Data & ML",
    title: "AI, Data & ML Systems",
    description: "Machine learning workflows, analytics dashboards, predictive modeling, and applied data products.",
    items: ["Python", "Machine Learning", "Predictive Modeling", "Streamlit", "Tableau", "GenAI"],
  },
  {
    category: "Frontend",
    title: "Frontend Product Engineering",
    description: "Responsive interfaces, Angular applications, UI integration, and data-driven product screens.",
    items: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Databases",
    title: "Databases & Distributed Messaging",
    description: "Relational storage, NoSQL systems, caching layers, indexing, and event-driven communication.",
    items: ["MySQL", "PostgreSQL", "Redis", "DynamoDB", "Cassandra", "Kafka", "RabbitMQ"],
  },
];

const projects = [
  {
    title: "Machinery Fault Severity Intelligence",
    tag: "Featured ML + Systems Project",
    description:
      "A real-time industrial monitoring system that classifies machinery faults from triaxial vibration data before downtime occurs.",
    points: [
      ["Challenge", "Replace slow manual inspections with automated fault-severity intelligence."],
      ["Solution", "Built a Python pipeline, extracted FFT-based features, and benchmarked Random Forest, XGBoost, LightGBM, MiniRocket, and CNN."],
      ["Impact", "Selected MiniRocket after reaching 99% accuracy, built a 10,000+ sample dataset, and reduced inspection and dashboard latency by 30%."],
    ],
    stack: ["Python", "MiniRocket", "FFT", "MySQL", "Redis", "Jenkins"],
    architecture: ["Sensor Data", "Python Pipeline", "FFT Features", "MiniRocket Model", "MySQL + Redis", "Dashboard"],
    status: { state: "System Online", ping: "42ms", cache: "94%", throughput: "10K+ samples" },
    github: "https://github.com/Akhil-Anga",
  },
  {
    title: "Microservices Backend System",
    tag: "System Design",
    description:
      "Distributed backend architecture using independent services, Kafka messaging, Redis caching, and AWS Lambda jobs.",
    stack: ["Node.js", "Docker", "Kafka", "Redis", "AWS Lambda"],
    architecture: ["Client", "API Gateway", "Node Services", "Kafka", "Redis Cache", "SQL / NoSQL"],
    status: { state: "Services Healthy", ping: "38ms", cache: "91%", throughput: "Event-driven" },
    github: "https://github.com/Akhil-Anga",
  },
  {
    title: "Healthcare Admissions Analytics Platform",
    tag: "Data Engineering",
    description:
      "End-to-end platform transforming clinical records into operational insights through PostgreSQL OLTP, dbt OLAP modeling, and Streamlit dashboards.",
    stack: ["PostgreSQL", "dbt", "Docker", "Streamlit", "SQL"],
    architecture: ["Raw Clinical Data", "PostgreSQL OLTP", "dbt Models", "OLAP Layer", "Streamlit Dashboard"],
    status: { state: "Analytics Ready", ping: "55ms", cache: "89%", throughput: "23% faster queries" },
    github: "https://github.com/Akhil-Anga",
  },
  {
    title: "Obesity Level Prediction",
    tag: "Machine Learning",
    description:
      "Classification and clustering analysis using Random Forest, Logistic Regression, K-Means, macro F1-score, and silhouette evaluation.",
    stack: ["R", "Random Forest", "K-Means", "ML"],
    architecture: ["Survey Data", "Cleaning", "Feature Engineering", "Classification", "Evaluation"],
    status: { state: "Model Evaluated", ping: "Local", cache: "N/A", throughput: "ML pipeline" },
    github: "https://github.com/Akhil-Anga",
  },
];

const experience = [
  {
    role: "Software & Machine Learning Engineer Intern",
    company: "Machinery Monitoring Systems LLC",
    period: "Jan 2026 – May 2026",
    story:
      "Built an industrial fault-severity workflow connecting vibration data, model selection, and operator-facing monitoring.",
    wins: [
      "Benchmarked 5 ML models and selected MiniRocket after achieving 99% fault classification accuracy.",
      "Created a 10,000+ triaxial vibration sample dataset for reliable multi-class training.",
      "Reduced monitoring dashboard latency by 30% using Redis-backed data retrieval.",
    ],
    stack: ["Python", "ML", "MySQL", "Redis", "Jenkins"],
  },
  {
    role: "Full Stack Web Developer",
    company: "Trivedi Advanced Technologies LLC",
    period: "Sep 2023 – Nov 2024",
    story:
      "Delivered full-stack product improvements across Angular UI, Node.js APIs, cloud integrations, and production monitoring.",
    wins: [
      "Improved API response times by 30% and helped grow active users by 33%.",
      "Reduced API-related defects by 20% through stronger REST API reliability and test coverage.",
      "Cut query execution time by 25% through SQL and DynamoDB access-pattern optimization.",
    ],
    stack: ["Angular", "Node.js", "AWS", "SQL", "DynamoDB"],
  },
  {
    role: "Senior Software Engineer",
    company: "Trivedi Advanced Technologies LLC",
    period: "Jan 2022 – Sep 2023",
    story:
      "Moved backend architecture toward event-driven microservices for higher throughput and better operational reliability.",
    wins: [
      "Deconstructed a monolithic backend into Docker, Kafka, Redis, and RabbitMQ-based services.",
      "Reduced database load by 35% for high-traffic services.",
      "Reduced post-release defects by 20% through structured code reviews and early QA involvement.",
    ],
    stack: ["Docker", "Kafka", "Redis", "RabbitMQ", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Trivedi Advanced Technologies LLC",
    period: "Jun 2020 – Jan 2022",
    story:
      "Started with backend API development, production debugging, and automation workflows that improved release confidence.",
    wins: [
      "Built REST APIs in Node.js and TypeScript with Splunk monitoring.",
      "Reduced manual regression testing effort by 40% using Selenium automation.",
      "Owned production debugging using logs, Git history, and service tracing.",
    ],
    stack: ["Node.js", "TypeScript", "Java", "Selenium", "Splunk"],
  },
];

const education = [
  {
    period: "2025 – 2026",
    degree: "MS, Engineering Science – Data Science",
    school: "University at Buffalo, SUNY",
    tags: ["Distributed Systems", "Cloud Computing", "Machine Learning", "Data Science"],
  },
  {
    period: "2017 – 2020",
    degree: "B.Tech, Computer Science Engineering",
    school: "SRKR Engineering College, Andhra University",
    tags: ["Computer Science", "Software Engineering", "Programming", "Databases"],
  },
];

function MetricHighlight({ children }) {
  return (
    <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text font-black text-transparent dark:from-cyan-300 dark:to-indigo-300">
      {children}
    </span>
  );
}

function highlightMetrics(text) {
  const regex = /(99%|10,000\+|10K\+|30%|35%|33%|25%|23%|20%|40%|5 ML models|4\+ years)/g;
  return text.split(regex).map((part, index) =>
    regex.test(part) ? <MetricHighlight key={`${part}-${index}`}>{part}</MetricHighlight> : part
  );
}

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "github") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (name === "linkedin") return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  if (name === "server") return <svg {...common}><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 8h.01M7 17h.01" /></svg>;
  if (name === "cloud") return <svg {...common}><path d="M17.5 19H7a5 5 0 1 1 1.1-9.88A7 7 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 19Z" /></svg>;
  if (name === "database") return <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></svg>;
  if (name === "brain") return <svg {...common}><path d="M8 6a3 3 0 0 1 6 0v12a3 3 0 0 1-6 0" /><path d="M14 6a3 3 0 0 1 6 2.5 3 3 0 0 1-1.4 2.54A3.5 3.5 0 0 1 14 18" /><path d="M8 6a3 3 0 0 0-6 2.5 3 3 0 0 0 1.4 2.54A3.5 3.5 0 0 0 8 18" /><path d="M12 6v12" /></svg>;
  if (name === "graduation") return <svg {...common}><path d="m22 10-10-5-10 5 10 5 10-5Z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /><path d="M22 10v6" /></svg>;
  if (name === "terminal") return <svg {...common}><path d="m7 8 4 4-4 4" /><path d="M13 16h4" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg>;
  return null;
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 120px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-[opacity,transform] duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function Pill({ children, active = false }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
      active
        ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950"
        : "border-slate-200 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
    }`}>
      {children}
    </span>
  );
}

function SectionTitle({ label, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-4xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </Reveal>
  );
}

function DynamicBackground({ dark }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${
        dark
          ? "bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.20),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,.26),transparent_32%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]"
          : "bg-[radial-gradient(circle_at_18%_22%,rgba(125,211,252,.48),transparent_31%),radial-gradient(circle_at_78%_14%,rgba(129,140,248,.34),transparent_33%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)]"
      }`} />
      <div className="absolute left-[5%] top-[17%] h-[360px] w-[760px] animate-[pulse_5s_ease-in-out_infinite] rounded-full border-2 border-dashed border-indigo-400/45 dark:border-cyan-300/25" />
      <div className="absolute right-[7%] top-[10%] h-[430px] w-[680px] animate-[spin_26s_linear_infinite] rounded-full border-2 border-dashed border-sky-400/40 dark:border-indigo-300/25" />
      <div className="absolute left-[48%] top-[31%] h-3 w-3 animate-bounce rounded-full bg-cyan-400/60" />
      <div className="absolute left-[9%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-indigo-400/55" />
      <div className="absolute bottom-[12%] right-[16%] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal delay={index * 80} className={index === 0 ? "md:col-span-2" : ""}>
      <div className="group relative min-h-[440px] [perspective:1400px]">
        <div
          onClick={() => setFlipped(!flipped)}
          className={`relative h-full min-h-[440px] cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-xl shadow-slate-200/60 backdrop-blur transition group-hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:shadow-none [backface-visibility:hidden]">
            <div className="flex items-start justify-between gap-4">
              <Pill>{project.tag}</Pill>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:bg-slate-950 hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-slate-950"
                aria-label={`Open ${project.title} GitHub`}
              >
                <Icon name="github" className="h-5 w-5" />
              </a>
            </div>

            <h3 className="mt-5 text-3xl font-black">{project.title}</h3>
            <p className="mt-4 text-base font-medium leading-8 text-slate-600 dark:text-slate-300">{highlightMetrics(project.description)}</p>

            {project.points && (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {project.points.map(([label, text]) => (
                  <div key={label} className="rounded-3xl bg-slate-950 p-5 text-white dark:bg-white/10">
                    <p className="text-sm font-black text-cyan-200">{label}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-200">{highlightMetrics(text)}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <Pill key={item}>{item}</Pill>)}</div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-cyan-300">
              Click card to view architecture →
            </p>
          </div>

          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-slate-950 p-7 text-white shadow-xl shadow-slate-200/60 dark:bg-white/10 dark:shadow-none [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">Architecture</p>
                <h3 className="mt-4 text-3xl font-black">{project.title}</h3>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black text-white transition hover:bg-white hover:text-slate-950"
              >
                Back
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-black text-cyan-200">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
              <span>{project.status.state}</span>
              <span className="text-slate-400">Ping: {project.status.ping}</span>
              <span className="text-slate-400">Cache: {project.status.cache}</span>
              <span className="text-slate-400">{project.status.throughput}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.architecture.map((node, nodeIndex) => (
                <React.Fragment key={node}>
                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold">
                    {node}
                  </div>
                  {nodeIndex < project.architecture.length - 1 && (
                    <span className="text-cyan-300">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-sm font-medium leading-7 text-slate-300">
              This view shows the system flow behind the project, so recruiters can quickly understand the data path, backend flow, caching layer, and deployment logic.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ApiPlayground() {
  const [command, setCommand] = useState("help");
  const [output, setOutput] = useState({
    message: "Choose a command chip below or type your own command.",
    available_commands: ["help", "skills", "metrics", "projects", "contact"],
  });

  const commands = [
    { label: "help", value: "help" },
    { label: "skills", value: "skills" },
    { label: "metrics", value: "metrics" },
    { label: "projects", value: "projects" },
    { label: "contact", value: "contact" },
  ];

  const runCommand = (incomingCommand) => {
    const cmd = (incomingCommand ?? command).trim().toLowerCase();

    if (cmd === "skills") {
      setCommand("skills");
      setOutput({
        backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Microservices"],
        cloud: ["AWS Lambda", "API Gateway", "Docker", "Jenkins"],
        data_ml: ["Python", "Machine Learning", "Streamlit", "Tableau"],
      });
      return;
    }

    if (cmd === "metrics" || cmd === "curl /api/metrics") {
      setCommand("metrics");
      setOutput({
        experience: "4+ years",
        accuracy: "99%",
        samples: "10,000+",
        database_load_reduced: "35%",
        latency_reduced: "30%",
      });
      return;
    }

    if (cmd === "projects" || cmd === "curl /api/projects") {
      setCommand("projects");
      setOutput({
        featured: "Machinery Fault Severity Intelligence",
        systems: ["Microservices Backend", "Healthcare Analytics", "Obesity Prediction"],
      });
      return;
    }

    if (cmd === "contact") {
      setCommand("contact");
      setOutput({
        email: profile.email,
        linkedin: profile.linkedin,
        github: profile.github,
      });
      return;
    }

    setCommand("help");
    setOutput({
      message: "Try clicking a command chip or typing: skills, metrics, projects, contact.",
      available_commands: ["help", "skills", "metrics", "projects", "contact"],
    });
  };

  return (
    <section id="playground" className="mx-auto max-w-7xl px-5 py-20 scroll-mt-28">
      <SectionTitle
        label="Interactive"
        title="API sandbox for recruiters and engineers."
        subtitle="Click a command chip to return structured portfolio data like a simulated API response."
      />
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/80 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/10 dark:shadow-none">
          <div className="mb-5 flex items-center gap-3">
            <Icon name="terminal" className="h-6 w-6 text-cyan-300" />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">portfolio-api</p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {commands.map((item) => (
              <button
                key={item.value}
                onClick={() => runCommand(item.value)}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black text-slate-200 transition hover:bg-cyan-300 hover:text-slate-950"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runCommand()}
              className="flex-1 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-mono text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
              placeholder="Try: metrics"
            />
            <button onClick={() => runCommand()} className="rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1">
              Run
            </button>
          </div>

          <pre className="mt-5 max-h-[420px] overflow-auto rounded-2xl bg-black/30 p-5 text-sm leading-7 text-cyan-100">
            {JSON.stringify(output, null, 2)}
          </pre>
        </div>
      </Reveal>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [activeSkill, setActiveSkill] = useState("All");
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Akhil Anga";
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      ::selection { background: #67e8f9; color: #020617; }
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = Math.max(window.innerHeight * 0.55, 420);
      setShowTop(window.scrollY > threshold);
      setNavCompact(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold: 0.2, rootMargin: "-20% 0px -55% 0px" }
    );

    sections.forEach((section) => {
      const node = document.getElementById(section);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeSkill === "All") return skills;
    return skills.filter((skill) => skill.category === activeSkill);
  }, [activeSkill]);

  const navItems = [
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["playground", "API"],
    ["experience", "Experience"],
    ["education", "Education"],
    ["contact", "Contact"],
  ];

  const skillFilters = ["All", "Backend", "Cloud", "Data & ML", "Frontend", "Databases"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen overflow-hidden text-slate-950 dark:text-white">
        <DynamicBackground dark={dark} />

        <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
          <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 shadow-xl shadow-slate-200/60 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/75 dark:shadow-none sm:px-5 ${
            navCompact ? "py-2" : "py-3"
          }`}>
            <button onClick={() => scrollTo("home")} className="group flex items-center">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full text-base font-black tracking-tight text-slate-950 transition duration-300 group-hover:scale-110 dark:text-white">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/30 via-white/40 to-indigo-400/30 blur-md transition group-hover:blur-lg" />
                <span className="absolute inset-1 rounded-full border border-slate-200/70 bg-white/40 backdrop-blur dark:border-white/10 dark:bg-white/5" />
                <span className="relative animate-[pulse_3s_ease-in-out_infinite]">AA</span>
              </div>
            </button>

            <div className="ml-auto hidden items-center gap-2 lg:flex">
              {navItems.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`rounded-full px-3 py-2 text-sm font-bold transition ${
                    activeSection === id
                      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-600 hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950"
                  }`}
                >
                  {label}
                </button>
              ))}
              <button onClick={() => setDark(!dark)} className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-slate-900" aria-label="Toggle theme">
                {dark ? "☀️" : "🌙"}
              </button>
            </div>

            <div className="ml-auto flex items-center gap-3 lg:hidden">
              <button onClick={() => setDark(!dark)} className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-slate-900" aria-label="Toggle theme">
                {dark ? "☀️" : "🌙"}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black dark:border-white/10 dark:bg-white/10">
                Menu
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden">
              {navItems.map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="rounded-2xl px-4 py-3 text-left text-sm font-black text-slate-700 hover:bg-slate-950 hover:text-white dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-950">
                  {label}
                </button>
              ))}
            </div>
          )}
        </header>

        <main id="home">
          <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-14 md:grid-cols-[1.05fr_.95fr] md:gap-12 md:pb-16 md:pt-16">
            <Reveal className="pr-0 md:pr-10">
              <Pill>Software Engineering · Cloud · AI/Data</Pill>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Software Engineer building scalable backend systems, cloud-native applications, and AI-powered data products.
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                Software engineer with <MetricHighlight>4+ years</MetricHighlight> of industry experience designing robust, high-throughput microservices. I focus on optimizing database access patterns, containerizing infrastructure, and deploying predictive workflows into reliable production environments.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <button onClick={() => scrollTo("projects")} className="rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-300 transition hover:-translate-y-1 dark:bg-white dark:text-slate-950 dark:shadow-none">
                  Explore Projects →
                </button>
                <a href={profile.resume} download="Venkata_Sai_Akhil_Anga_Software_Engineer_Resume.pdf" className="rounded-full bg-indigo-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-none">
                  Download Resume ↓
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[2rem] bg-slate-950 p-6 shadow-2xl shadow-indigo-200 dark:bg-white/10 dark:shadow-none sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <button
                      key={metric.value}
                      onClick={() => scrollTo(metric.target)}
                      className="group rounded-3xl bg-white/10 p-6 text-left text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:p-7 dark:bg-white/10"
                    >
                      <p className="text-4xl font-black tracking-tight transition group-hover:text-cyan-200 sm:text-5xl">{metric.value}</p>
                      <p className="mt-3 text-sm font-bold leading-5 text-slate-300">{metric.label}</p>
                      <p className="mt-4 text-xs font-black uppercase tracking-[0.25em] text-cyan-200 opacity-0 transition group-hover:opacity-100">View proof →</p>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <Reveal className="mx-auto max-w-7xl px-5 pb-16">
            <div className="flex flex-wrap justify-center gap-3 rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-none">
              {quickFacts.map((fact) => <Pill key={fact}>{fact}</Pill>)}
            </div>
          </Reveal>

          <section id="about" className="mx-auto max-w-7xl px-5 py-20 scroll-mt-28">
            <SectionTitle label="About" title="About me." subtitle="A quick look at where my engineering work is strongest." />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/10 dark:shadow-none">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
                  <div className="relative">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">Focus</p>
                    <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Backend-first engineer building reliable cloud and data systems.</h3>
                    <p className="mt-5 text-sm font-medium leading-8 text-slate-300">
                      I turn product requirements into scalable services, optimized data access, measurable dashboards, and production-ready engineering workflows.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {aboutHighlights.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <div className="group flex h-full gap-5 rounded-[1.5rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:shadow-none">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                        <Icon name={item.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black">{item.title}</h4>
                        <p className="mt-2 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-10">
              <div className="rounded-[2rem] border border-white/80 bg-white/75 p-8 text-base font-medium leading-8 text-slate-600 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300 dark:shadow-none sm:text-lg sm:leading-9">
                <p>
                  I am a software engineer who focuses on building reliable backend platforms, cloud-native services, and data-driven applications. My work combines system design, API development, database optimization, CI/CD, and applied machine learning to ship practical software with measurable business impact.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="skills" className="mx-auto max-w-7xl px-5 py-20 scroll-mt-28">
            <SectionTitle
              label="Skills"
              title="Engineering skillset for backend, cloud, AI, and data products."
              subtitle="4+ years of experience building APIs, cloud-native systems, data workflows, dashboards, and production-ready engineering solutions."
            />
            <Reveal className="mb-8 flex flex-wrap justify-center gap-3">
              {skillFilters.map((filter) => (
                <button key={filter} onClick={() => setActiveSkill(filter)} className={`rounded-full px-5 py-2 text-sm font-black transition ${activeSkill === filter ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "border border-slate-200 bg-white/80 text-slate-600 hover:border-slate-400 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"}`}>
                  {filter}
                </button>
              ))}
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {filteredSkills.map((skill, index) => (
                <Reveal key={skill.title} delay={index * 70}>
                  <div className="flex min-h-[245px] flex-col rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:shadow-none">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-cyan-300">{skill.category}</p>
                    <h3 className="mt-3 text-2xl font-black">{skill.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">{skill.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">{skill.items.map((item) => <Pill key={item}>{item}</Pill>)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-7xl px-5 py-20 scroll-mt-28">
            <SectionTitle label="Projects" title="Proof of systems, data, and product ownership." subtitle="Click any project card to flip it and view the system architecture behind it." />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
          </section>

          <ApiPlayground />

          <section id="experience" className="mx-auto max-w-7xl px-5 py-20 scroll-mt-28">
            <SectionTitle label="Experience" title="A timeline of measurable engineering impact." subtitle="Each role is structured around scope, ownership, and results without unnecessary nested cards." />
            <div className="mx-auto max-w-5xl space-y-6">
              {experience.map((job, index) => (
                <Reveal key={job.role} delay={index * 80}>
                  <div className="rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-xl shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:shadow-none">
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                      <div><h3 className="text-2xl font-black">{job.role}</h3><p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">{job.company}</p></div>
                      <Pill>{job.period}</Pill>
                    </div>
                    <p className="mt-5 rounded-3xl bg-slate-950 p-5 text-sm font-semibold leading-7 text-slate-200 dark:bg-white/10">{highlightMetrics(job.story)}</p>
                    <ul className="mt-6 space-y-4">
                      {job.wins.map((point) => (
                        <li key={point} className="flex gap-3 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">
                          <span className="mt-1 text-indigo-600 dark:text-cyan-300">✓</span>
                          <span>{highlightMetrics(point)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">{job.stack.map((item) => <Pill key={item}>{item}</Pill>)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="education" className="mx-auto max-w-7xl px-5 py-20 scroll-mt-28">
            <SectionTitle label="Education" title="Education & academic foundations." subtitle="Compact confirmation of degrees and technical focus areas." />
            <div className="grid gap-6 lg:grid-cols-2">
              {education.map((edu, index) => (
                <Reveal key={edu.degree} delay={index * 90}>
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-xl shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:shadow-none">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-300/30 blur-3xl dark:bg-cyan-300/20" />
                    <div className="relative">
                      <div className="mb-5 flex items-center justify-between gap-4"><span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white dark:bg-white dark:text-slate-950">{edu.period}</span><span className="text-slate-500 dark:text-slate-300"><Icon name="graduation" className="h-8 w-8" /></span></div>
                      <h3 className="text-2xl font-black">{edu.degree}</h3>
                      <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">{edu.school}</p>
                      <div className="mt-5 flex flex-wrap gap-2">{edu.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-5 py-24 scroll-mt-28">
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-cyan-300">Contact</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Get in <span className="text-indigo-600 dark:text-cyan-300">Touch</span>
                </h2>
                <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-indigo-600 dark:bg-cyan-300" />

                <p className="mx-auto mt-10 max-w-3xl text-xl font-medium leading-9 text-slate-600 dark:text-slate-300">
                  Open to opportunities in <span className="font-black text-indigo-600 dark:text-cyan-300">Software Engineering</span>,{" "}
                  <span className="font-black text-indigo-600 dark:text-cyan-300">Backend Systems</span>,{" "}
                  <span className="font-black text-indigo-600 dark:text-cyan-300">Cloud</span>, and{" "}
                  <span className="font-black text-indigo-600 dark:text-cyan-300">AI/Data Products</span>.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a className="group inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/75 px-7 py-4 text-base font-black text-slate-950 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-indigo-300 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none" href={`mailto:${profile.email}`}>
                    <Icon name="mail" className="h-5 w-5 transition group-hover:scale-110" /> Email
                  </a>
                  <a className="group inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/75 px-7 py-4 text-base font-black text-slate-950 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-indigo-300 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none" href={profile.github} target="_blank" rel="noreferrer">
                    <Icon name="github" className="h-5 w-5 transition group-hover:rotate-12 group-hover:scale-110" /> GitHub
                  </a>
                  <a className="group inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/75 px-7 py-4 text-base font-black text-slate-950 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-indigo-300 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none" href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Icon name="linkedin" className="h-5 w-5 transition group-hover:scale-110" /> LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="border-t border-slate-200/70 px-5 py-8 text-center text-sm font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">
          © {currentYear} Akhil Anga · Software Engineer · Cloud · AI/Data Systems
        </footer>

        {showTop && (
          <button onClick={() => scrollTo("home")} className="fixed bottom-6 right-6 z-50 group flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/85 text-slate-950 shadow-2xl shadow-slate-300/70 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-slate-950 hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:bg-white dark:hover:text-slate-950" aria-label="Scroll to top">
            <span className="text-2xl font-black leading-none transition group-hover:-translate-y-0.5">⌃</span>
          </button>
        )}
      </div>
    </div>
  );
}
