/* global React */
// Final UI artboard — showcase of the real, shipped product screens
// (captured from the working ui_kits/finflow app), one per role/flow.

const FINAL_SHOTS = [
  { src: "img/ui-dashboard.png", role: "Finance Admin", name: "Dashboard", path: "/dashboard", featured: true },
  { src: "img/ui-manager.png",   role: "Manager",       name: "Team overview", path: "/team" },
  { src: "img/ui-employee.png",  role: "Employee",      name: "My spend & card", path: "/me" },
  { src: "img/ui-payouts.png",   role: "Finance Admin", name: "Reimbursement payouts", path: "/reimbursements" },
  { src: "img/ui-audit.png",     role: "Finance Admin", name: "Audit log", path: "/audit" },
];

function FinalShot({ src, role, name, path, featured }) {
  return (
    <figure style={{ margin: 0, gridColumn: featured ? "1 / -1" : "auto", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{
        borderRadius: 14, overflow: "hidden", border: "1px solid var(--c-line)",
        background: "var(--c-surface)", boxShadow: "0 24px 60px -28px rgba(0,0,0,0.75)",
      }}>
        <div style={{
          height: 34, display: "flex", alignItems: "center", gap: 7, padding: "0 14px",
          borderBottom: "1px solid var(--c-line)", background: "var(--c-surface-2)",
        }}>
          {["#E2766B", "#E7C384", "#6FCF8E"].map((c, i) => (
            <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
          <span style={{ marginLeft: 10, fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--c-ink-4)" }}>
            app.finflow.io{path}
          </span>
        </div>
        <img src={src} alt={`FinFlow ${role} — ${name}`} loading="lazy" decoding="async"
          style={{ display: "block", width: "100%", height: "auto" }} />
      </div>
      <figcaption style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c-accent)" }}>{role}</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--c-ink)" }}>{name}</span>
      </figcaption>
    </figure>
  );
}

function ArtboardFinalUI() {
  return (
    <div className="ab">
      <div className="ab-head">
        <div className="ab-head__left">
          <div className="ab-eyebrow"><span className="num" style={{background:"var(--c-surface-2)"}}>08</span>Deliver · Final UI</div>
          <h1 className="ab-title">Three roles, one system.</h1>
          <div className="ab-sub">Finance Admin, Manager, and Employee each get a workspace built around their actual priorities — all on one component library, type scale, and token set. Every screen below is the real, shipped product.</div>
        </div>
        <div className="ab-head__right">
          <div className="ab-meta"><span className="ab-meta__k">Company</span><span className="ab-meta__v">Arcadia Labs</span></div>
          <div className="ab-meta"><span className="ab-meta__k">Screens</span><span className="ab-meta__v">30+</span></div>
        </div>
      </div>

      <div className="ab-body">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
          {FINAL_SHOTS.map((s, i) => <FinalShot key={i} {...s} />)}
        </div>
        <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <a href="ui_kits/finflow/index.html" target="_blank" rel="noopener" style={{
            display: "inline-flex", alignItems: "center", gap: 9, height: 46, padding: "0 22px",
            borderRadius: 10, background: "var(--c-accent)", color: "#1a1407",
            fontSize: 15, fontWeight: 600, textDecoration: "none",
          }}>
            Open the live prototype ↗
          </a>
          <span style={{ fontSize: 13, color: "var(--c-ink-4)" }}>Fully interactive · switch roles · ⌘K to jump anywhere</span>
        </div>
      </div>

      <div className="ab-foot">
        <div className="brand"><span className="dot"></span> FinFlow · Concept Case Study · 2026</div>
        <div>Deliver · Final UI · responsive</div>
      </div>
    </div>
  );
}

window.ArtboardFinalUI = ArtboardFinalUI;
