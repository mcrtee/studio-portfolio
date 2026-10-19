import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Chat Bot",
    type: "Telegram chat bot",
    description:
      "A Telegram chat bot that provides users with information and assistance on various topics",
    tags: ["JavaScript", "HTML", "CSS"],
    image:
      "https://cdn2.umnico.com/production/landing/en-article26.png",
    github: "https://github.com/mcrtee/chat-bot.git",
    demo: "",
  },
  {
    number: "02",
    title: "Battleship",
    type: "Game Development",
    description:
      "A classic naval strategy game reimagined for the web.",
    tags: ["JavaScript", "CSS", "Game Logic"],
    image:
      "https://i.ytimg.com/vi/gN5H1fJh5v0/maxresdefault.jpg",
    vercel: "https://battleship-puce-psi.vercel.app/",
    demo: "",
  },
  {
    number: "03",
    title: "Coin-Rush Game",
    type: "Web multiplayer game",
    description:
      "A web-based multiplayer game where players collect coins while avoiding obctacles",
    tags: ["Java", "PostgreSQL", "MVC"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8qbGDL2gJOE7vk_FDQ21DP4uvJ2sQRCD6DR3kNHX-Uj0G0Rx7lFFsKI&s=10",
    render: "https://coinrush-1uk0.onrender.com/?room=GCTD",
    demo: "",
  },
];

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a
        href="#home"
        className="brand"
        onClick={() => setMenuOpen(false)}
      >
        <span className="brand-mark">M.</span>
        <span>INDEPENDENT STUDIO</span>
      </a>

      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {navigation.map((item) => (
          <a
            href={item.href}
            key={item.label}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="availability">
          <span className="status-dot" />
          INDEPENDENT DEVELOPER & CREATIVE STUDIO
        </div>

        <h1>
          Ideas into
          <br />
          <span className="outline-text">digital</span>{" "}
          experiences<span className="accent">.</span>
        </h1>

        <p className="hero-description">
          We design and build thoughtful digital products,
          interactive experiences and things worth exploring.
        </p>

        <div className="hero-actions">
          <a href="#work" className="button-primary">
            Explore our work <ArrowDown size={17} />
          </a>

          <a href="#about" className="text-link">
            Discover the studio <ArrowUpRight size={17} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="visual-grid" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />

        <div className="visual-label">
          <span>CREATIVE TECHNOLOGY</span>
          <span>EST. 2026</span>
        </div>

        <div className="visual-center">
          <span className="visual-symbol">M</span>
          <span className="visual-caption">
            DESIGN · CODE · EXPERIENCE
          </span>
        </div>

        <div className="visual-index">001 — 026</div>
      </motion.div>

      <div className="hero-bottom">
        <span>BASED IN KYRGYZSTAN · WORKING WORLDWIDE</span>
        <a href="#work">
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, number }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <span className="section-number">{number} / 03</span>
    </div>
  );
}

function Projects() {
  return (
    <section className="work-section section-shell" id="work">
      <SectionHeading
        eyebrow="SELECTED PROJECTS"
        title="Things we've made."
        number="01"
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
          >
            <div className="project-image-wrap">
              <img
                className="project-image"
                src={project.image}
                alt={`${project.title} project cover`}
                loading="lazy"
              />
              <span className="project-number">{project.number}</span>
              <span className="project-type">{project.type}</span>
            </div>

            <div className="project-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ArrowUpRight className="project-arrow" size={23} />
            </div>

            <div className="project-footer">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <span className="github-mark">GH</span> Source
                  </a>
                ) : null}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live demo <ArrowUpRight size={14} />
                  </a>
                ) : null}

                {!project.github && !project.demo && (
                  <span className="project-link coming-soon">
                    Links coming soon
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="work-note">
        A selection of experiments, academic work and personal projects.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-shell" id="about">
      <SectionHeading
        eyebrow="A LITTLE ABOUT US"
        title="Small studio. Big curiosity."
        number="02"
      />

      <div className="about-layout">
        <div className="about-statement">
          <p>
            We believe technology should be useful,
            beautiful and a little unexpected.
          </p>
        </div>

        <div className="about-details">
          <p>
            An independent creative technology studio
            exploring the intersection of development,
            design and interactive experiences.
          </p>

          <p>
            Led by a developer with a passion for building
            digital products, from first sketches to working
            applications.
          </p>

          <div className="service-list">
            <span>01 / Web development</span>
            <span>02 / UI & UX design</span>
            <span>03 / Interactive experiences</span>
            <span>04 / Creative experiments</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <span className="eyebrow">HAVE SOMETHING IN MIND?</span>

      <h2>
        Let's make
        <br />
        something <span>meaningful.</span>
      </h2>

      <p>
        Have a project, an idea or just want to say hello?
        Let's start a conversation.
      </p>

      <a
        href="mailto:hello@example.com"
        className="button-primary"
      >
        Get in touch <ArrowUpRight size={17} />
      </a>

      <span className="contact-note">
        CONSULTATIONS · COLLABORATIONS · NEW IDEAS
      </span>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-shell">
      <a href="#home" className="brand">
        <span className="brand-mark">M.</span>
        <span>INDEPENDENT STUDIO</span>
      </a>

      <span>© 2026 · DESIGNED WITH INTENTION</span>

      <a href="#home" className="back-to-top">
        BACK TO TOP ↑
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}