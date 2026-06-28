// ===== Traducción Español / English =====
const translations = {
  es: {
    "meta.description":
      "Página personal de Leonor Molina, estudiante de Ingeniería en Ciencias de la Computación en la UEES.",

    "nav.about": "Sobre mí",
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.subjects": "Materias",
    "nav.achievements": "Logros",
    "nav.contact": "Contacto",

    "aria.openMenu": "Abrir menú",
    "aria.closePreview": "Cerrar vista previa",
    "aria.closeSubjects": "Cerrar materias",

    "hero.avatarAlt": "Foto de perfil de Leonor Molina",
    "hero.subtitle":
      "Estudio Ingeniería en Ciencias de la Computación en la Universidad de Especialidades Espíritu Santo. Me interesa el desarrollo de interfaces, el trabajo con tecnologías web y la organización de soluciones de software desde sus requisitos hasta su implementación.",
    "hero.degree": "Ingeniería en Ciencias de la Computación",
    "hero.cv": "Ver CV",

    "about.kicker": "Sobre mí",
    "about.title": "Desarrollo web, diseño de interfaces y organización de software.",
    "about.profileTitle": "Perfil",
    "about.profileText1":
      "Mi formación reúne experiencias académicas en desarrollo web, estructuras de datos, sistemas distribuidos y programación lógica. En cada proyecto busco trabajar con orden, claridad y una estructura funcional, cuidando tanto la parte técnica como la presentación final.",
    "about.profileText2":
      "Me interesa especialmente el frontend, el diseño de interfaces y el análisis previo de los sistemas, incluyendo requisitos funcionales, requisitos no funcionales y la organización general de cada solución.",
    "about.interestsTitle": "Áreas de interés",

    "interest.web": "Desarrollo web",
    "interest.frontend": "Frontend",
    "interest.interfaces": "Diseño de interfaces",
    "interest.databases": "Bases de datos",
    "interest.softwareDesign": "Diseño de software",
    "interest.laravel": "Laravel",
    "interest.htmlcss": "HTML/CSS",
    "interest.java": "Java",
    "interest.python": "Python",
    "interest.sql": "SQL",
    "interest.logic": "Programación lógica",
    "interest.distributed": "Sistemas distribuidos",
    "interest.docker": "Docker",
    "interest.github": "GitHub",

    "stack.kicker": "Stack técnico",
    "stack.title": "Tecnologías y áreas con las que he trabajado.",
    "stack.languages": "Lenguajes",
    "stack.webDev": "Desarrollo web",
    "stack.dataTools": "Datos y herramientas",
    "stack.training": "Formación complementaria",
    "stack.englishB2": "Inglés B2",

    "projects.kicker": "Proyectos destacados",
    "projects.title": "Trabajos representativos de mi formación.",
    "projects.badgeProgramming": "Lenguajes de Programación",
    "projects.badgeCollaborative": "Colaborativo",
    "projects.badgeDistributed": "Sistemas Distribuidos",
    "projects.badgeIndividual": "Individual",
    "projects.teamupText1":
      "Plataforma web orientada a la gestión de actividades extracurriculares, clubes, concursos y equipos dentro de la comunidad universitaria.",
    "projects.teamupText2":
      "Integra módulos de usuarios, actividades, inscripciones y organización de información mediante Laravel y tecnologías web.",
    "projects.inventoryTitle": "Sistema de Inventario Distribuido",
    "projects.inventoryText1":
      "Sistema de inventario desarrollado con una arquitectura basada en servicios, contenedores y comunicación entre componentes.",
    "projects.inventoryText2":
      "El proyecto trabaja con Docker, PostgreSQL e interfaz web para administrar productos, movimientos y disponibilidad.",
    "projects.prologText1":
      "Aplicación web que conecta Laravel con una base de conocimiento en Prolog para representar personajes, enemigos, misiones, armas y reglas de juego.",
    "projects.prologText2":
      "Combina desarrollo web con programación lógica para resolver consultas y decisiones dentro del sistema.",
    "projects.repo": "Ver repositorio →",

    "subjects.kicker": "Materias",
    "subjects.title": "Explorar proyectos y actividades por curso.",
    "subjects.previewText":
      "Consulta los trabajos académicos organizados por materia, con sus actividades principales y enlaces a repositorios.",
    "subjects.open": "Ver materias y actividades",
    "subjects.modalKicker": "Materias",
    "subjects.modalTitle": "Proyectos y actividades por curso",
    "subjects.modalText":
      "Selecciona una materia para visualizar sus actividades académicas.",
    "subjects.dropdownLabel": "Selecciona una materia",
    "subjects.optionProgramming": "Lenguajes de Programación",
    "subjects.optionDistributed": "Sistemas Distribuidos",
    "subjects.optionDataStructures": "Estructura de Datos",
    "subjects.optionOperatingSystems": "Sistemas Operativos",

    "activity.teamup":
      "Aplicación web colaborativa para organizar actividades, clubes y equipos estudiantiles.",
    "activity.prologLaravel":
      "Proyecto que integra Laravel con Prolog para trabajar reglas, misiones y consultas lógicas.",
    "activity.aiEngine":
      "Actividad enfocada en reglas, lógica y construcción de un motor de inferencia básico.",
    "activity.laravelProject":
      "Práctica de desarrollo web con Laravel, estructura MVC y conexión con base de datos.",
    "activity.prologWorkshop":
      "Ejercicios de programación lógica mediante hechos, reglas y consultas en Prolog.",
    "activity.inventoryTitle": "Sistema de Inventario Distribuido",
    "activity.inventory":
      "Proyecto colaborativo con servicios, contenedores, PostgreSQL e interfaz web para gestionar inventario.",
    "activity.dataStructuresTitle": "Proyecto Estructura de Datos",
    "activity.dataStructures":
      "Aplicación en Java para cargar información desde archivos, organizar estudiantes, actividades y calificaciones.",
    "activity.operatingSystemsTitle": "Proyecto Sistemas Operativos",
    "activity.operatingSystems":
      "Proyecto colaborativo orientado a la gestión de un laboratorio de computación, disponibilidad de equipos y uso de recursos.",
    "activity.view": "Ver →",

    "achievements.kicker": "Logros y certificaciones",
    "achievements.title": "Formación complementaria y participación académica.",
    "achievements.englishTag": "Certificación de inglés",
    "achievements.hackathonTag": "Hackathon global",
    "achievements.awsTag": "Insignia AWS Academy",
    "achievements.michiganText": "Certificación ECCE con nivel B2 de inglés.",
    "achievements.spacehackText":
      "Participación en hackathon global enfocado en sostenibilidad, datos y tecnología satelital.",
    "achievements.awsText":
      "Badge de formación en Data Engineering con 40 horas completadas.",
    "achievements.awsAlt": "Insignia AWS Academy Data Engineering",
    "achievements.view": "Ver →",

    "contact.kicker": "Contacto",
    "contact.title": "Hablemos",
    "contact.text":
      "Para consultas académicas, revisión de proyectos o posibles colaboraciones, puedes escribirme directamente.",
    "contact.email": "Correo",

    "footer.text": "© 2026 Leonor Molina",

    "preview.cvTitle": "Currículum — Leonor Molina",
    "preview.michiganTitle": "Michigan Language Assessment — ECCE B2",
    "preview.spacehackTitle": "SpaceHACK for Sustainability 2025",
    "preview.awsTitle": "AWS Academy Data Engineering",
    "preview.loading": "Cargando vista previa…",
    "preview.error":
      "No se pudo mostrar la vista previa aquí. Usa el botón “Descargar” para abrir el certificado.",
    "preview.iframeTitle": "Vista previa del certificado",
    "preview.download": "Descargar",
    "preview.defaultTitle": "Vista previa",
  },

  en: {
    "meta.description":
      "Personal portfolio of Leonor Molina, Computer Science Engineering student at UEES.",

    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.subjects": "Courses",
    "nav.achievements": "Achievements",
    "nav.contact": "Contact",

    "aria.openMenu": "Open menu",
    "aria.closePreview": "Close preview",
    "aria.closeSubjects": "Close courses",

    "hero.avatarAlt": "Profile photo of Leonor Molina",
    "hero.subtitle":
      "I study Computer Science Engineering at Universidad de Especialidades Espíritu Santo. I am interested in interface development, web technologies, and organizing software solutions from requirements through implementation.",
    "hero.degree": "Computer Science Engineering",
    "hero.cv": "View CV",

    "about.kicker": "About",
    "about.title": "Web development, interface design, and software organization.",
    "about.profileTitle": "Profile",
    "about.profileText1":
      "My academic experience includes web development, data structures, distributed systems, and logic programming. In each project, I aim to work with order, clarity, and a functional structure, taking care of both the technical side and the final presentation.",
    "about.profileText2":
      "I am especially interested in frontend development, interface design, and early software analysis, including functional requirements, non-functional requirements, and the overall organization of each solution.",
    "about.interestsTitle": "Areas of interest",

    "interest.web": "Web development",
    "interest.frontend": "Frontend",
    "interest.interfaces": "Interface design",
    "interest.databases": "Databases",
    "interest.softwareDesign": "Software design",
    "interest.laravel": "Laravel",
    "interest.htmlcss": "HTML/CSS",
    "interest.java": "Java",
    "interest.python": "Python",
    "interest.sql": "SQL",
    "interest.logic": "Logic programming",
    "interest.distributed": "Distributed systems",
    "interest.docker": "Docker",
    "interest.github": "GitHub",

    "stack.kicker": "Technical stack",
    "stack.title": "Technologies and areas I have worked with.",
    "stack.languages": "Languages",
    "stack.webDev": "Web development",
    "stack.dataTools": "Data and tools",
    "stack.training": "Additional training",
    "stack.englishB2": "English B2",

    "projects.kicker": "Featured projects",
    "projects.title": "Representative work from my academic training.",
    "projects.badgeProgramming": "Programming Languages",
    "projects.badgeCollaborative": "Collaborative",
    "projects.badgeDistributed": "Distributed Systems",
    "projects.badgeIndividual": "Individual",
    "projects.teamupText1":
      "Web platform focused on managing extracurricular activities, clubs, competitions, and teams within the university community.",
    "projects.teamupText2":
      "It integrates user, activity, registration, and information organization modules using Laravel and web technologies.",
    "projects.inventoryTitle": "Distributed Inventory System",
    "projects.inventoryText1":
      "Inventory system developed with a service-based architecture, containers, and communication between components.",
    "projects.inventoryText2":
      "The project uses Docker, PostgreSQL, and a web interface to manage products, movements, and availability.",
    "projects.prologText1":
      "Web application that connects Laravel with a Prolog knowledge base to represent characters, enemies, missions, weapons, and game rules.",
    "projects.prologText2":
      "It combines web development with logic programming to solve queries and decisions within the system.",
    "projects.repo": "View repository →",

    "subjects.kicker": "Courses",
    "subjects.title": "Explore projects and activities by course.",
    "subjects.previewText":
      "Review academic work organized by course, including main activities and repository links.",
    "subjects.open": "View courses and activities",
    "subjects.modalKicker": "Courses",
    "subjects.modalTitle": "Projects and activities by course",
    "subjects.modalText":
      "Select a course to view its academic activities.",
    "subjects.dropdownLabel": "Select a course",
    "subjects.optionProgramming": "Programming Languages",
    "subjects.optionDistributed": "Distributed Systems",
    "subjects.optionDataStructures": "Data Structures",
    "subjects.optionOperatingSystems": "Operating Systems",

    "activity.teamup":
      "Collaborative web application for organizing activities, clubs, and student teams.",
    "activity.prologLaravel":
      "Project that integrates Laravel with Prolog to work with rules, missions, and logic queries.",
    "activity.aiEngine":
      "Activity focused on rules, logic, and building a basic inference engine.",
    "activity.laravelProject":
      "Web development practice using Laravel, MVC structure, and database connection.",
    "activity.prologWorkshop":
      "Logic programming exercises using facts, rules, and queries in Prolog.",
    "activity.inventoryTitle": "Distributed Inventory System",
    "activity.inventory":
      "Collaborative project with services, containers, PostgreSQL, and a web interface for inventory management.",
    "activity.dataStructuresTitle": "Data Structures Project",
    "activity.dataStructures":
      "Java application for loading information from files and organizing students, activities, and grades.",
    "activity.operatingSystemsTitle": "Operating Systems Project",
    "activity.operatingSystems":
      "Collaborative project focused on managing a computer lab, equipment availability, and resource usage.",
    "activity.view": "View →",

    "achievements.kicker": "Achievements and certifications",
    "achievements.title": "Additional training and academic participation.",
    "achievements.englishTag": "English certification",
    "achievements.hackathonTag": "Global hackathon",
    "achievements.awsTag": "AWS Academy badge",
    "achievements.michiganText": "ECCE certification with B2 English level.",
    "achievements.spacehackText":
      "Participation in a global hackathon focused on sustainability, data, and satellite technology.",
    "achievements.awsText":
      "Data Engineering training badge with 40 completed hours.",
    "achievements.awsAlt": "AWS Academy Data Engineering badge",
    "achievements.view": "View →",

    "contact.kicker": "Contact",
    "contact.title": "Let's connect",
    "contact.text":
      "For academic inquiries, project reviews, or possible collaborations, you can contact me directly.",
    "contact.email": "Email",

    "footer.text": "© 2026 Leonor Molina",

    "preview.cvTitle": "CV — Leonor Molina",
    "preview.michiganTitle": "Michigan Language Assessment — ECCE B2",
    "preview.spacehackTitle": "SpaceHACK for Sustainability 2025",
    "preview.awsTitle": "AWS Academy Data Engineering",
    "preview.loading": "Loading preview…",
    "preview.error":
      "The preview could not be displayed here. Use the “Download” button to open the certificate.",
    "preview.iframeTitle": "Certificate preview",
    "preview.download": "Download",
    "preview.defaultTitle": "Preview",
  },
};

