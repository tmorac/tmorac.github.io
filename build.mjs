// Generates the static site into dist/. No dependencies: `node build.mjs`.
import { mkdirSync, writeFileSync, copyFileSync, existsSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { site, profiles, projects, experience, education, certifications, about } from "./content.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "dist");

// Guard the "no em dashes" rule.
const contentSrc = readFileSync(join(root, "content.mjs"), "utf8");
if (contentSrc.includes("—")) {
  console.error("content.mjs contains an em dash. Replace it with a comma, colon or hyphen.");
  process.exit(1);
}

// --public (used by the deploy) hides every TODO: inline placeholders are
// stripped and items left empty are dropped. Local builds show them.
const PUBLIC = process.argv.includes("--public");

let todoCount = 0;
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plain = (s) => String(s).replace(/\s*\[\[TODO:.*?\]\]/g, "");
const rich = (s) =>
  PUBLIC
    ? esc(plain(s))
    : esc(s).replace(/\[\[TODO:\s*(.*?)\]\]/g, (_, t) => {
        todoCount++;
        return `<span class="todo">TODO: ${t}</span>`;
      });
const filled = (s) => !PUBLIC || plain(s).trim() !== "";
const keep = (arr) => arr.filter(filled);

const cvDir = join(root, "cv");
const hasCv = (file) => existsSync(join(cvDir, file));

function head({ title, description, prefix, path }) {
  const ogUrl = site.url ? `<meta property="og:url" content="${esc(site.url + path)}">` : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
${ogUrl}
<link rel="icon" href="${prefix}favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${prefix}styles.css">
</head>`;
}

// Each profile page stands alone (no links between profiles), so the
// header carries identity, key facts and contact.
function header(prefix, profile) {
  return `<header class="site-header">
  <div class="wrap">
    <p class="brand">${esc(site.name)}</p>
    <p class="meta">${esc(site.location)}<span>·</span>${esc(site.workAuth)}<span>·</span>${esc(site.languages)}</p>
    <div class="actions">
      ${profile ? cvButton(profile, prefix) : ""}
      ${contactLinks()}
    </div>
  </div>
</header>`;
}

function cvButton(profile, prefix, cls = "btn btn-primary") {
  if (hasCv(profile.cv)) {
    return `<a class="${cls}" href="${prefix}cv/${profile.cv}" download>Download CV (PDF)</a>`;
  }
  if (PUBLIC) return "";
  todoCount++;
  return `<span class="todo">TODO: add cv/${esc(profile.cv)}</span>`;
}

function contactLinks() {
  return `<a class="btn btn-ghost" href="mailto:${esc(site.email)}">Email</a>
      <a class="btn btn-ghost" href="${esc(site.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`;
}

function footer(prefix) {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="wrap footer-inner">
    <div>
      <p class="footer-name">${esc(site.fullName)}</p>
      <p class="muted">${esc(site.location)} · ${esc(site.workAuth)}</p>
    </div>
    <div class="footer-links">
      <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>
      <a href="${esc(site.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
  <div class="wrap"><p class="muted small">© ${year} ${esc(site.name)}</p></div>
</footer>`;
}

function resultsTable(t) {
  return `<div class="table-wrap"><table class="results">
    <thead><tr>${t.head.map((h) => `<th>${rich(h)}</th>`).join("")}</tr></thead>
    <tbody>${t.rows.map((r, i) => `<tr${i === 0 ? ' class="best"' : ""}>${r.map((c) => `<td>${rich(c)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

function toolkitSection(tk) {
  return `<section class="wrap section" id="toolkit">
    <h2 class="section-title">Machine learning toolkit</h2>
    <p class="lead toolkit-intro">${rich(tk.intro)}</p>
    <div class="toolkit">
      ${tk.groups
        .map(
          (g) => `<div class="tk-group">
        <h3>${rich(g.title)}</h3>
        <p class="muted small">${rich(g.note)}</p>
        <ul>${g.items
          .map((it) => `<li><strong>${rich(it.name)}</strong><span>${rich(it.what)}</span><em>${rich(it.used)}</em></li>`)
          .join("")}</ul>
      </div>`
        )
        .join("")}
    </div>
    <div class="tk-eval">
      <h3>How I evaluate models</h3>
      <ul class="chips">${tk.evaluation.map((e) => `<li>${rich(e)}</li>`).join("")}</ul>
    </div>
  </section>`;
}

function projectCard(id, key, index) {
  const base = projects[id];
  if (!base) throw new Error(`Unknown project id "${id}" in profile "${key}"`);
  const p = { ...base, ...(base.angles?.[key] || {}) };
  const num = String(index + 1).padStart(2, "0");
  return `<article class="project">
    <div class="project-meta">
      <span class="project-num">${num}</span>
      <p class="project-org">${rich(p.org)}</p>
      <p class="muted small">${rich(p.sector)}<br>${rich(p.period)}</p>
      <ul class="chips">${keep(p.tools).map((t) => `<li>${rich(t)}</li>`).join("")}</ul>
    </div>
    <div class="project-body">
      <h3>${rich(p.title)}</h3>
      ${filled(p.context) ? `<p class="project-context">${rich(p.context)}</p>` : ""}
      ${filled(p.role) ? `<p class="project-role"><strong>My role:</strong> ${rich(p.role)}</p>` : ""}
      <ul class="bullets">${keep(p.bullets).map((b) => `<li>${rich(b)}</li>`).join("")}</ul>
      ${p.table ? resultsTable(p.table) : ""}
      ${filled(p.outcome) ? `<p class="outcome"><span class="outcome-label">Outcome</span>${rich(p.outcome)}</p>` : ""}
      ${p.repo ? `<a class="repo-link" href="${esc(p.repo)}" target="_blank" rel="noopener">${esc(p.repoLabel || "Read the full case study on GitHub")} →</a>` : ""}
    </div>
  </article>`;
}

function profilePage(key) {
  const pr = profiles[key];
  const prefix = "../";
  const exp = experience
    .map((e) => {
      const title = pr.expTitles?.[e.key] || e.title;
      return `<li class="exp">
        <p class="exp-period">${rich(e.period)}</p>
        <div>
          <h3>${rich(title)} <span class="exp-org">· ${rich(e.org)}</span></h3>
          <p class="muted small">${rich(e.where)}</p>
          <p>${rich(e.summary)}</p>
        </div>
      </li>`;
    })
    .join("");

  return `${head({
    title: `${site.name} | ${pr.title}`,
    description: plain(pr.summary),
    prefix,
    path: `/${pr.slug}/`,
  })}
<body>
${header(prefix, pr)}
<main>
  <section class="hero wrap">
    <p class="eyebrow">${rich(pr.title)}</p>
    <h1>${rich(pr.headline)}</h1>
    <p class="lead">${rich(pr.summary)}</p>
  </section>

  <section class="wrap">
    <ul class="stats">
      ${pr.stats.map((s) => `<li><span class="stat-value">${rich(s.value)}</span><span class="stat-label">${rich(s.label)}</span></li>`).join("")}
    </ul>
  </section>

  <section class="wrap section" id="work">
    <h2 class="section-title">Selected work</h2>
    <div class="projects">
      ${pr.projects.map((id, i) => projectCard(id, key, i)).join("")}
    </div>
  </section>

  ${pr.toolkit ? toolkitSection(pr.toolkit) : ""}

  <section class="wrap section" id="experience">
    <h2 class="section-title">Experience</h2>
    <ol class="exp-list">${exp}</ol>
  </section>

  <section class="wrap section" id="skills">
    <h2 class="section-title">Skills</h2>
    <div class="skills">
      ${pr.skills
        .map(([group, items]) => `<div class="skill-group"><h3>${rich(group)}</h3><ul class="chips">${keep(items).map((i) => `<li>${rich(i)}</li>`).join("")}</ul></div>`)
        .join("")}
    </div>
  </section>

  <section class="wrap section two-col" id="education">
    <div>
      <h2 class="section-title">Education</h2>
      <ul class="edu-list">
        ${education.map((e) => `<li><h3>${rich(e.title)}</h3><p class="muted small">${rich(e.org)} · ${rich(e.period)}</p><p>${rich(e.note)}</p></li>`).join("")}
      </ul>
    </div>
    <div>
      <h2 class="section-title">Certifications</h2>
      <ul class="plain-list">${keep(certifications).map((c) => `<li>${rich(c)}</li>`).join("")}</ul>
      <h2 class="section-title about-title">About</h2>
      ${about.map((a) => `<p>${rich(a)}</p>`).join("")}
    </div>
  </section>

  <section class="wrap section cta">
    <h2>Interested in working together?</h2>
    <p class="muted">The fastest way to reach me is email.</p>
    <div class="actions">
      ${cvButton(pr, prefix)}
      ${contactLinks()}
    </div>
  </section>
</main>
${footer(prefix)}
</body>
</html>`;
}

function landingPage() {
  const prefix = "./";
  const cards = Object.values(profiles)
    .map(
      (p, i) => `<a class="profile-card" href="${prefix}${p.slug}/">
      <span class="project-num">${String(i + 1).padStart(2, "0")}</span>
      <h2>${rich(p.title)}</h2>
      <p>${rich(p.card)}</p>
      <ul class="card-stats">${p.stats
        .slice(0, 2)
        .map((s) => `<li><strong>${rich(s.value)}</strong> ${rich(s.label)}</li>`)
        .join("")}</ul>
      <span class="card-link">View profile →</span>
    </a>`
    )
    .join("");

  return `${head({
    title: `${site.name} | Growth, Analytics, Product Ops`,
    description: plain(site.landing.intro),
    prefix,
    path: "/",
  })}
<body>
${header(prefix, null)}
<main>
  <section class="hero wrap landing-hero">
    <h1>${rich(site.landing.headline)}</h1>
    <p class="lead">${rich(site.landing.intro)}</p>
  </section>
  <section class="wrap section">
    <h2 class="section-title">${rich(site.landing.pick)}</h2>
    <div class="profile-cards">${cards}</div>
  </section>
  <section class="wrap section narrow">
    <h2 class="section-title">About</h2>
    ${about.map((a) => `<p>${rich(a)}</p>`).join("")}
  </section>
</main>
${footer(prefix)}
</body>
</html>`;
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#A4532E"/><text x="32" y="42" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#fff" text-anchor="middle">TM</text></svg>`;

// Write output
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
writeFileSync(join(dist, "index.html"), landingPage());
for (const key of Object.keys(profiles)) {
  const dir = join(dist, profiles[key].slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), profilePage(key));
}
copyFileSync(join(root, "styles.css"), join(dist, "styles.css"));
writeFileSync(join(dist, "favicon.svg"), favicon);
if (existsSync(cvDir)) {
  mkdirSync(join(dist, "cv"), { recursive: true });
  for (const f of readdirSync(cvDir).filter((f) => f.toLowerCase().endsWith(".pdf"))) {
    copyFileSync(join(cvDir, f), join(dist, "cv", f));
  }
}

console.log(`Built ${Object.keys(profiles).length + 1} pages into dist/${PUBLIC ? " (public mode, TODOs hidden)" : ""}.`);
console.log(todoCount ? `${todoCount} TODO placeholders still visible on the site.` : "No TODO placeholders left.");
