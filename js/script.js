"use strict";

/* =========================================
   CONFIGURATION
========================================= */
const CONFIG = {
  // FormSubmit AJAX endpoint for your email.
  FORM_URL: "https://formsubmit.co/ajax/meerimtee@gmail.com"
};

/* =========================================
   TRANSLATIONS
========================================= */
const translations = {
  ru: {
    navProjects: "ПРОЕКТЫ",
    navAbout: "О НАС",
    navContact: "КОНСУЛЬТАЦИЯ",
    heroEyebrow: "GAME DEVELOPMENT & CREATIVE TECHNOLOGIES",
    heroLine1: "Создаём",
    heroLine2: "цифровые миры",
    heroDescription: "Игры, веб-приложения и боты — с вниманием к качеству, деталям и пользовательскому опыту.",
    heroProjects: "Смотреть проекты",
    heroContact: "Обсудить проект",
    scroll: "ПРОКРУТИТЕ ВНИЗ",
    projectsEyebrow: "ПОРТФОЛИО",
    projectsTitle: "Избранные проекты",
    projectsIntro: "Игры и приложения, созданные с вниманием к деталям, логике и пользовательскому опыту.",
    typeGame: "ИГРА",
    typeBot: "БОТ",
    liveDemo: "ДЕМО",
    sourceCode: "ИСХОДНЫЙ КОД",
    battleshipDesc: "Классический морской бой в браузере с расстановкой кораблей и игровой логикой.",
    coinRushDesc: "Многопользовательская игра про сбор монет и соревнование с другими игроками.",
    chatBotDesc: "Чат-бот с открытым исходным кодом. Исходники доступны в репозитории GitHub.",
    aboutEyebrow: "О СТУДИИ",
    aboutTitle: "Идеи становятся реальностью.",
    aboutText1: "MCRTEE STUDIO — независимая разработческая студия, работающая над играми, веб-приложениями и цифровыми инструментами.",
    aboutText2: "Мы соединяем разработку, дизайн и интерактивность, чтобы превращать идеи в работающие продукты.",
    contactEyebrow: "СЛЕДУЮЩИЙ ШАГ",
    contactTitle: "Есть идея? Давайте обсудим.",
    contactDescription: "Расскажите немного о своей задаче. Оставьте контакты, и мы сможем обсудить ваш проект.",
    nameLabel: "Ваше имя",
    phoneLabel: "Номер телефона",
    serviceLabel: "Что вы хотите создать?",
    optionGame: "Игра",
    optionWebsite: "Веб-сайт",
    optionBot: "Чат-бот",
    optionOther: "Другое",
    detailsLabel: "Кратко о проекте (необязательно)",
    detailsPlaceholder: "Расскажите о своей идее...",
    submitButton: "Отправить заявку",
    sending: "Отправляем заявку...",
    success: "Заявка отправлена. Спасибо! Если это первое использование FormSubmit, проверьте почту для подтверждения адреса.",
    error: "Не удалось отправить заявку. Проверьте подключение и попробуйте ещё раз.",
    invalidName: "Введите имя длиной не менее 2 символов.",
    invalidPhone: "Введите корректный номер телефона.",
    wait: "Пожалуйста, подождите перед следующей отправкой.",
    backTop: "Наверх ↑",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню"
  },
  en: {
    navProjects: "PROJECTS",
    navAbout: "ABOUT",
    navContact: "CONSULTATION",
    heroEyebrow: "GAME DEVELOPMENT & CREATIVE TECHNOLOGIES",
    heroLine1: "We create",
    heroLine2: "digital worlds",
    heroDescription: "Games, web applications and bots — with a focus on quality, detail and user experience.",
    heroProjects: "View projects",
    heroContact: "Discuss a project",
    scroll: "SCROLL TO EXPLORE",
    projectsEyebrow: "PORTFOLIO",
    projectsTitle: "Selected work",
    projectsIntro: "Games and applications built with attention to detail, logic and user experience.",
    typeGame: "GAME",
    typeBot: "BOT",
    liveDemo: "LIVE DEMO",
    sourceCode: "SOURCE CODE",
    battleshipDesc: "Classic browser Battleship featuring ship placement and game logic.",
    coinRushDesc: "A multiplayer coin-collecting game where players compete with each other.",
    chatBotDesc: "An open-source chat bot. Source code is available in the GitHub repository.",
    aboutEyebrow: "ABOUT THE STUDIO",
    aboutTitle: "Ideas become reality.",
    aboutText1: "MCRTEE STUDIO is an independent development studio working on games, web applications and digital tools.",
    aboutText2: "We combine development, design and interactivity to turn ideas into working products.",
    contactEyebrow: "THE NEXT STEP",
    contactTitle: "Have an idea? Let's talk.",
    contactDescription: "Tell us a little about your idea. Leave your contact details so we can discuss your project.",
    nameLabel: "Your name",
    phoneLabel: "Phone number",
    serviceLabel: "What would you like to create?",
    optionGame: "Game",
    optionWebsite: "Website",
    optionBot: "Chat bot",
    optionOther: "Other",
    detailsLabel: "Brief project details (optional)",
    detailsPlaceholder: "Tell us about your idea...",
    submitButton: "Send inquiry",
    sending: "Sending your inquiry...",
    success: "Inquiry submitted. Thank you! If this is your first time using FormSubmit, check your email to confirm the address.",
    error: "Could not send your inquiry. Check your connection and try again.",
    invalidName: "Enter a name with at least 2 characters.",
    invalidPhone: "Enter a valid phone number.",
    wait: "Please wait before submitting another request.",
    backTop: "Back to top ↑",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  }
};