let currentLang = "es";

function getTranslation(key) {
  return translations[currentLang][key] || translations.es[key] || key;
}

function setLanguage(lang, updateUrl = false) {
  currentLang = translations[lang] ? lang : "es";
  localStorage.setItem("portfolioLang", currentLang);
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = getTranslation(key);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    element.setAttribute("alt", getTranslation(key));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    element.setAttribute("aria-label", getTranslation(key));
  });

  document.querySelectorAll(".preview-btn[data-preview-title]").forEach((button) => {
    button.dataset.title = getTranslation(button.dataset.previewTitle);

    if (button.dataset.fileEs && button.dataset.fileEn) {
      button.dataset.file =
        currentLang === "en" ? button.dataset.fileEn : button.dataset.fileEs;
    }
  });

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", getTranslation("meta.description"));
  }

  const previewTitle = document.getElementById("previewTitle");
  if (previewTitle && !previewModal?.classList.contains("show")) {
    previewTitle.textContent = getTranslation("preview.defaultTitle");
  }

  const selectedSubject = document.querySelector(".subject-option.selected");
  const subjectCurrent = document.getElementById("subjectCurrent");
  if (selectedSubject && subjectCurrent) {
    subjectCurrent.textContent = selectedSubject.textContent;
  }

  document.querySelectorAll(".language-btn").forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (currentLang === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", url);
  }
}

function initializeLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const savedLang = localStorage.getItem("portfolioLang");

  if (urlLang === "en" || urlLang === "es") {
    setLanguage(urlLang);
  } else if (savedLang === "en" || savedLang === "es") {
    setLanguage(savedLang);
  } else {
    setLanguage("es");
  }
}

document.querySelectorAll(".language-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang, true);
  });
});

// ===== Menú móvil (hamburguesa) =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Scrollspy: resalta el enlace de la sección visible =====
const sections = document.querySelectorAll("main section[id]");
const navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];

if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// ===== Materias: modal =====
const subjectsModal = document.getElementById("subjectsModal");
const openSubjectsModal = document.getElementById("openSubjectsModal");
const closeSubjectsModal = document.getElementById("closeSubjectsModal");

function openSubjects() {
  if (!subjectsModal) return;
  subjectsModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSubjects() {
  if (!subjectsModal) return;
  subjectsModal.classList.remove("show");
  document.body.style.overflow = "";
  closeDropdown();
}

if (openSubjectsModal) {
  openSubjectsModal.addEventListener("click", openSubjects);
}

if (closeSubjectsModal) {
  closeSubjectsModal.addEventListener("click", closeSubjects);
}

if (subjectsModal) {
  subjectsModal.addEventListener("click", (e) => {
    if (e.target === subjectsModal) closeSubjects();
  });
}

// ===== Materias: menú desplegable personalizado =====
const subjectDropdown = document.getElementById("subjectDropdown");
const subjectTrigger = document.getElementById("subjectTrigger");
const subjectCurrent = document.getElementById("subjectCurrent");
const subjectOptions = document.querySelectorAll(".subject-option");
const subjectPanels = document.querySelectorAll(".subject-panel");

function closeDropdown() {
  if (!subjectDropdown || !subjectTrigger) return;
  subjectDropdown.classList.remove("open");
  subjectTrigger.setAttribute("aria-expanded", "false");
}

if (subjectTrigger && subjectDropdown) {
  subjectTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = subjectDropdown.classList.toggle("open");
    subjectTrigger.setAttribute("aria-expanded", String(isOpen));
  });
}

subjectOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const target = option.dataset.panel;

    subjectOptions.forEach((o) => {
      const isSel = o === option;
      o.classList.toggle("selected", isSel);
      o.setAttribute("aria-selected", String(isSel));
    });

    if (subjectCurrent) subjectCurrent.textContent = option.textContent;

    subjectPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === target);
    });

    closeDropdown();
  });
});

document.addEventListener("click", (e) => {
  if (subjectDropdown && !subjectDropdown.contains(e.target)) {
    closeDropdown();
  }
});

// ===== Modal de vista previa de certificados =====
const previewModal = document.getElementById("previewModal");
const previewTitle = document.getElementById("previewTitle");
const previewFrame = document.getElementById("previewFrame");
const downloadPreview = document.getElementById("downloadPreview");
const closePreview = document.getElementById("closePreview");
const previewButtons = document.querySelectorAll(".preview-btn");

const PDFJS_VERSION = "3.11.174";

if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;
}

async function renderPdf(file) {
  previewFrame.innerHTML = `<div class="pdf-loading">${getTranslation("preview.loading")}</div>`;

  if (!window.pdfjsLib) {
    previewFrame.innerHTML =
      `<iframe src="${file}" title="${getTranslation("preview.iframeTitle")}"></iframe>`;
    return;
  }

  try {
    const pdf = await window.pdfjsLib.getDocument(file).promise;
    previewFrame.innerHTML = "";
    const maxWidth = Math.max(280, previewFrame.clientWidth - 36);

    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n);
      const base = page.getViewport({ scale: 1 });
      const scale = Math.min(2, maxWidth / base.width);
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      canvas.className = "pdf-page";
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      previewFrame.appendChild(canvas);

      await page.render({
        canvasContext: canvas.getContext("2d"),
        viewport,
      }).promise;
    }
  } catch (err) {
    previewFrame.innerHTML =
      `<div class="pdf-error">${getTranslation("preview.error")}</div>`;
  }
}

function openModal(title, file) {
  previewTitle.textContent = title;
  downloadPreview.href = file;
  previewModal.classList.add("show");
  document.body.style.overflow = "hidden";
  renderPdf(file);
}

function closeModal() {
  previewModal.classList.remove("show");
  previewFrame.innerHTML = "";
  document.body.style.overflow = "";
}

previewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openModal(button.dataset.title, button.dataset.file);
  });
});

if (closePreview) closePreview.addEventListener("click", closeModal);

if (previewModal) {
  previewModal.addEventListener("click", (e) => {
    if (e.target === previewModal) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (previewModal && previewModal.classList.contains("show")) closeModal();
    if (subjectsModal && subjectsModal.classList.contains("show")) closeSubjects();
    closeDropdown();
  }
});

initializeLanguage();