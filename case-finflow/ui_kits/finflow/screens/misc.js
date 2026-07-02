/* FinFlow Screens — Auth, Onboarding, Audit, Notif Center, Help, States */

/* ---------- Auth ---------- */

const AuthLayout = ({
  children,
  title,
  sub,
  foot
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '100%',
    background: 'var(--ff-bg)'
  }
}, /*#__PURE__*/React.createElement("aside", {
  style: {
    padding: '56px 56px',
    background: 'var(--ff-plum-900)',
    color: '#FBF5E8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement(BrandMark, {
  variant: "horizontal",
  theme: "dark",
  size: 28
}), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 520,
    zIndex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-font-sans)',
    fontWeight: 700,
    fontSize: 56,
    lineHeight: 1.05,
    letterSpacing: '-0.04em',
    color: '#FBF5E8'
  }
}, "The whole company's", /*#__PURE__*/React.createElement("br", null), "spend, in flow."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    opacity: 0.7,
    fontSize: 14,
    lineHeight: 1.6,
    maxWidth: 380
  }
}, "Expense submission, approvals, cards, and close packets \u2014 one workspace, built for finance teams that move fast."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    fontSize: 11,
    opacity: 0.5,
    letterSpacing: '0.08em',
    textTransform: 'uppercase'
  }
}, "SOC 2 Type II \xB7 PCI DSS \xB7 GDPR")), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -100,
    bottom: -60,
    opacity: 0.18
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 280,
    height: 32,
    background: 'var(--ff-citron-500)',
    borderRadius: 8,
    marginBottom: 14
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 240,
    height: 32,
    background: 'var(--ff-plum-300)',
    borderRadius: 8,
    marginBottom: 14,
    marginLeft: 40
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 200,
    height: 32,
    background: 'var(--ff-plum-500)',
    borderRadius: 8,
    marginLeft: 80
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    opacity: 0.6
  }
}, "\xA9 FinFlow \xB7 ", FF_DATA.company.fiscalYear)), /*#__PURE__*/React.createElement("main", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 24px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 380
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-eyebrow"
}, "Workspace"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: 'var(--ff-font-sans)',
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    marginTop: 8
  }
}, title), sub && /*#__PURE__*/React.createElement("p", {
  style: {
    color: 'var(--ff-fg-muted)',
    marginTop: 8,
    fontSize: 14
  }
}, sub), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28
  }
}, children), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24,
    fontSize: 13,
    color: 'var(--ff-fg-muted)'
  }
}, foot))));
const SignIn = () => /*#__PURE__*/React.createElement(AuthLayout, {
  title: "Sign in",
  sub: "Welcome back. Sign in to continue to FinFlow.",
  foot: /*#__PURE__*/React.createElement("span", null, "New here? ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Create a workspace"))
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--lg",
  style: {
    width: '100%',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "google-logo",
  size: 16
}), " Continue with Google"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--lg",
  style: {
    width: '100%',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "key",
  size: 16
}), " Continue with Okta SSO"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    color: 'var(--ff-fg-muted)',
    fontSize: 12,
    margin: '4px 0'
  }
}, /*#__PURE__*/React.createElement("hr", {
  style: {
    flex: 1,
    border: 0,
    borderTop: '1px solid var(--ff-border)'
  }
}), " or ", /*#__PURE__*/React.createElement("hr", {
  style: {
    flex: 1,
    border: 0,
    borderTop: '1px solid var(--ff-border)'
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Work email"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-input--lg",
  defaultValue: "maren@arcadialabs.co"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Password"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-input--lg",
  type: "password",
  defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 13,
    whiteSpace: 'nowrap'
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox"
}), " Remember me"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontSize: 13,
    whiteSpace: 'nowrap'
  }
}, "Forgot password?")), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary ff-btn--lg",
  style: {
    width: '100%'
  }
}, "Sign in")));
const SSOWorkspace = () => /*#__PURE__*/React.createElement(AuthLayout, {
  title: "Find your workspace",
  sub: "Enter your work email or workspace URL.",
  foot: /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u2190 Back to sign in")
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Workspace URL"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex'
  }
}, /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-input--lg",
  defaultValue: "arcadialabs",
  style: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 14px',
    border: '1px solid var(--ff-border)',
    borderLeft: 0,
    background: 'var(--ff-card-2)',
    borderRadius: '0 8px 8px 0',
    fontSize: 13,
    color: 'var(--ff-fg-muted)'
  }
}, ".finflow.app"))), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary ff-btn--lg",
  style: {
    width: '100%'
  }
}, "Continue with SSO"), /*#__PURE__*/React.createElement("div", {
  className: "ff-alert ff-alert--info"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "info",
  size: 18,
  weight: "fill"
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-alert__body"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-alert__title"
}, "Arcadia Labs uses Okta"), /*#__PURE__*/React.createElement("div", null, "You'll be redirected to your identity provider.")))));
const ForgotPassword = () => /*#__PURE__*/React.createElement(AuthLayout, {
  title: "Reset password",
  sub: "We'll email you a secure link.",
  foot: /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u2190 Back to sign in")
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Work email"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-input--lg",
  defaultValue: "maren@arcadialabs.co"
})), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary ff-btn--lg",
  style: {
    width: '100%'
  }
}, "Send reset link")));
const ResetPassword = () => /*#__PURE__*/React.createElement(AuthLayout, {
  title: "Set a new password",
  sub: "Must be at least 12 characters.",
  foot: null
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "New password"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-input--lg",
  type: "password",
  defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Confirm password"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-input--lg",
  type: "password",
  defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--ff-fg-muted)'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 6,
    color: 'var(--ff-approved)'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 12
}), " 12+ characters"), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 6,
    color: 'var(--ff-approved)'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 12
}), " Number or symbol"), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 6
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "circle",
  size: 12
}), " Not a previous password")), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary ff-btn--lg",
  style: {
    width: '100%'
  }
}, "Update password")));

