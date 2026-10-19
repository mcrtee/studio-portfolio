import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Send,
  CheckCircle2,
  Globe,
  LoaderCircle,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Chat Bot",
    type: "Telegram Chat Bot",
    description: {
      en: "A Telegram bot designed to provide useful information and assistance.",
      ru: "Telegram-бот, который помогает пользователям и предоставляет полезную информацию.",
    },
    tags: ["JavaScript", "Bot UX"],
    image:
      "https://cdn2.umnico.com/production/landing/en-article26.png",
    github: "https://github.com/mcrtee/chat-bot",
    demo: "",
  },
  {
    number: "02",
    title: "Battleship",
    type: "Browser Game",
    description: {
      en: "A classic naval strategy game reimagined for the web.",
      ru: "Классическая стратегическая игра «Морской бой» в браузере.",
    },
    tags: ["JavaScript", "CSS", "Game Logic"],
    image:
      "https://i.ytimg.com/vi/gN5H1fJh5v0/maxresdefault.jpg",
    github: "",
    demo: "https://battleship-puce-psi.vercel.app/",
  },
  {
    number: "03",
    title: "Coin-Rush Game",
    type: "Web Multiplayer Game",
    description: {
      en: "A multiplayer game where players collect coins and avoid obstacles.",
      ru: "Многопользовательская игра, где нужно собирать монеты и избегать препятствий.",
    },
    tags: ["Web", "Multiplayer", "Game"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8qbGDL2gJOE7vk_FDQ21DP4uvJ2sQRCD6DR3kNHX-Uj0G0Rx7lFFsKI&s=10",
    github: "",
    demo: "https://coinrush-1uk0.onrender.com/?room=GCTD",
  },
];

const content = {
  en: {
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    talk: "Let's talk",
    availability: "INDEPENDENT DEVELOPER & CREATIVE STUDIO",
    heroLine1: "Ideas into",
    heroLine2: "digital",
    heroLine3: "experiences",
    heroDescription:
      "I build thoughtful digital products, interactive experiences and things worth exploring.",
    explore: "Explore my work",
    discover: "Discover the studio",
    location: "BASED IN KYRGYZSTAN · WORKING WORLDWIDE",
    scroll: "SCROLL TO EXPLORE",
    selected: "SELECTED PROJECTS",
    workTitle: "Things I've made.",
    source: "Source code",
    liveDemo: "Live demo",
    linksSoon: "Links coming soon",
    workNote: "A selection of personal projects and experiments.",
    aboutEyebrow: "A LITTLE ABOUT ME",
    aboutTitle: "Curiosity meets technology.",
    statement:
      "I believe technology should be useful, thoughtful and a little unexpected.",
    aboutText:
      "I'm a developer exploring the intersection of web development, design and interactive experiences.",
    aboutText2:
      "I enjoy turning ideas into working products, from first sketches to the final experience.",
    services: [
      "01 / Web development",
      "02 / UI & UX design",
      "03 / Interactive experiences",
      "04 / Creative experiments",
    ],
    contactEyebrow: "HAVE SOMETHING IN MIND?",
    contactTitle: "Let's make",
    contactAccent: "something meaningful.",
    contactDescription:
      "Have a project, an idea or a question? Leave your details and I'll get back to you.",
    name: "Your name",
    phone: "Phone number",
    message: "Your message (optional)",
    send: "Send an inquiry",
    sending: "Sending...",
    required: "Please enter your name and phone number.",
    success: "Your inquiry has been sent! Thank you.",
    error: "Something went wrong. Please try again later.",
    privacy:
      "Your details will only be used to respond to your inquiry.",
    footer: "DESIGNED WITH INTENTION",
    backTop: "BACK TO TOP ↑",
  },
  ru: {
    navWork: "Проекты",
    navAbout: "Обо мне",
    navContact: "Контакты",
    talk: "Обсудим проект",
    availability: "РАЗРАБОТКА И КРЕАТИВНЫЕ ЦИФРОВЫЕ РЕШЕНИЯ",
    heroLine1: "Превращаю идеи",
    heroLine2: "в цифровые",
    heroLine3: "впечатления",
    heroDescription:
      "Создаю продуманные цифровые продукты, интерактивные проекты и решения, которые хочется исследовать.",
    explore: "Мои проекты",
    discover: "Обо мне",
    location: "БАЗИРУЮСЬ В КЫРГЫЗСТАНЕ · РАБОТАЮ ПО ВСЕМУ МИРУ",
    scroll: "ЛИСТАЙТЕ ВНИЗ",
    selected: "ИЗБРАННЫЕ ПРОЕКТЫ",
    workTitle: "То, что я создала.",
    source: "Исходный код",
    liveDemo: "Открыть проект",
    linksSoon: "Скоро появятся ссылки",
    workNote: "Мои проекты, эксперименты и учебные разработки.",
    aboutEyebrow: "НЕМНОГО ОБО МНЕ",
    aboutTitle: "Любопытство встречает технологии.",
    statement:
      "Я верю, что технологии должны быть полезными, продуманными и немного необычными.",
    aboutText:
      "Я разработчик, исследующий сочетание веб-разработки, дизайна и интерактивных решений.",
    aboutText2:
      "Мне нравится превращать идеи в работающие продукты — от первых набросков до готового результата.",
    services: [
      "01 / Веб-разработка",
      "02 / UI и UX-дизайн",
      "03 / Интерактивные проекты",
      "04 / Креативные эксперименты",
    ],
    contactEyebrow: "ЕСТЬ ИДЕЯ ИЛИ ПРОЕКТ?",
    contactTitle: "Давайте создадим",
    contactAccent: "что-то особенное.",
    contactDescription:
      "Есть проект, идея или вопрос? Оставьте контакты, и я свяжусь с вами.",
    name: "Ваше имя",
    phone: "Номер телефона",
    message: "Сообщение (необязательно)",
    send: "Отправить заявку",
    sending: "Отправляем...",
    required: "Пожалуйста, укажите имя и номер телефона.",
    success: "Заявка отправлена! Спасибо.",
    error: "Не удалось отправить заявку. Попробуйте позже.",
    privacy:
      "Ваши данные будут использованы только для ответа на заявку.",
    footer: "СОЗДАНО С ВНИМАНИЕМ К ДЕТАЛЯМ",
    backTop: "НАВЕРХ ↑",
  },
};

