"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  siAngular,
  siApacheairflow,
  siBlazor,
  siBootstrap,
  siCss,
  siDocker,
  siDotnet,
  siExpress,
  siGit,
  siGithub,
  siGitlab,
  siGrafana,
  siHtml5,
  siJavascript,
  siJira,
  siJquery,
  siLaravel,
  siLinux,
  siMongodb,
  siNextdotjs,
  siMysql,
  siNginx,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siRedis,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";

const projects = [
  {
    name: "Bio RPT Service",
    type: "Backend & data",
    description: "An automated .NET backend service that fetches Oracle data to generate AES-encrypted CSV reports.",
    tags: [".NET", "Oracle", "AES"],
  },
  {
    name: "EC Login Web",
    type: "Backend & identity",
    description: "Developed a secure, scalable login and identity management Web API using ASP.NET Core & EF Core.",
    tags: ["ASP.NET Core", "EF Core", "REST API"],
  },
  {
    name: "Dump Data",
    type: "Backend & data",
    description: "A scheduled .NET service that extracts Oracle data, encrypts it with AES, generates automated reports.",
    tags: [".NET", "Oracle", "AES"],
  },
  {
    name: "Airflow DAGs",
    type: "Cloud & DevOps",
    description: "Developed Airflow DAGs to automate scheduled file transfers & live server data backups to SFTP location.",
    tags: ["Airflow", "SFTP", "Backups"],
  },
  {
    name: "QC Web Portal",
    type: "Frontend & workflow",
    description: "A real-time web application for automated testing, quality control workflows, and compliance tracking.",
    tags: ["Angular", "Real-time", "Workflow"],
  },
  {
    name: "Deregistration",
    type: "Web portal",
    description: "Developed a web portal to process bulk SIM deactivations via CSV upload, complete with data validation.",
    tags: ["ASP.NET", "CSV", "Validation"],
  },
];

