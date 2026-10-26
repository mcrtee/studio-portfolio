
const translations = {
  ru: {
    navWork: "Проекты",
    navContact: "Контакт",
    navCta: "Обсудить проект",
    eyebrow: "Независимая digital-студия",
    heroTitle: 'Идеи превращаются<br>в <span class="accent-text">цифровой опыт.</span>',
    heroDescription:
      "Создаём веб-проекты, браузерные игры и цифровые решения с вниманием к каждой детали.",
    heroButton: "Исследовать проекты",
    heroContact: "Связаться с нами",
    heroLocation: "БИШКЕК, КЫРГЫЗСТАН",
    heroAvailability: "ОТКРЫТЫ К НОВЫМ ИДЕЯМ",
    projectsEyebrow: "ИЗБРАННЫЕ РАБОТЫ / 01—03",
    projectsTitle: 'Создано с <span>характером.</span>',
    projectsDescription:
      "Несколько проектов, в которых идеи становятся интерактивными.",
    battleshipType: "БРАУЗЕРНАЯ ИГРА",
    battleshipDescription:
      "Классическая морская битва в интерактивном формате.",
    chatbotType: "ЧАТ-БОТ",
    chatbotDescription:
      "Простой чат-бот с характером и собственным стилем общения.",
    coinrushType: "МУЛЬТИПЛЕЕРНАЯ ИГРА",
    coinrushDescription:
      "Игровой проект с комнатой для совместного прохождения.",
    contactEyebrow: "ЕСТЬ ИДЕЯ?",
    contactTitle: 'Давайте создадим<br><span>что-то особенное.</span>',
    contactDescription: "Оставьте контакты, чтобы обсудить вашу идею.",
    nameLabel: "Ваше имя",
    namePlaceholder: "Имя",
    phoneLabel: "Номер телефона",
    submitButton: "Отправить заявку",
    formPrivacy:
      "Нажимая кнопку, вы соглашаетесь на обработку отправленных контактных данных для ответа на вашу заявку.",
    footerText: "Независимая студия · Бишкек, Кыргызстан",
    requiredFields: "Пожалуйста, заполните все поля.",
    sending: "Отправляем заявку...",
    success: "Заявка отправлена! Спасибо, мы свяжемся с вами.",
    error: "Не удалось отправить заявку. Попробуйте ещё раз или напишите на email."
  },

  en: {
    navWork: "Projects",
    navContact: "Contact",
    navCta: "Discuss a project",
    eyebrow: "Independent digital studio",
    heroTitle: 'Ideas become<br><span class="accent-text">digital experiences.</span>',
    heroDescription:
      "We create web projects, browser games, and digital experiences with attention to every detail.",
    heroButton: "Explore projects",
    heroContact: "Get in touch",
    heroLocation: "BISHKEK, KYRGYZSTAN",
    heroAvailability: "OPEN TO NEW IDEAS",
    projectsEyebrow: "SELECTED WORK / 01—03",
    projectsTitle: 'Built with <span>character.</span>',
    projectsDescription:
      "A selection of projects turning ideas into interactive experiences.",
    battleshipType: "BROWSER GAME",
    battleshipDescription:
      "A classic naval battle brought to an interactive format.",
    chatbotType: "CHAT BOT",
    chatbotDescription:
      "A simple chatbot with a personality and its own conversational style.",
    coinrushType: "MULTIPLAYER GAME",
    coinrushDescription:
      "A game project with a room for playing together.",
    contactEyebrow: "HAVE AN IDEA?",
    contactTitle: "Let's create<br><span>something special.</span>",
    contactDescription: "Leave your contact details to discuss your idea.",
    nameLabel: "Your name",
    namePlaceholder: "Name",
    phoneLabel: "Phone number",
    submitButton: "Send an inquiry",
    formPrivacy:
      "By submitting this form, you agree to the processing of your contact details so we can respond to your inquiry.",
    footerText: "Independent studio · Bishkek, Kyrgyzstan",
    requiredFields: "Please complete all fields.",
    sending: "Sending your inquiry...",
    success: "Your inquiry has been sent. Thank you!",
    error: "Could not send your inquiry. Please try again or email us directly."
  }
};

let currentLanguage = "ru";

const languageToggle = document.getElementById("languageToggle");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const submitButton = contactForm.querySelector('button[type="submit"]');
const submitButtonText = submitButton.querySelector("[data-i18n]");
const currentYear = document.getElementById("currentYear");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[language][key];

    if (translatedText !== undefined) {
      element.innerHTML = translatedText;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translatedText = translations[language][key];

    if (translatedText !== undefined) {
      element.placeholder = translatedText;
    }
  });

  languageToggle.textContent = language === "ru" ? "EN" : "RU";
}

languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "ru" ? "en" : "ru";
  setLanguage(nextLanguage);
});

currentYear.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formMessage.textContent = "";
  formMessage.classList.remove("error");

  if (!contactForm.reportValidity()) {
    return;
  }

  // FormSubmit anti-spam honeypot.
  const honeypot = contactForm.querySelector('[name="_honey"]');

  if (honeypot.value.trim() !== "") {
    return;
  }

  const originalButtonText = translations[currentLanguage].submitButton;

  submitButton.disabled = true;
  submitButtonText.textContent = translations[currentLanguage].sending;
  formMessage.textContent = translations[currentLanguage].sending;

  const formData = {
    name: contactForm.elements.name.value.trim(),
    phone: contactForm.elements.phone.value.trim(),
    _subject: "New inquiry — mcrtee studio",
    _captcha: "false"
  };

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/meerimtee@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    let result = {};

    try {
      result = await response.json();
    } catch {
      // Keep an empty result if the response is not valid JSON.
    }

    if (!response.ok || result.success === false) {
      throw new Error("Form submission failed");
    }

    formMessage.textContent = translations[currentLanguage].success;
    contactForm.reset();
  } catch (error) {
    console.error("FormSubmit error:", error);

    formMessage.textContent = translations[currentLanguage].error;
    formMessage.classList.add("error");
  } finally {
    submitButton.disabled = false;
    submitButtonText.textContent = originalButtonText;
  }
});

// Initialize the page in Russian.
setLanguage("ru");