/* ---------- Onboarding ---------- */

const OnboardingShell = ({
  step,
  children,
  title,
  sub,
  next
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 840,
    margin: '0 auto',
    padding: '40px 24px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    marginBottom: 36
  }
}, /*#__PURE__*/React.createElement(BrandMark, {
  variant: "horizontal",
  size: 28
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-steps"
}, ["Connect bank", "Invite team", "Set policy"].map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: s
}, /*#__PURE__*/React.createElement("div", {
  className: `ff-step ${i < step ? 'ff-step--done' : ''} ${i === step ? 'ff-step--active' : ''}`
}, /*#__PURE__*/React.createElement("span", {
  className: "ff-step__bullet"
}, i < step ? /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 12
}) : i + 1), /*#__PURE__*/React.createElement("span", null, s)), i < 2 && /*#__PURE__*/React.createElement("span", {
  className: "ff-step__line"
}))))), /*#__PURE__*/React.createElement("div", {
  className: "ff-eyebrow"
}, "Onboarding \xB7 ", step + 1, " of 3"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: 'var(--ff-font-sans)',
    fontWeight: 700,
    fontSize: 42,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    marginTop: 8
  }
}, title), sub && /*#__PURE__*/React.createElement("p", {
  style: {
    color: 'var(--ff-fg-muted)',
    maxWidth: 560,
    marginTop: 8
  }
}, sub), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28
  }
}, children), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    marginTop: 28
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--ghost"
}, "Skip for now"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary ff-btn--lg"
}, next)));
const ConnectBank = () => /*#__PURE__*/React.createElement(OnboardingShell, {
  step: 0,
  title: "Connect a bank or card program",
  sub: "Pull statements automatically and start issuing FinFlow cards. We use read-only access by default.",
  next: "Continue \u2192"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-grid ff-grid--3"
}, [{
  name: "Mercury",
  icon: "bank",
  desc: "Business checking, ACH out"
}, {
  name: "Brex",
  icon: "credit-card",
  desc: "Cards, statements"
}, {
  name: "Chase",
  icon: "buildings",
  desc: "Business banking"
}, {
  name: "AMEX",
  icon: "credit-card",
  desc: "Card statements"
}, {
  name: "SVB / First Citizens",
  icon: "bank",
  desc: "Wires, FBO accounts"
}, {
  name: "Plaid · Other",
  icon: "plugs",
  desc: "12,000+ institutions"
}].map(b => /*#__PURE__*/React.createElement(Card, {
  key: b.name
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: 'var(--ff-card-2)',
    border: '1px solid var(--ff-border)',
    display: 'grid',
    placeItems: 'center'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: b.icon,
  size: 18
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 600
  }
}, b.name), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--ff-fg-muted)'
  }
}, b.desc))), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--sm",
  style: {
    width: '100%',
    marginTop: 14
  }
}, "Connect")))));
const InviteTeam = () => /*#__PURE__*/React.createElement(OnboardingShell, {
  step: 1,
  title: "Invite your team",
  sub: "Send invites by email. Roles can be changed later.",
  next: "Continue \u2192"
}, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '10px'
  }
}, [{
  e: "theo@arcadialabs.co",
  r: "Manager"
}, {
  e: "iris@arcadialabs.co",
  r: "Employee"
}, {
  e: "dev@arcadialabs.co",
  r: "Employee"
}, {
  e: "",
  r: "Employee"
}].map((row, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "ff-row",
  style: {
    gap: 10
  }
}, /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: row.e,
  placeholder: "name@company.com"
}), /*#__PURE__*/React.createElement("select", {
  className: "ff-select",
  style: {
    width: 160
  },
  defaultValue: row.r
}, /*#__PURE__*/React.createElement("option", null, "Employee"), /*#__PURE__*/React.createElement("option", null, "Manager"), /*#__PURE__*/React.createElement("option", null, "Finance Admin"), /*#__PURE__*/React.createElement("option", null, "Auditor")), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--ghost ff-btn--icon"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "x",
  size: 14
})))), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--ghost",
  style: {
    justifyContent: 'flex-start',
    marginTop: 4
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "plus",
  size: 14
}), " Add another")), /*#__PURE__*/React.createElement("hr", {
  className: "ff-divider"
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--ff-fg-muted)'
  }
}, "Or bulk-invite via CSV / SCIM (Okta connected)"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--sm"
}, "Import"))));
const SetPolicy = () => /*#__PURE__*/React.createElement(OnboardingShell, {
  step: 2,
  title: "Set your starter policy",
  sub: "You can refine these later \u2014 these are sensible defaults for a Series B SaaS company.",
  next: "Finish setup \u2192"
}, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-grid ff-grid--2"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Hotel cap (domestic)"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "$300 / night"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Hotel cap (international)"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "$420 / night"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Per diem meals"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "$75 / day"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Receipts required over"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "$25"
}))), /*#__PURE__*/React.createElement("hr", {
  className: "ff-divider"
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 500
  }
}, "Auto-categorize transactions with AI"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--ff-fg-muted)'
  }
}, "Pulls merchant + memo, suggests category")), /*#__PURE__*/React.createElement("span", {
  className: "ff-switch",
  role: "switch",
  "aria-checked": "true"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 500
  }
}, "Block out-of-policy charges at swipe"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--ff-fg-muted)'
  }
}, "Cards decline if over limit (recommended)")), /*#__PURE__*/React.createElement("span", {
  className: "ff-switch",
  role: "switch",
  "aria-checked": "false"
})))));

