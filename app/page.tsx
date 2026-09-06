"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

const projects = [
  {
    name: "Bio RPT Service",
    type: "Backend & data",
    description: "An automated .NET backend service that fetches Oracle data and generates AES-encrypted CSV reports.",
    tags: [".NET", "Oracle", "AES"],
  },
  {
    name: "EC Login Web",
    type: "Backend & identity",
    description: "A secure, scalable login and identity management Web API built with ASP.NET Core 8 and Entity Framework Core.",
    tags: ["ASP.NET Core", "EF Core", "REST API"],
  },
  {
    name: "QC Web Portal",
    type: "Frontend & workflow",
    description: "A real-time web application for automated seating, quality control workflows, and compliance tracking.",
    tags: ["Angular", "Real-time", "Workflow"],
  },
  {
    name: "Deregistration",
    type: "Web portal",
    description: "A bulk SMS deactivation portal with CSV upload, validation, and a streamlined processing workflow.",
    tags: ["ASP.NET", "CSV", "Validation"],
  },
  {
    name: "Dump Data",
    type: "Backend & data",
    description: "A scheduled .NET service that extracts Oracle data, encrypts it with AES, and generates automated reports.",
    tags: [".NET", "Oracle", "AES"],
  },
  {
    name: "Airflow DAGs",
    type: "Cloud & DevOps",
    description: "Airflow DAGs that automate scheduled file transfers and live server data backups to an SFTP location.",
    tags: ["Airflow", "SFTP", "Backups"],
  },
];

const skills = [
  { icon: "code", label: "Language", value: "C# · SQL · JavaScript (ES6+) · TypeScript · HTML5 · CSS3 · PHP · Python", level: 88 },
  { icon: "layout", label: "Frontend", value: "Angular · React · Next.js · Vue.js · Blazor · .NET MAUI · jQuery · AJAX · Tailwind CSS · Bootstrap", level: 84 },
  { icon: "server", label: "Backend", value: "ASP.NET Core (Web API, MVC, Razor) · EF Core · LINQ · ADO.NET · Node.js · Express · Laravel", level: 92 },
  { icon: "database", label: "Database", value: "Microsoft SQL Server · PostgreSQL · MySQL · MongoDB · Redis · Oracle (PL/SQL)", level: 86 },
  { icon: "cloud", label: "Cloud & DevOps", value: "Linux · Docker · Apache Airflow · Grafana · Git · Git Bash · GitHub · GitLab · IIS · Nginx", level: 78 },
  { icon: "check", label: "Testing & Tools", value: "REST APIs · Postman · Swagger · Crystal Reports · XML · xUnit · NUnit · Jira", level: 82 },
];

const aboutDescription = "I am a dedicated Full-Stack Software Developer with expertise in ASP.NET, building scalable, high-performance applications.";

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

function SkillIcon({ name }: { name: string }) {
  const paths = {
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12" /></>,
    database: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" /></>,
    server: <><rect x="4" y="4" width="16" height="6" rx="1" /><rect x="4" y="14" width="16" height="6" rx="1" /><path d="M8 7h.01M8 17h.01" /></>,
    layout: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M10 10v10" /></>,
    cloud: <path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.1 8.7 4.5 4.5 0 0 0 7 18Z" />,
    check: <><path d="m5 12 4 4L19 6" /><circle cx="12" cy="12" r="9" /></>,
  };
  return <svg className="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name as keyof typeof paths]}</svg>;
}

