"use client";

import { useEffect, useState, type CSSProperties } from "react";

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
  { label: "Language", value: "C# · SQL · JavaScript (ES6+) · TypeScript · HTML5 · CSS3 · PHP · Python", level: 88 },
  { label: "Database", value: "Microsoft SQL Server · PostgreSQL · MySQL · MongoDB · Redis · Oracle (PL/SQL)", level: 86 },
  { label: "Backend", value: "ASP.NET Core (Web API, MVC, Razor) · EF Core · LINQ · ADO.NET · Node.js · Express · Laravel", level: 92 },
  { label: "Frontend", value: "Angular · React · Next.js · Vue.js · Blazor · .NET MAUI · jQuery · AJAX · Tailwind CSS · Bootstrap", level: 84 },
  { label: "Cloud & DevOps", value: "Linux · Docker · Apache Airflow · Grafana · Git · Git Bash · GitHub · GitLab · IIS · Nginx", level: 78 },
  { label: "Testing & Tools", value: "REST APIs · Postman · Swagger · Crystal Reports · XML · xUnit · NUnit · Jira", level: 82 },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  const phrases = ["Full-Stack Software Developer", "ASP.NET Developer", "Web Application Builder"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

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

  return (
    <main className="old-portfolio">
      <aside className="sidebar">
        <a className="sidebar-profile" href="#top"><span className="avatar">ALS</span><strong>Md. Abdul Latif Siyam</strong><small>Software Developer</small></a>
        <nav className="side-nav" aria-label="Primary navigation">
          <a className="active" href="#top"><span>⌂</span> Home</a>
          <a href="#about"><span>◎</span> About</a>
          <a href="#work"><span>▣</span> Projects</a>
          <a href="#skills"><span>◈</span> Skills</a>
          <a href="#experience"><span>◷</span> Experience</a>
          <a href="#education"><span>▤</span> Education</a>
          <a href="#contact"><span>✉</span> Contact</a>
        </nav>
        <a className="sidebar-cv" href="/cv.pdf" download>Download CV <Arrow /></a>
        <p className="sidebar-footer">© 2026<br />Dhaka, Bangladesh</p>
      </aside>

      <div className="portfolio-content">
        <section className="old-hero" id="top">
          <div className="hero-overlay"><p>Hi, I&apos;m</p><h1>Md. Abdul Latif Siyam</h1><span className="typing-line">{typedText}<b className="typing-cursor">|</b></span><a className="hero-button" href="#about"><span>Explore my profile</span><Arrow /></a></div>
        </section>

        <section className="old-section about-section" id="about">
          <div className="old-heading"><div><h2>About</h2><i /></div></div>
          <div className="about-layout"><div className="portrait"><span>Md. Abdul Latif (Siyam)</span></div><div className="about-text"><p className="lead">I&apos;m a dedicated Full-Stack Software Developer with expertise in ASP.NET, building scalable, high-performance applications.</p><div className="profile-details"><p><b>Full Name</b>Md. Abdul Latif (Siyam)</p><p><b>Role</b>Full-Stack Software Developer</p><p><b>Location</b>ECB Chattar, Dhaka Cantonment</p><p><b>Email</b><a href="mailto:mdabdullatifsiyam733@gmail.com">mdabdullatifsiyam733@gmail.com</a></p><p><b>Phone</b><a href="tel:01909424048">01909424048</a> / <a href="tel:01636238098">01636238098</a></p><p><b>Profiles</b><a href="https://www.linkedin.com/in/mdalsiyam/" target="_blank" rel="noreferrer">LinkedIn</a> <span className="profile-divider">·</span> <a href="https://github.com/MdALSiyam" target="_blank" rel="noreferrer">GitHub</a></p></div><p>I thrive on solving complex problems and delivering high-quality solutions across the full .NET ecosystem while continuously growing within innovative teams.</p></div></div>
        </section>

        <section className="old-section" id="work"><div className="old-heading"><div><h2>Projects</h2><i /></div></div><div className="old-project-grid">{projects.map((project) => <article className="old-project" key={project.name}><h3>{project.name}</h3><p>{project.description}</p><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section className="old-section" id="skills"><div className="old-heading"><div><h2>Technical Skills</h2><i /></div></div><div className="old-skills">{skills.map((skill) => <div className="old-skill" key={skill.label}><div className="skill-label"><strong>{skill.label}</strong></div><div className="skill-track"><span style={{ "--skill-level": `${skill.level}%` } as CSSProperties} /></div><p>{skill.value}</p></div>)}</div></section>

        <section className="old-section history-section" id="experience"><div className="old-heading"><div><h2>Experience &amp; Certifications</h2><i /></div></div><div className="split-history"><div className="history-column"><h3 className="history-label">Professional Experience</h3><div className="old-timeline"><div><b>August 2025 — July 2026</b><h3>Junior Software Engineer</h3><p>Biometric &amp; Sales Commission Team · NAAS Solutions Limited</p></div><div><b>May 2025 — July 2025</b><h3>ASP.NET Developer</h3><p>Internship, part-time &amp; remote · Itransition Group</p></div></div></div><div className="history-column"><h3 className="history-label">Certifications &amp; Training</h3><div className="old-timeline"><div><b>June 2024 — May 2025</b><h3>Cross-Platform Applications</h3><p>ASP.NET, Angular, React · IsDB-BISEW IT Scholarship</p></div><div><b>January 2024 — June 2024</b><h3>Web Development</h3><p>PHP-Laravel · BITM</p></div></div></div></div></section>

        <section className="old-section history-section education-section" id="education"><div className="old-heading"><div><h2>Education</h2><i /></div></div><div className="split-history"><div className="history-column"><h3 className="history-label">Higher Education</h3><div className="old-timeline"><div><b>July 2026</b><h3>IELTS (Academic)</h3><p>Overall 6.0/9.0 · IDP</p></div><div><b>2019 — 2023</b><h3>BSc in Botany</h3><p>CGPA 3.10/4.00 · JnU</p></div></div></div><div className="history-column"><h3 className="history-label">Secondary Education</h3><div className="old-timeline"><div><b>2016 — 2018</b><h3>HSC in Science</h3><p>GPA 4.25/5.00 · SRCC</p></div><div><b>2014 — 2016</b><h3>SSC in Science</h3><p>GPA 5.00/5.00 · ABNM</p></div></div></div></div></section>

        <section className="old-contact" id="contact"><p>Let&apos;s work together</p><h2>Have a project in mind?</h2><a href="mailto:mdabdullatifsiyam733@gmail.com">mdabdullatifsiyam733@gmail.com <Arrow /></a><div className="contact-phones"><a href="tel:01909424048">01909424048</a><a href="tel:01636238098">01636238098</a><a href="https://www.linkedin.com/in/mdalsiyam/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/MdALSiyam" target="_blank" rel="noreferrer">GitHub</a></div></section><footer className="old-footer">© 2026 Md. Abdul Latif (Siyam) <span>Full-Stack Software Developer · Dhaka</span></footer>
      </div>
    </main>
  );
}
