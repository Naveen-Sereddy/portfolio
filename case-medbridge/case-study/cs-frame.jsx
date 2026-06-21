/* MedBridge UX Case Study — shared frame + helpers
   Each artifact renders inside <ArtifactFrame> at 1760×1100. Reuses the
   MedBridge design tokens (colors_and_type.css) and portal data/primitives. */

const FRAME_W = 1760;
const FRAME_H = 1100;
const ACCENT = "var(--brand-600)";   // accent used by artifact content (real product brand)
const CHROME_ACCENT = "var(--cs-accent)"; // accent used by the frame chrome (site identity)

// ---------------------------------------------------------------- ScaledStage
// The artifacts are authored at 1760px-wide pixel layouts (device mockups,
// wireframes, dense dashboards) that can't reflow into a narrow text column.
// In the long-scroll narrative each artifact's native visual is preserved
// exactly and scaled to fit the page column; a ResizeObserver keeps the
// scale in sync with the container width.
function ScaledStage({ w = FRAME_W, h = 920, padded = true, children }) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(0.55);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(Math.min(1, el.clientWidth / w));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={ref} className="csm-stage" style={{ height: h * scale }}>
      <div className="csm-stage__inner" style={{ width: w, height: h, transform: `scale(${scale})`,
        transformOrigin: "top left", padding: padded ? "30px 56px 46px" : 0,
        display: "flex", flexDirection: "column", fontFamily: "var(--font-sans)", color: "var(--fg-1)" }}>
        {children}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- ArtifactFrame
// Narrative section: a crisp, readable header (real Fraunces/Inter text at
// full size) above the artifact's native visual, scaled to fit the column.
function ArtifactFrame({ n, kicker, title, desc, children, padded = true }) {
  return (
    <div className="csm-artifact">
      <div className="csm-head">
        <div className="csm-eyebrow"><span className="csm-num">{n}</span>{kicker}</div>
        <h2 className="csm-title">{title}</h2>
        {desc && <p className="csm-desc">{desc}</p>}
      </div>
      <ScaledStage padded={padded}>{children}</ScaledStage>
    </div>
  );
}

// Eyebrow label used inside artifact bodies
function Kick({ children, color, style }) {
  return <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
    color: color || "var(--fg-3)", ...(style || {}) }}>{children}</div>;
}

// A soft titled panel
function Panel({ title, icon, iconColor, children, style, bodyStyle, accent }) {
  return (
    <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 14,
      boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", overflow: "hidden", ...(style || {}) }}>
      {title && (
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "13px 18px",
          borderBottom: "1px solid var(--n-100)", flex: "none" }}>
          {icon && <span style={{ color: iconColor || ACCENT, display: "inline-flex" }}><Icon name={icon} size={17} /></span>}
          <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--fg-1)" }}>{title}</span>
          {accent && <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, color: "var(--fg-3)" }}>{accent}</span>}
        </div>
      )}
      <div style={{ padding: 18, flex: 1, minHeight: 0, ...(bodyStyle || {}) }}>{children}</div>
    </div>
  );
}

// Small dot-led list item
function DotItem({ color, children, icon }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, lineHeight: 1.45, color: "var(--fg-2)" }}>
      {icon
        ? <span style={{ color: color || ACCENT, display: "inline-flex", marginTop: 1, flex: "none" }}><Icon name={icon} size={16} /></span>
        : <span style={{ width: 7, height: 7, borderRadius: 999, background: color || ACCENT, marginTop: 6, flex: "none" }} />}
      <span>{children}</span>
    </div>
  );
}

/* =====================================================================
   WIREFRAME PRIMITIVES  (lo-fi = grayscale only; mid-fi adds one accent)
   ===================================================================== */
const WIRE = {
  ink: "#475569", line: "#94A3B8", faint: "#CBD5E1", fill: "#E2E8F0",
  fillSoft: "#EEF2F6", paper: "#F8FAFC", edge: "#CBD5E1",
};

// Grey "text" bar
function WBar({ w = "100%", h = 9, c, r = 4, style }) {
  return <div style={{ width: w, height: h, borderRadius: r, background: c || WIRE.line, ...(style || {}) }} />;
}
// Grey block / image placeholder
function WBlock({ w = "100%", h = 40, r = 8, c, dashed, children, style }) {
  return (
    <div style={{ width: w, height: h, borderRadius: r, background: c || WIRE.fillSoft,
      border: dashed ? `1.5px dashed ${WIRE.faint}` : "none", display: "flex", alignItems: "center",
      justifyContent: "center", color: WIRE.line, flex: "none", ...(style || {}) }}>{children}</div>
  );
}
// Wire button (accent only when `accent` set — used by mid-fi for primary actions)
function WBtn({ children, accent, w, ghost, h = 30, style }) {
  return (
    <div style={{ height: h, width: w, padding: "0 14px", borderRadius: 7, display: "inline-flex",
      alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, fontWeight: 600, flex: "none",
      background: accent ? ACCENT : ghost ? "transparent" : WIRE.fill,
      color: accent ? "#fff" : WIRE.ink, border: ghost ? `1.5px solid ${WIRE.faint}` : "none",
      ...(style || {}) }}>{children || <WBar w={Math.max(28, (typeof w === "number" ? w - 28 : 44))} h={8} c={accent ? "rgba(255,255,255,.7)" : WIRE.line} />}</div>
  );
}
// Browser/device chrome wrapper for a wireframe screen
function WScreen({ title, children, style }) {
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", border: `1.5px solid ${WIRE.edge}`,
      background: "#fff", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", ...(style || {}) }}>
      <div style={{ height: 30, background: "#fff", borderBottom: `1px solid ${WIRE.fill}`, display: "flex",
        alignItems: "center", gap: 6, padding: "0 12px", flex: "none" }}>
        <span style={{ width: 9, height: 9, borderRadius: 999, background: WIRE.faint }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: WIRE.faint }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: WIRE.faint }} />
        {title && <span style={{ marginLeft: 10, fontSize: 10.5, fontWeight: 600, color: WIRE.line,
          letterSpacing: "0.04em" }}>{title}</span>}
      </div>
      <div style={{ flex: 1, minHeight: 0, background: WIRE.paper, padding: 14, display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

Object.assign(window, { FRAME_W, FRAME_H, ACCENT, ArtifactFrame, Kick, Panel, DotItem, WIRE, WBar, WBlock, WBtn, WScreen });