export default function Home() {
  const phrases = ["Full-Stack Software Developer", "ASP.NET Developer", "Web Application Builder"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [aboutTypedText, setAboutTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("top");
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
    let position = 0;
    let deleting = false;
    let timer: number;
    const tick = () => {
      if (deleting) position -= 1;
      else position += 1;
      setAboutTypedText(aboutDescription.slice(0, position));
      if (position === aboutDescription.length) deleting = true;
      if (position === 0) deleting = false;
      timer = window.setTimeout(tick, position === aboutDescription.length ? 1800 : position === 0 ? 500 : deleting ? 35 : 55);
    };
    timer = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timer);
  }, [aboutDescription]);

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
          <div className="about-layout"><div className="portrait"><div className="portrait-header"><span>Md. Abdul Latif Siyam</span></div><div className="portrait-body"><img src="/passport.jpg" alt="Md. Abdul Latif Siyam" loading="lazy" decoding="async" /></div><div className="portrait-footer"><span>Full-Stack Software Developer</span></div></div><div className="about-text"><p className="lead"><InfoIcon name="user" /><span>{aboutTypedText}<b className="about-typing-cursor">|</b></span></p><div className="profile-details"><p><b>Full Name</b>Md. Abdul Latif (Siyam)</p><p><b>Role</b>Full-Stack Software Developer</p><p><b>Location</b><span className="detail-value"><InfoIcon name="pin" />ECB Chattar, Dhaka Cantonment</span></p><p><b>Email</b><span className="detail-value"><InfoIcon name="mail" /><a href="mailto:mdabdullatifsiyam733@gmail.com">mdabdullatifsiyam733@gmail.com</a></span></p><p><b>Phone</b><span className="detail-value"><InfoIcon name="phone" /><span><a href="tel:01909424048">01909424048</a> / <a href="tel:01636238098">01636238098</a></span></span></p><p className="profiles-detail"><b>Profiles</b><span className="profiles-links"><a className="social-link linkedin-link" href="https://www.linkedin.com/in/mdalsiyam/" target="_blank" rel="noreferrer"><span className="social-icon"><LinkedInMark /></span> LinkedIn</a><a className="social-link github-link" href="https://github.com/MdALSiyam" target="_blank" rel="noreferrer"><span className="social-icon"><GitHubMark /></span> GitHub</a></span></p></div><p className="objective-continuation">I thrive on applying my technical expertise to solve real-world problems while continuously growing within an innovative, forward-thinking organization. I am adept at leveraging the full .NET ecosystem to build efficient software.</p></div></div>
        </section>

        <section className="old-section history-section" id="experience"><div className="old-heading"><div><h2>Experience &amp; Certifications</h2><i /></div></div><div className="split-history"><div className="history-column"><h3 className="history-label">Professional Experience</h3><div className="old-timeline"><div><h3>Junior Software Engineer</h3><b>August 2025 — July 2026</b><p>Biometric &amp; Sales Commission Team<br />NAAS Solutions Limited</p></div><div><h3>ASP.NET Developer</h3><b>May 2025 — July 2025</b><p>Internship, part-time &amp; remote<br />Itransition Group</p></div></div></div><div className="history-column"><h3 className="history-label">Certifications &amp; Training</h3><div className="old-timeline"><div><h3>Cross-Platform Applications</h3><b>June 2024 — May 2025</b><p>ASP.NET, Angular, React<br />IsDB-BISEW IT Scholarship</p></div><div><h3>Web Development</h3><b>January 2024 — June 2024</b><p>PHP-Laravel<br />BITM</p></div></div></div></div></section>

        <section className="old-section" id="work"><div className="old-heading"><div><h2>Projects</h2><i /></div></div><div className="old-project-grid">{projects.map((project) => <article className="old-project" key={project.name}><h3>{project.name}</h3><p>{project.description}</p><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section className="old-section" id="skills"><div className="old-heading"><div><h2>Technical Skills</h2></div></div><div className="old-skills">{skills.map((skill) => <div className="old-skill" key={skill.label}><div className="skill-label"><span className="skill-icon"><SkillIcon name={skill.icon} /></span><strong>{skill.label}</strong></div><div className="skill-track"><span style={{ "--skill-level": `${skill.level}%` } as CSSProperties} /></div><p>{skill.value}</p></div>)}</div></section>

        <section className="old-section history-section education-section" id="education"><div className="old-heading"><div><h2>Education</h2><i /></div></div><div className="split-history education-columns"><div className="history-column"><h3 className="history-label">Higher Education</h3><div className="old-timeline"><div><b>IELTS (Academic)</b><h3>Compass Education Limited</h3><p>Overall — 6.0 out of 9.0<br />July, 2026</p></div><div><b>BSc in Botany</b><h3>Jagannath University</h3><p>CGPA — 3.10 out of 4.00<br />2019 — 2023</p></div></div></div><div className="history-column"><h3 className="history-label">Secondary Education</h3><div className="old-timeline"><div><b>HSC in Science</b><h3>Shaheed Ramizuddin Cantonment College</h3><p>GPA — 4.25 out of 5.00<br />2016 — 2018</p></div><div><b>SSC in Science</b><h3>Adarsha Biddya Niketan Manikdi</h3><p>GPA — 5.00 out of 5.00<br />2014 — 2016</p></div></div></div></div></section>

        <section className="old-section references-section" id="references"><div className="old-heading"><div><h2>References</h2><i /></div></div><div className="references-block"><div className="reference-heading"><span className="reference-icon"><InfoIcon name="user" /></span><div><h3>Professional References</h3></div></div><div className="reference-list"><article><h3>Nishat Sharmeen</h3><p>Senior Software Engineer</p><p>Star Computer Systems Limited, Green Road</p><div className="reference-contact"><a href="tel:01681448988"><InfoIcon name="phone" />01681448988</a><a href="mailto:nishatsharmeen@gmail.com"><InfoIcon name="mail" />nishatsharmeen@gmail.com</a></div></article><article><h3>Md. Mohsin Alam</h3><p>Junior Assistant Vice President</p><p>Shahjalal Islami Bank PLC, Motijheel Branch</p><div className="reference-contact"><a href="tel:01917031058"><InfoIcon name="phone" />01917031058</a><a href="mailto:mohsin3168@sibl.com"><InfoIcon name="mail" />mohsin3168@sibl.com</a></div></article></div></div></section>

        <section className="old-contact" id="contact"><p>Let&apos;s work together</p><h2>Have a project in mind?</h2><div className="contact-details-grid"><a href="mailto:mdabdullatifsiyam733@gmail.com"><span className="contact-icon"><InfoIcon name="mail" /></span> mdabdullatifsiyam733@gmail.com</a><a href="tel:01909424048"><span className="contact-icon"><InfoIcon name="phone" /></span> 01909424048</a><span><span className="contact-icon"><InfoIcon name="pin" /></span> ECB Chattar, Dhaka Cantonment</span></div><form className="contact-form"><input aria-label="Your name" name="name" placeholder="Your name" required /><input aria-label="Your email" name="email" type="email" placeholder="Your email" required /><textarea aria-label="Your message" name="message" placeholder="Your message" rows={4} required /><button type="submit">Send message <Arrow /></button></form><div className="contact-phones"><a className="social-link linkedin-link" href="https://www.linkedin.com/in/mdalsiyam/" target="_blank" rel="noreferrer"><span className="social-icon"><LinkedInMark /></span> LinkedIn</a><a className="social-link github-link" href="https://github.com/MdALSiyam" target="_blank" rel="noreferrer"><span className="social-icon"><GitHubMark /></span> GitHub</a></div></section><footer className="old-footer">© 2026 Md. Abdul Latif (Siyam) <span>Full-Stack Software Developer · Dhaka</span></footer>
      </div>
    </main>
  );
}