function Navbar({ lang, setLang, t }) {
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
        <a href="#work" onClick={() => setMenuOpen(false)}>
          {t.navWork}
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t.navAbout}
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          {t.navContact}
        </a>
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          {t.talk} <ArrowUpRight size={15} />
        </a>
      </nav>

      <button
        className="language-toggle"
        onClick={() => setLang(lang === "en" ? "ru" : "en")}
        aria-label="Switch language"
        type="button"
      >
        <Globe size={16} />
        {lang === "en" ? "RU" : "EN"}
      </button>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero({ t }) {
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
          {t.availability}
        </div>

        <h1>
          {t.heroLine1}
          <br />
          <span className="outline-text">{t.heroLine2}</span>{" "}
          {t.heroLine3}
          <span className="accent">.</span>
        </h1>

        <p className="hero-description">{t.heroDescription}</p>

        <div className="hero-actions">
          <a href="#work" className="button-primary">
            {t.explore} <ArrowDown size={17} />
          </a>
          <a href="#about" className="text-link">
            {t.discover} <ArrowUpRight size={17} />
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
        <span>{t.location}</span>
        <a href="#work">
          {t.scroll} <ArrowDown size={13} />
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

function Projects({ t, lang }) {
  return (
    <section className="work-section section-shell" id="work">
      <SectionHeading
        eyebrow={t.selected}
        title={t.workTitle}
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
                <p>{project.description[lang]}</p>
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <span className="github-mark">GH</span>
                    {t.source}
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {t.liveDemo} <ArrowUpRight size={14} />
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="project-link coming-soon">
                    {t.linksSoon}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="work-note">{t.workNote}</p>
    </section>
  );
}

function About({ t }) {
  return (
    <section className="about-section section-shell" id="about">
      <SectionHeading
        eyebrow={t.aboutEyebrow}
        title={t.aboutTitle}
        number="02"
      />

      <div className="about-layout">
        <div className="about-statement">
          <p>{t.statement}</p>
        </div>

        <div className="about-details">
          <p>{t.aboutText}</p>
          <p>{t.aboutText2}</p>

          <div className="service-list">
            {t.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-section section-shell" id="contact">
      <span className="eyebrow">{t.contactEyebrow}</span>

      <h2>
        {t.contactTitle}
        <br />
        <span>{t.contactAccent}</span>
      </h2>

      <p>{t.contactDescription}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>{t.name}</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder={t.name}
            value={form.name}
            onChange={updateField}
            maxLength={100}
            required
          />
        </label>

        <label>
          <span>{t.phone}</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+996 555 123 456"
            value={form.phone}
            onChange={updateField}
            maxLength={30}
            required
          />
        </label>

        <label>
          <span>{t.message}</span>
          <textarea
            name="message"
            placeholder={t.message}
            value={form.message}
            onChange={updateField}
            maxLength={2000}
            rows={4}
          />
        </label>

        <button
          type="submit"
          className="button-primary form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              <LoaderCircle className="spin" size={17} />
              {t.sending}
            </>
          ) : (
            <>
              <Send size={17} />
              {t.send}
            </>
          )}
        </button>

        {status === "success" && (
          <p className="form-message success-message" role="status">
            <CheckCircle2 size={18} />
            {t.success}
          </p>
        )}

        {status === "error" && (
          <p className="form-message error-message" role="alert">
            {t.error}
          </p>
        )}

        <small className="contact-note">{t.privacy}</small>
      </form>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer section-shell">
      <a href="#home" className="brand">
        <span className="brand-mark">M.</span>
        <span>INDEPENDENT STUDIO</span>
      </a>

      <span>© 2026 · {t.footer}</span>

      <a href="#home" className="back-to-top">
        {t.backTop}
      </a>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Projects t={t} lang={lang} />
        <About t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </>
  );
}