/* =========================================
   LANGUAGE SWITCHING
========================================= */
let currentLang = "en";

try {
  const saved = localStorage.getItem("mcrtee-language");
  if (saved === "ru" || saved === "en") {
    currentLang = saved;
  } else {
    currentLang = (navigator.language || "").toLowerCase().startsWith("ru")
      ? "ru"
      : "en";
  }
} catch (error) {
  currentLang = "en";
}

function setLanguage(language) {
  if (!translations[language]) return;

  currentLang = language;
  document.documentElement.lang = language;

  try {
    localStorage.setItem("mcrtee-language", language);
  } catch (error) {
    // Language selection still works for this page.
  }

  document.querySelectorAll("[data-i]").forEach(element => {
    const key = element.dataset.i;
    const translated = translations[language][key];
    if (translated !== undefined) {
      element.textContent = translated;
    }
  });

  document.querySelectorAll("[data-i-placeholder]").forEach(element => {
    const key = element.dataset.iPlaceholder;
    const translated = translations[language][key];
    if (translated !== undefined) {
      element.placeholder = translated;
    }
  });

  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  updateMenuLabel();

  // Update the sending state without losing the language switch.
  if (submitButton.disabled) {
    submitButton.querySelector("[data-i]").textContent =
      translations[language].sending;
  }
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================
   MOBILE NAVIGATION
========================================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function updateMenuLabel() {
  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    translations[currentLang][isOpen ? "closeMenu" : "openMenu"]
  );
  menuToggle.textContent = isOpen ? "×" : "☰";
}

function closeMenu() {
  navLinks.classList.remove("open");
  updateMenuLabel();
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  updateMenuLabel();
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", event => {
  if (
    navLinks.classList.contains("open") &&
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

/* =========================================
   SCROLL REVEAL
========================================= */
const revealElements = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

/* =========================================
   CONTACT FORM -> FORMSUBMIT EMAIL
========================================= */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const submitButton = document.getElementById("submitButton");

let lastSuccessfulSubmit = 0;
let isSubmitting = false;

function showFormMessage(message, status) {
  formMessage.textContent = message;
  formMessage.className = "form-message";
  if (status) {
    formMessage.classList.add(status);
  }
}

contactForm.addEventListener("submit", async event => {
  event.preventDefault();

  if (isSubmitting) return;

  const t = translations[currentLang];
  const name = contactForm.elements.namedItem("name").value.trim();
  const phone = contactForm.elements.namedItem("phone").value.trim();
  const projectType = contactForm.elements.namedItem("project_type").value;
  const details = contactForm.elements.namedItem("details").value.trim();
  const honey = contactForm.elements.namedItem("_honey").value;

  // Silently reject submissions caught by the honeypot.
  if (honey) return;

  if (name.length < 2) {
    showFormMessage(t.invalidName, "error");
    contactForm.elements.namedItem("name").focus();
    return;
  }

  const phoneDigits = phone.replace(/\D/g, "");

  if (
    !/^\+?[\d\s()\-]+$/.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    showFormMessage(t.invalidPhone, "error");
    contactForm.elements.namedItem("phone").focus();
    return;
  }

  if (Date.now() - lastSuccessfulSubmit < 30000) {
    showFormMessage(t.wait, "error");
    return;
  }

  isSubmitting = true;
  submitButton.disabled = true;
  showFormMessage(t.sending);

  const buttonLabel = submitButton.querySelector("[data-i]");
  buttonLabel.textContent = t.sending;

  const payload = {
    name: name,
    phone: phone,
    project_type: projectType,
    details: details || "Not provided",
    language: currentLang.toUpperCase(),
    _subject: "New project inquiry — MCRTEE STUDIO",
    _template: "table",
    _honey: ""
  };

  try {
    const response = await fetch(CONFIG.FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    let result = {};

    try {
      result = await response.json();
    } catch (error) {
      // Handle a non-JSON response below.
    }

    if (
      !response.ok ||
      result.success === false ||
      result.success === "false" ||
      result.success === 0
    ) {
      throw new Error("FormSubmit did not confirm the request.");
    }

    lastSuccessfulSubmit = Date.now();
    contactForm.reset();
    showFormMessage(t.success, "success");
  } catch (error) {
    console.error("Contact form submission failed:", error);
    showFormMessage(t.error, "error");
  } finally {
    isSubmitting = false;
    submitButton.disabled = false;
    buttonLabel.textContent = translations[currentLang].submitButton;
  }
});

/* Initialize the site. */
setLanguage(currentLang);