const skills = [
  { label: "Language", items: ["C#", "SQL", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "PHP", "Python"] },
  { label: "Frontend", items: ["Angular", "React", "Next.js", "Vue.js", "Blazor", ".NET MAUI", "jQuery", "AJAX", "Tailwind CSS", "Bootstrap"] },
  { label: "Backend", items: ["ASP.NET Core (Web API, MVC, Razor)", "EF Core", "LINQ", "ADO.NET", "Node.js", "Express", "Laravel"] },
  { label: "Database", items: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle (PL/SQL)"] },
  { label: "Cloud & DevOps", items: ["Linux", "Docker", "Apache Airflow", "Grafana", "Git", "Git Bash", "GitHub", "GitLab", "IIS", "Nginx"] },
  { label: "Testing & Tools", items: ["REST APIs", "Postman", "Swagger", "Crystal Reports", "XML", "xUnit", "NUnit", "Jira", "etc."] },
];

const skillLogos: Record<string, SimpleIcon> = {
  Angular: siAngular,
  Blazor: siBlazor,
  Bootstrap: siBootstrap,
  CSS3: siCss,
  Docker: siDocker,
  ".NET": siDotnet,
  ".NET MAUI": siDotnet,
  "ASP.NET Core (Web API, MVC, Razor)": siDotnet,
  "EF Core": siDotnet,
  "ADO.NET": siDotnet,
  Express: siExpress,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  Grafana: siGrafana,
  HTML5: siHtml5,
  "JavaScript (ES6+)": siJavascript,
  Jira: siJira,
  jQuery: siJquery,
  Laravel: siLaravel,
  Linux: siLinux,
  MongoDB: siMongodb,
  "Next.js": siNextdotjs,
  MySQL: siMysql,
  Nginx: siNginx,
  "Node.js": siNodedotjs,
  PHP: siPhp,
  PostgreSQL: siPostgresql,
  Postman: siPostman,
  Python: siPython,
  React: siReact,
  Redis: siRedis,
  Swagger: siSwagger,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  "Vue.js": siVuedotjs,
  "Apache Airflow": siApacheairflow,
};

const aboutDescription = "I am a dedicated Full-Stack Software Developer with expertise in ASP.NET. I am proficient at solving complex problems and developing scalable, high-performance applications. My dedication and collaborative spirit make me a valuable team member, committed to delivering high-quality solutions. I thrive on applying my technical expertise to solve real-world problems while continuously growing within an innovative, forward-thinking organization. I am adept at leveraging the full .NET ecosystem to build efficient software.";

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function GitHubMark() {
  return <svg className="github-mark" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.1c-3.18.69-3.85-1.34-3.85-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.54-.29-5.2-1.27-5.2-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.21 5.64.41.36.78 1.08.78 2.18v3.23c0 .3.21.65.79.54A11.3 11.3 0 0 0 12 .7Z" /></svg>;
}

function LinkedInMark() {
  return <svg className="linkedin-mark" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.4A2.4 2.4 0 1 1 .4 3.4a2.4 2.4 0 0 1 4.8 0ZM.8 8.3h4.1V23H.8V8.3Zm6.7 0h3.9v2h.1c.5-1 1.8-2.4 3.8-2.4 4.1 0 4.9 2.7 4.9 6.3V23h-4.1v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V23H7.5V8.3Z" /></svg>;
}

function FacebookMark() {
  return <svg className="facebook-mark" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.2V10H7.3v3h2.8v8h3.4Z" /></svg>;
}

function InfoIcon({ name }: { name: "user" | "pin" | "mail" | "phone" }) {
  const paths = {
    user: <><circle cx="12" cy="8" r="3" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C11.3 19 5 12.7 5 5a2 2 0 0 1 2-2Z" />,
  };
  return <svg className="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function DocumentMark() {
  return <svg className="document-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>;
}

function SkillLogo({ name }: { name: string }) {
  const icon = skillLogos[name];
  if (!icon) return null;

  return (
    <svg className="skill-logo" viewBox="0 0 24 24" fill={`#${icon.hex}`} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

export default function Home() {
  const phrases = ["Full-Stack Software Developer", "ASP.NET Developer", "Web Application Builder"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("top");
  const [contactStatus, setContactStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSending, setIsSending] = useState(false);
  const portfolioRef = useRef<HTMLElement>(null);

  const navigation = [
    ["top", "⌂", "Home"],
    ["about", "◎", "About"],
    ["experience", "◷", "Experience"],
    ["work", "▣", "Projects"],
    ["skills", "◈", "Skills"],
    ["education", "▤", "Education"],
    ["references", "▧", "References"],
    ["contact", "✉", "Contact"],
  ] as const;

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let position = 0;
    let pauseTimer: number | undefined;
    const typingTimer = window.setInterval(() => {
      position += 1;
      setTypedText(phrase.slice(0, position));
      if (position === phrase.length) {
        window.clearInterval(typingTimer);
        pauseTimer = window.setTimeout(() => setPhraseIndex((current) => (current + 1) % phrases.length), 1500);
      }
    }, 75);
    return () => {
      window.clearInterval(typingTimer);
      if (pauseTimer) window.clearTimeout(pauseTimer);
    };
  }, [phraseIndex]);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.35, 0.7] });
    navigation.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    const portfolio = portfolioRef.current;
    if (!portfolio) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    portfolio.style.setProperty("--mouse-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    portfolio.style.setProperty("--mouse-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus(null);
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result: { message?: string; error?: string } = await response.json();
      if (!response.ok) {
        setContactStatus({ type: "error", message: result.error ?? "Your message could not be sent. Please try again." });
        return;
      }
      form.reset();
      setContactStatus({ type: "success", message: result.message ?? "Your message has been sent." });
    } catch {
      setContactStatus({ type: "error", message: "Unable to reach the server. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main ref={portfolioRef} className="old-portfolio" onPointerMove={handleHeroPointerMove}>
      <aside className="sidebar">
        <a className="sidebar-profile" href="#top" onClick={() => setActiveSection("top")}><span className="avatar"><img src="/personal.jpg" alt="Md. Abdul Latif Siyam" loading="lazy" decoding="async" /></span><strong>Md. Abdul Latif Siyam</strong><small>Software Developer</small></a>
        <div className="sidebar-socials" aria-label="Social profiles"><a className="linkedin-link" href="https://www.linkedin.com/in/mdalsiyam/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInMark /></a><span className="facebook-placeholder" title="Facebook"><FacebookMark /></span><a className="github-link" href="https://github.com/MdALSiyam" target="_blank" rel="noreferrer" title="GitHub"><GitHubMark /></a></div>
        <nav className="side-nav" aria-label="Primary navigation">
          {navigation.map(([id, icon, label]) => <a className={activeSection === id ? "active" : ""} href={`#${id}`} onClick={() => setActiveSection(id)} key={id}><span>{icon}</span> {label}</a>)}
          <a className="side-nav-download" href="/cv.pdf" download><span>⇩</span> Download CV</a>
        </nav>
        <p className="sidebar-footer">© 2026 · Dhaka, Bangladesh</p>
      </aside>

      <div className="portfolio-content">
        <section className="old-hero" id="top">
          <img className="hero-background" src="/background.webp" alt="" fetchPriority="high" decoding="async" />
          <span className="water-wave wave-one" aria-hidden="true" />
          <span className="water-wave wave-two" aria-hidden="true" />
          <span className="water-wave wave-three" aria-hidden="true" />
          <div className="hero-overlay"><p>Hi, I&apos;m</p><h1>Md. Abdul Latif Siyam</h1><span className="typing-line">{typedText}<b className="typing-cursor">|</b></span><a className="hero-button" href="#about"><span>Explore my profile</span><Arrow /></a></div>
        </section>

        <section className="old-section about-section" id="about">
          <div className="old-heading"><div><h2>About</h2><i /></div></div>
          <div className="about-layout"><div className="portrait"><div className="portrait-header"><span>Md. Abdul Latif Siyam</span></div><div className="portrait-body"><img src="/passport.jpg" alt="Md. Abdul Latif Siyam" loading="lazy" decoding="async" /></div><div className="portrait-footer"><span>Full-Stack Software Developer</span></div></div><div className="about-text"><p className="lead"><InfoIcon name="user" /><span>{aboutDescription}</span></p><div className="profile-details"><p><b>Full Name</b>Md. Abdul Latif (Siyam)</p><p><b>Role</b>Full-Stack Software Developer</p><p><b>Location</b><span className="detail-value"><InfoIcon name="pin" />ECB Chattar, Dhaka Cantonment</span></p><p><b>Email</b><span className="detail-value"><InfoIcon name="mail" /><a href="mailto:mdabdullatifsiyam733@gmail.com">mdabdullatifsiyam733@gmail.com</a></span></p><p><b>Phone</b><span className="detail-value"><InfoIcon name="phone" /><span><a href="tel:01909424048">01909424048</a> / <a href="tel:01636238098">01636238098</a></span></span></p><p className="profiles-detail"><b>Profiles</b><span className="profiles-links"><a className="social-link linkedin-link" href="https://www.linkedin.com/in/mdalsiyam/" target="_blank" rel="noreferrer"><span className="social-icon"><LinkedInMark /></span> LinkedIn</a><a className="social-link github-link" href="https://github.com/MdALSiyam" target="_blank" rel="noreferrer"><span className="social-icon"><GitHubMark /></span> GitHub</a></span></p></div></div></div>
        </section>

        <section className="old-section history-section" id="experience"><div className="old-heading"><div><h2>Experiences Certifications</h2><i /></div></div><div className="split-history"><div className="history-column"><h3 className="history-label">Professional Experience</h3><div className="old-timeline"><div><h3>Junior Software Engineer</h3><b>August 2025 — July 2026</b><p>Biometric &amp; Sales Commission Team, NAAS Solutions Limited</p></div><div><h3>ASP.NET Developer</h3><b>May 2025 — July 2025</b><p>Internship (Part-Time &amp; Remote), Itransition Group</p></div></div></div><div className="history-column"><h3 className="history-label">Certifications</h3><div className="old-timeline"><div><h3>Cross-Platform Applications (ASP.NET, Angular, React)</h3><b>June 2024 — May 2025</b><p>IsDB-BISEW IT Scholarship</p></div><div><h3>Web Development (PHP-Laravel)</h3><b>January 2024 — June 2024</b><p>BITM</p></div></div></div></div></section>

        <section className="old-section" id="work"><div className="old-heading"><div><h2>Projects</h2><i /></div></div><div className="old-project-grid">{projects.map((project) => <article className="old-project" key={project.name}><h3>{project.name}</h3><p>{project.description}</p><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section className="old-section" id="skills"><div className="old-heading"><div><h2>Technical Skills</h2></div></div><div className="old-skills">{skills.map((skill) => <article className="old-skill" key={skill.label}><h3 className="skill-label">{skill.label}</h3><div className="skill-list">{skill.items.map((name) => <span className="skill-chip" key={name}><SkillLogo name={name} />{name}</span>)}</div></article>)}</div></section>

        <section className="old-section history-section education-section" id="education"><div className="old-heading"><div><h2>Educations</h2><i /></div></div><div className="split-history education-columns"><div className="history-column"><div className="old-timeline"><div><h3>IELTS (Academic)</h3><p>Overall – 6.0/9.0<br />IDP (July, 2026)</p></div><div><h3>BSc in Botany</h3><p>CGPA – 3.10/4.00<br />JnU (2019 – 2023)</p></div></div></div><div className="history-column"><div className="old-timeline"><div><h3>HSC in Science</h3><p>GPA – 4.25/5.00<br />SRCC (2016 – 2018)</p></div><div><h3>SSC in Science</h3><p>GPA – 5.00/5.00<br />ABNM (2014 – 2016)</p></div></div></div></div></section>

        <section className="old-section references-section" id="references"><div className="old-heading"><div><h2>References</h2><i /></div></div><div className="references-block"><div className="reference-heading"><span className="reference-icon"><InfoIcon name="user" /></span><div><h3>Professional References</h3></div></div><div className="reference-list"><article><h3>Nishat Sharmeen</h3><p>Senior Software Engineer</p><p>Star Computer Systems Limited, Green Road</p><div className="reference-contact"><a href="tel:01681448988"><InfoIcon name="phone" />01681448988</a><a href="mailto:nishatsharmeen@gmail.com"><InfoIcon name="mail" />nishatsharmeen@gmail.com</a></div></article><article><h3>Md. Mohsin Alam</h3><p>Junior Assistant Vice President</p><p>Shahjalal Islami Bank PLC, Motijheel Branch</p><div className="reference-contact"><a href="tel:01917031058"><InfoIcon name="phone" />01917031058</a><a href="mailto:mohsin3168@sjiblbd.com"><InfoIcon name="mail" />mohsin3168@sjiblbd.com</a></div></article></div></div></section>

        <section className="old-contact" id="contact"><p>Let&apos;s work together</p><h2>Have a project in mind?</h2><div className="contact-details-grid"><a href="mailto:mdabdullatifsiyam733@gmail.com"><span className="contact-icon"><InfoIcon name="mail" /></span> mdabdullatifsiyam733@gmail.com</a><a href="tel:01909424048"><span className="contact-icon"><InfoIcon name="phone" /></span> 01909424048</a><span><span className="contact-icon"><InfoIcon name="pin" /></span> ECB Chattar, Dhaka Cantonment</span></div><form className="contact-form" onSubmit={handleContactSubmit}><input aria-label="Your name" name="name" placeholder="Your name" autoComplete="name" maxLength={100} required /><input aria-label="Your email" name="email" type="email" placeholder="Your email" autoComplete="email" maxLength={254} required /><textarea aria-label="Your message" name="message" placeholder="Your message" rows={4} maxLength={5000} required /><button type="submit" disabled={isSending}>{isSending ? "Sending..." : "Send message"} <Arrow /></button>{contactStatus && <p className={`contact-status ${contactStatus.type}`} role={contactStatus.type === "error" ? "alert" : "status"}>{contactStatus.message}</p>}</form><div className="contact-phones"><a className="social-link linkedin-link" href="https://www.linkedin.com/in/mdalsiyam/" target="_blank" rel="noreferrer"><span className="social-icon"><LinkedInMark /></span> LinkedIn</a><a className="social-link github-link" href="https://github.com/MdALSiyam" target="_blank" rel="noreferrer"><span className="social-icon"><GitHubMark /></span> GitHub</a></div></section><footer className="old-footer">© 2026 Md. Abdul Latif (Siyam) <span>Full-Stack Software Developer · Dhaka</span></footer>
      </div>
    </main>
  );
}