/* ---------- Audit ---------- */

const AuditLog = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Audit",
    title: "Audit log",
    sub: "Every action, every actor, immutable",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "funnel",
      size: 14
    }), " Filter"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 14
    }), " Export CSV"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ChipBar, {
    items: [{
      id: "all",
      label: "All"
    }, {
      id: "approve",
      label: "Approvals"
    }, {
      id: "policy",
      label: "Policy edits"
    }, {
      id: "card",
      label: "Card events"
    }, {
      id: "signin",
      label: "Sign-ins"
    }],
    value: "all",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-search",
    style: {
      width: 240,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "magnifying-glass",
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search by actor or target\u2026"
  }))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Timestamp (UTC-7)"), /*#__PURE__*/React.createElement("th", null, "Actor"), /*#__PURE__*/React.createElement("th", null, "Action"), /*#__PURE__*/React.createElement("th", null, "Target"), /*#__PURE__*/React.createElement("th", null, "IP / agent"))), /*#__PURE__*/React.createElement("tbody", null, d.auditEntries.concat(d.auditEntries.map(e => ({
    ...e,
    ts: e.ts.replace("2026-05-22", "2026-05-21")
  }))).slice(0, 12).map((a, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum",
    style: {
      color: 'var(--ff-fg-muted)',
      fontSize: 12
    }
  }, a.ts), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-row",
    style: {
      gap: 6
    }
  }, a.actor !== "System" && a.actor !== "Okta SSO" && /*#__PURE__*/React.createElement(Avatar, {
    initials: a.actor.split(' ').map(x => x[0]).join('').slice(0, 2)
  }), a.actor)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--plum ff-badge--no-dot"
  }, a.action)), /*#__PURE__*/React.createElement("td", null, a.target), /*#__PURE__*/React.createElement("td", {
    className: "ff-mono",
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "10.0.4.221 \xB7 Chrome 128")))))));
};

