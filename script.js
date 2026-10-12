const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = [...document.querySelectorAll(".nav-links a")];
const sections = navItems
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  if (!menuButton || !navLinks) return;
  document.body.classList.remove("menu-open");
  navLinks.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderPublicationIndex() {
  const mount = document.getElementById("publication-list");
  const papers = window.RESEARCH_PAPERS || [];
  if (!mount || !papers.length) return;
  const basePath = mount.dataset.researchBase || "research";

  mount.innerHTML = papers
    .map(
      (paper) => `
        <article class="publication-item reveal">
          <div class="publication-meta">
            <span>${escapeHtml(paper.category)}</span>
            <span>${escapeHtml(paper.year)}</span>
            <span>${escapeHtml(paper.status)}</span>
          </div>
          <a href="${escapeHtml(basePath)}/${escapeHtml(paper.slug)}/index.html" aria-label="Read ${escapeHtml(paper.title)}">
            <h3 class="publication-title">${escapeHtml(paper.title)}</h3>
            <p>${escapeHtml(paper.summary)}</p>
            <span class="read-link">Read paper</span>
          </a>
        </article>
      `
    )
    .join("");
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    document.body.classList.toggle("menu-open", !isOpen);
    navLinks.classList.toggle("is-open", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navItems.forEach((item) => item.classList.toggle("is-active", item === link));
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

renderPublicationIndex();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -32px" }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

if (sections.length) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navItems.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { threshold: [0.22, 0.38, 0.56], rootMargin: "-24% 0px -56% 0px" }
  );

  sections.forEach((section) => activeObserver.observe(section));
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
