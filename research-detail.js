(function () {
  const papers = window.RESEARCH_PAPERS || [];
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const slug = pathParts.at(-1) === "index.html" ? pathParts.at(-2) : pathParts.at(-1);
  const paper = papers.find((item) => item.slug === slug);
  const root = document.querySelector("[data-paper-detail]");

  if (!root) return;

  const esc = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  const list = (items) => {
    if (!items || !items.length) return "";
    return `<ul class="article-list">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  };

  const section = (title, body) => {
    if (!body) return "";
    return `
      <section class="article-section">
        <h2>${esc(title)}</h2>
        ${Array.isArray(body) ? list(body) : `<p>${esc(body)}</p>`}
      </section>
    `;
  };

  if (!paper) {
    document.title = "Research paper not found | Asnaful Huda Asnaf";
    root.innerHTML = `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="../../index.html">Home</a>
        <span>/</span>
        <a href="../../index.html#research">Research</a>
      </nav>
      <section class="article-hero">
        <p class="eyebrow">Research</p>
        <h1>Paper not found</h1>
        <p class="article-summary">The requested research page is not available. It may have moved or the URL may be incomplete.</p>
        <a class="btn primary" href="../../index.html#research">Back to Research</a>
      </section>
    `;
    return;
  }

  document.title = `${paper.title} | Asnaful Huda Asnaf`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", paper.summary);

  const related = (paper.relatedPaperIds || [])
    .map((id) => papers.find((item) => item.id === id))
    .filter(Boolean)
    .slice(0, 3);

  const resources = [
    paper.doi ? `<a class="resource-link" href="${esc(paper.doi)}">DOI</a>` : "",
    paper.externalUrl ? `<a class="resource-link" href="${esc(paper.externalUrl)}">Publication link</a>` : ""
  ].filter(Boolean);
  const figures = (paper.figures || [])
    .map(
      (figure) => `
        <figure class="paper-figure">
          <img src="${esc(figure.src)}" alt="${esc(figure.alt)}" />
          <figcaption>${esc(figure.caption)}</figcaption>
        </figure>
      `
    )
    .join("");

  root.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="../../index.html">Home</a>
      <span>/</span>
      <a href="../../index.html#research">Research</a>
      <span>/</span>
      <span>${esc(paper.title)}</span>
    </nav>

    <article class="research-article">
      <header class="article-hero">
        <p class="eyebrow">${esc(paper.category)}</p>
        <h1>${esc(paper.title)}</h1>
        <p class="article-summary">${esc(paper.summary)}</p>
        <dl class="article-meta">
          <div>
            <dt>Authors</dt>
            <dd>${esc(paper.authors)}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>${esc(paper.year)}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>${esc(paper.publicationType)}</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>${esc(paper.venue)}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>${esc(paper.status)}</dd>
          </div>
        </dl>
      </header>

      <div class="article-layout">
        <aside class="article-aside" aria-label="Research metadata">
          <div>
            <h2>Keywords</h2>
            <div class="keyword-list">
              ${(paper.keywords || []).map((keyword) => `<span>${esc(keyword)}</span>`).join("")}
            </div>
          </div>
          <div>
            <h2>Suggested citation</h2>
            <p>${esc(paper.authors)} (${esc(paper.year)}). ${esc(paper.title)}. ${esc(paper.venue)}.</p>
            ${resources.length ? `<div class="resource-list">${resources.join("")}</div>` : ""}
          </div>
        </aside>

        <div class="article-body">
          ${section("Abstract", paper.abstract)}
          ${section("Research context", paper.context)}
          ${section("Objectives", paper.objectives)}
          ${section("Methodology", paper.methodology)}
          ${section("Findings and discussion", paper.findings)}
          ${figures ? `<section class="article-section"><h2>Figures</h2>${figures}</section>` : ""}
        </div>
      </div>
    </article>

    <section class="related-research">
      <div class="section-heading compact">
        <p class="eyebrow">Related Research</p>
        <h2>Continue reading</h2>
      </div>
      <div class="related-grid">
        ${related
          .map(
            (item) => `
              <a class="related-card" href="../${esc(item.slug)}/index.html">
                <span>${esc(item.category)}</span>
                <strong>${esc(item.title)}</strong>
                <small>${esc(item.status)} - ${esc(item.year)}</small>
              </a>
            `
          )
          .join("")}
      </div>
      <a class="back-link" href="../../index.html#research">Back to Research index</a>
    </section>
  `;
})();