/* ---------- Notif Center ---------- */
const NotificationsCenter = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Notifications",
    title: "Inbox",
    sub: "Recent activity across your workspace",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }), " Mark all read"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "gear-six",
      size: 14
    })))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '200px 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '2px'
    }
  }, [{
    id: "all",
    label: "All",
    icon: "tray",
    count: 14
  }, {
    id: "approve",
    label: "Approvals",
    icon: "check-square",
    count: 8
  }, {
    id: "policy",
    label: "Policy",
    icon: "warning",
    count: 2
  }, {
    id: "payout",
    label: "Payouts",
    icon: "arrows-clockwise",
    count: 3
  }, {
    id: "card",
    label: "Cards",
    icon: "credit-card",
    count: 1
  }].map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t.id,
    className: "ff-nav-item",
    "aria-current": i === 0 ? "page" : undefined,
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 16
  }), t.label, /*#__PURE__*/React.createElement("span", {
    className: "ff-nav-item__count"
  }, t.count)))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, d.notifications.concat(d.notifications).slice(0, 10).map((n, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '14px 20px',
      borderBottom: i < arr.length - 1 ? '1px solid var(--ff-border)' : '0',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: 'var(--ff-card-2)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      color: i % 4 === 0 ? 'var(--ff-pending)' : 'var(--ff-fg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: {
      approval: "check-square",
      policy: "warning",
      payout: "arrows-clockwise",
      card: "credit-card",
      report: "file-text"
    }[n.kind],
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, n.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)',
      marginTop: 2
    }
  }, n.ts, " ago")), i < 3 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--ff-primary)',
      borderRadius: 999,
      marginTop: 8
    }
  }))))));
};

/* ---------- Help ---------- */
const Help = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Help",
  title: "How can we help?",
  sub: "Search docs or talk to support"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 640,
    margin: '0 auto 32px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-search ff-input--lg",
  style: {
    height: 54,
    fontSize: 15
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "magnifying-glass",
  size: 18
}), /*#__PURE__*/React.createElement("input", {
  placeholder: "Search FinFlow help\u2026",
  style: {
    fontSize: 15
  }
}), /*#__PURE__*/React.createElement("span", {
  className: "ff-kbd"
}, "/"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid ff-grid--3"
}, [["Getting started", "Connect bank, invite team, set policy", "book-open"], ["Expenses & receipts", "OCR, categories, mileage, policies", "receipt"], ["Cards", "Issue, limits, freezes, statements", "credit-card"], ["Approvals", "Routing, bulk, escalations", "check-square"], ["Reports & close", "Builder, exports, QBO sync", "chart-bar"], ["Admin & security", "SSO, SCIM, audit, retention", "shield-check"]].map(([t, s, i]) => /*#__PURE__*/React.createElement(Card, {
  key: t
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: 'var(--ff-plum-100)',
    color: 'var(--ff-plum-700)',
    display: 'grid',
    placeItems: 'center',
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: i,
  size: 18
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 600,
    fontSize: 15
  }
}, t), /*#__PURE__*/React.createElement("div", {
  style: {
    color: 'var(--ff-fg-muted)',
    fontSize: 13,
    marginTop: 4
  }
}, s)))), /*#__PURE__*/React.createElement(Card, {
  style: {
    marginTop: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 600,
    fontSize: 16
  }
}, "Still stuck? Talk to a human."), /*#__PURE__*/React.createElement("div", {
  style: {
    color: 'var(--ff-fg-muted)',
    fontSize: 13,
    marginTop: 4
  }
}, "Average response \xB7 4 minutes during business hours")), /*#__PURE__*/React.createElement("div", {
  className: "ff-row"
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "envelope",
  size: 14
}), " Email"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "chats",
  size: 14
}), " Start chat")))));

