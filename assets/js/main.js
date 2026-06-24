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

// ===== Materias: menú desplegable personalizado =====
const subjectDropdown = document.getElementById("subjectDropdown");
const subjectTrigger = document.getElementById("subjectTrigger");
const subjectMenu = document.getElementById("subjectMenu");
const subjectCurrent = document.getElementById("subjectCurrent");
const subjectOptions = document.querySelectorAll(".subject-option");
const subjectPanels = document.querySelectorAll(".subject-panel");

function closeDropdown() {
  if (!subjectDropdown) return;
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
  previewFrame.innerHTML = '<div class="pdf-loading">Cargando vista previa…</div>';

  // Respaldo si PDF.js no llegó a cargar (sin conexión al CDN, etc.)
  if (!window.pdfjsLib) {
    previewFrame.innerHTML =
      `<iframe src="${file}" title="Vista previa del certificado"></iframe>`;
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
      '<div class="pdf-error">No se pudo mostrar la vista previa aquí. Usa el botón “Descargar” para abrir el certificado.</div>';
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
    closeDropdown();
  }
});