/* ---------- States: loading / empty / error / success / confirmation ---------- */
const LoadingDashboard = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Workspace \xB7 Finance Admin",
  title: "Loading workspace\u2026",
  sub: " "
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid ff-grid--kpis"
}, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "ff-kpi"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-skel",
  style: {
    width: 80,
    height: 10,
    marginBottom: 14
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-skel",
  style: {
    width: 140,
    height: 36,
    marginBottom: 10
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-skel",
  style: {
    width: 100,
    height: 10
  }
})))), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid",
  style: {
    gridTemplateColumns: '2fr 1fr',
    marginTop: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-card__head"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-skel",
  style: {
    width: 140,
    height: 14
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-card__body"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-skel",
  style: {
    width: '100%',
    height: 240
  }
}))), /*#__PURE__*/React.createElement("div", {
  className: "ff-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-card__head"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-skel",
  style: {
    width: 120,
    height: 14
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-card__body"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "ff-skel",
  style: {
    width: '100%',
    height: 14
  }
})))))));
const EmptyExpenses = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Expenses",
  title: "All expenses",
  sub: "0 items"
}), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  className: "ff-empty"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-empty__icon"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "receipt",
  size: 24
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-empty__title"
}, "No expenses yet"), /*#__PURE__*/React.createElement("div", {
  className: "ff-empty__body"
}, "When teammates submit expenses or your cards are swiped, you'll see them here."), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    marginTop: 12,
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "upload-simple",
  size: 14
}), " Import CSV"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "plus",
  size: 14
}), " New expense")))));
const ErrorState = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Workspace",
  title: "Something went wrong",
  sub: "We couldn't load your dashboard"
}), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  className: "ff-empty"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-empty__icon",
  style: {
    background: 'var(--ff-rejected-bg)',
    color: 'var(--ff-rejected)',
    borderColor: 'transparent'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "warning-octagon",
  size: 24
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-empty__title"
}, "FinFlow is having trouble"), /*#__PURE__*/React.createElement("div", {
  className: "ff-empty__body"
}, "We've been notified. Try again, or check ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "status.finflow.app"), "."), /*#__PURE__*/React.createElement("div", {
  className: "ff-mono",
  style: {
    fontSize: 11,
    color: 'var(--ff-fg-subtle)',
    marginTop: 6
  }
}, "err_id: fff_4b22 \xB7 503"), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    marginTop: 12,
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-clockwise",
  size: 14
}), " Retry"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary"
}, "Contact support")))));
const SuccessApproval = () => {
  // EXP-2841 was just approved, so it leaves the open queue.
  const remaining = Math.max(0, FF_DATA.expenses.filter(e => e.status === "pending" || e.status === "flagged").length - 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: '48px auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 999,
      background: 'var(--ff-approved-bg)',
      color: 'var(--ff-approved)',
      margin: '0 auto',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 36,
    weight: "fill"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--ff-font-sans)',
      fontWeight: 700,
      fontSize: 42,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      marginTop: 24
    }
  }, "Approved."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ff-fg-muted)',
      marginTop: 8
    }
  }, "EXP-2841 \xB7 United Airlines \xB7 $842.50 approved and routed to Finance for payment."), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'center',
      marginTop: 20,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn"
  }, "View expense"), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--primary"
  }, "Next in queue (", remaining, ") \u2192")));
};
const ConfirmReimbursement = () => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 520,
    margin: '48px auto',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 72,
    height: 72,
    borderRadius: 999,
    background: 'var(--ff-flagged-bg)',
    color: 'var(--ff-flagged)',
    margin: '0 auto',
    display: 'grid',
    placeItems: 'center'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "calendar-check",
  size: 36,
  weight: "fill"
})), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: 'var(--ff-font-sans)',
    fontWeight: 700,
    fontSize: 42,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    marginTop: 24
  }
}, "Payout scheduled."), /*#__PURE__*/React.createElement("p", {
  style: {
    color: 'var(--ff-fg-muted)',
    marginTop: 8
  }
}, "3 reimbursements totaling ", /*#__PURE__*/React.createElement("strong", {
  className: "ff-tnum"
}, "$620.90"), " will be sent to employees via ACH on ", /*#__PURE__*/React.createElement("strong", null, "May 30, 2026"), "."), /*#__PURE__*/React.createElement(Card, {
  style: {
    marginTop: 24,
    textAlign: 'left'
  }
}, /*#__PURE__*/React.createElement("table", {
  className: "ff-table ff-table--compact"
}, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Iris Chen"), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: 320.40
}))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Luna Park"), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: 82.00
}))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Dev Patel"), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: 218.50
})))))), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'center',
    marginTop: 20,
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, "Download ACH receipt"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary"
}, "Back to dashboard")));
Object.assign(window, {
  SignIn,
  SSOWorkspace,
  ForgotPassword,
  ResetPassword,
  ConnectBank,
  InviteTeam,
  SetPolicy,
  AuditLog,
  NotificationsCenter,
  Help,
  LoadingDashboard,
  EmptyExpenses,
  ErrorState,
  SuccessApproval,
  ConfirmReimbursement
});