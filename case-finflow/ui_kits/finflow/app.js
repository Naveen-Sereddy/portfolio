/* ----- Wordmark style presets ----- */
const WORDMARK_PRESETS = {
  "Editorial italic": {
    "--ff-brand-font": '"Instrument Serif", Georgia, serif',
    "--ff-brand-style": "italic",
    "--ff-brand-weight": "400",
    "--ff-brand-letter-spacing": "-0.015em",
    "--ff-brand-size-scale": "1.05"
  },
  "Editorial roman": {
    "--ff-brand-font": '"Instrument Serif", Georgia, serif',
    "--ff-brand-style": "normal",
    "--ff-brand-weight": "400",
    "--ff-brand-letter-spacing": "-0.015em",
    "--ff-brand-size-scale": "1.05"
  },
  "Modern grotesk": {
    "--ff-brand-font": '"Inter", system-ui, sans-serif',
    "--ff-brand-style": "normal",
    "--ff-brand-weight": "700",
    "--ff-brand-letter-spacing": "-0.035em",
    "--ff-brand-size-scale": "0.92"
  },
  "Geometric": {
    "--ff-brand-font": '"Space Grotesk", system-ui, sans-serif',
    "--ff-brand-style": "normal",
    "--ff-brand-weight": "600",
    "--ff-brand-letter-spacing": "-0.025em",
    "--ff-brand-size-scale": "0.95"
  },
  "Expressive serif": {
    "--ff-brand-font": '"Fraunces", "Instrument Serif", Georgia, serif',
    "--ff-brand-style": "italic",
    "--ff-brand-weight": "500",
    "--ff-brand-letter-spacing": "-0.025em",
    "--ff-brand-size-scale": "1.0"
  },
  "Mono technical": {
    "--ff-brand-font": '"JetBrains Mono", ui-monospace, monospace',
    "--ff-brand-style": "normal",
    "--ff-brand-weight": "600",
    "--ff-brand-letter-spacing": "-0.06em",
    "--ff-brand-size-scale": "0.78"
  }
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "wordmarkStyle": "Modern grotesk"
} /*EDITMODE-END*/;
const SCREEN_REGISTRY = [
// Auth
{
  id: "signin",
  group: "Auth",
  label: "Sign in",
  chrome: "fullbleed",
  Comp: () => /*#__PURE__*/React.createElement(SignIn, null)
}, {
  id: "sso",
  group: "Auth",
  label: "SSO / Workspace",
  chrome: "fullbleed",
  Comp: () => /*#__PURE__*/React.createElement(SSOWorkspace, null)
}, {
  id: "forgot",
  group: "Auth",
  label: "Forgot password",
  chrome: "fullbleed",
  Comp: () => /*#__PURE__*/React.createElement(ForgotPassword, null)
}, {
  id: "reset",
  group: "Auth",
  label: "Reset password",
  chrome: "fullbleed",
  Comp: () => /*#__PURE__*/React.createElement(ResetPassword, null)
},
// Onboarding
{
  id: "onb-bank",
  group: "Onboarding",
  label: "Connect bank / cards",
  chrome: "fullbleed",
  Comp: () => /*#__PURE__*/React.createElement(ConnectBank, null)
}, {
  id: "onb-team",
  group: "Onboarding",
  label: "Invite team",
  chrome: "fullbleed",
  Comp: () => /*#__PURE__*/React.createElement(InviteTeam, null)
}, {
  id: "onb-policy",
  group: "Onboarding",
  label: "Set policy",
  chrome: "fullbleed",
  Comp: () => /*#__PURE__*/React.createElement(SetPolicy, null)
},
// Dashboards
{
  id: "dashboard",
  group: "Dashboards",
  label: "Finance Admin overview",
  role: "finance",
  Comp: () => /*#__PURE__*/React.createElement(FinanceDashboard, null)
}, {
  id: "dashboard-mgr",
  group: "Dashboards",
  label: "Manager dashboard",
  role: "manager",
  Comp: () => /*#__PURE__*/React.createElement(ManagerDashboard, null)
}, {
  id: "dashboard-emp",
  group: "Dashboards",
  label: "Employee dashboard",
  role: "employee",
  Comp: () => /*#__PURE__*/React.createElement(EmployeeDashboard, null)
},
// Expenses
{
  id: "expenses",
  group: "Expenses",
  label: "Expenses — list",
  Comp: () => /*#__PURE__*/React.createElement(ExpenseList, null)
}, {
  id: "expense-detail",
  group: "Expenses",
  label: "Expense detail",
  Comp: () => /*#__PURE__*/React.createElement(ExpenseDetail, null)
}, {
  id: "new-expense",
  group: "Expenses",
  label: "New expense (desktop)",
  Comp: () => /*#__PURE__*/React.createElement(NewExpense, null)
}, {
  id: "ocr",
  group: "Expenses",
  label: "Receipt OCR review",
  Comp: () => /*#__PURE__*/React.createElement(OcrReview, null)
}, {
  id: "flagged",
  group: "Expenses",
  label: "Policy flagged",
  Comp: () => /*#__PURE__*/React.createElement(FlaggedExpense, null)
}, {
  id: "import",
  group: "Expenses",
  label: "Bulk import CSV",
  Comp: () => /*#__PURE__*/React.createElement(BulkImport, null)
},
// Approvals
{
  id: "approvals",
  group: "Approvals",
  label: "Approvals queue",
  Comp: () => /*#__PURE__*/React.createElement(ApprovalsQueue, null)
}, {
  id: "approval-detail",
  group: "Approvals",
  label: "Approval detail",
  Comp: () => /*#__PURE__*/React.createElement(ExpenseDetail, null)
}, {
  id: "approval-bulk",
  group: "Approvals",
  label: "Bulk approve (queue)",
  Comp: () => /*#__PURE__*/React.createElement(ApprovalsQueue, null)
}, {
  id: "approval-history",
  group: "Approvals",
  label: "Approval history",
  Comp: () => /*#__PURE__*/React.createElement(ApprovalHistory, null)
},
// Reimbursements
{
  id: "reimburse",
  group: "Reimbursements",
  label: "Payouts list",
  Comp: () => /*#__PURE__*/React.createElement(ReimbursementsList, null)
}, {
  id: "payout-detail",
  group: "Reimbursements",
  label: "Payout detail",
  Comp: () => /*#__PURE__*/React.createElement(PayoutDetail, null)
}, {
  id: "schedule-payout",
  group: "Reimbursements",
  label: "Schedule payout",
  Comp: () => /*#__PURE__*/React.createElement(SchedulePayout, null)
},
// Reports
{
  id: "reports",
  group: "Reports",
  label: "Reports home",
  Comp: () => /*#__PURE__*/React.createElement(ReportsHome, null)
}, {
  id: "report-build",
  group: "Reports",
  label: "Report builder",
  Comp: () => /*#__PURE__*/React.createElement(ReportBuilder, null)
}, {
  id: "saved-report",
  group: "Reports",
  label: "Saved report",
  Comp: () => /*#__PURE__*/React.createElement(SavedReport, null)
}, {
  id: "export-report",
  group: "Reports",
  label: "Export",
  Comp: () => /*#__PURE__*/React.createElement(ExportReport, null)
},
// Cards
{
  id: "cards",
  group: "Cards",
  label: "Cards list",
  Comp: () => /*#__PURE__*/React.createElement(CardsList, null)
}, {
  id: "card-detail",
  group: "Cards",
  label: "Card detail",
  Comp: () => /*#__PURE__*/React.createElement(CardDetail, null)
}, {
  id: "issue-card",
  group: "Cards",
  label: "Issue new card",
  Comp: () => /*#__PURE__*/React.createElement(IssueCard, null)
},
// Vendors
{
  id: "vendors",
  group: "Vendors",
  label: "Vendor directory",
  Comp: () => /*#__PURE__*/React.createElement(VendorsList, null)
}, {
  id: "vendor-detail",
  group: "Vendors",
  label: "Vendor detail",
  Comp: () => /*#__PURE__*/React.createElement(VendorDetail, null)
},
// Settings
{
  id: "settings-profile",
  group: "Settings",
  label: "Profile",
  Comp: () => /*#__PURE__*/React.createElement(SettingsWrapper, {
    tab: "profile"
  })
}, {
  id: "settings-security",
  group: "Settings",
  label: "Security & 2FA",
  Comp: () => /*#__PURE__*/React.createElement(SettingsWrapper, {
    tab: "security"
  })
}, {
  id: "settings-team",
  group: "Settings",
  label: "Team & roles",
  Comp: () => /*#__PURE__*/React.createElement(SettingsWrapper, {
    tab: "team"
  })
}, {
  id: "settings-policies",
  group: "Settings",
  label: "Policies",
  Comp: () => /*#__PURE__*/React.createElement(SettingsWrapper, {
    tab: "policies"
  })
}, {
  id: "settings-integrations",
  group: "Settings",
  label: "Integrations",
  Comp: () => /*#__PURE__*/React.createElement(SettingsWrapper, {
    tab: "integrations"
  })
}, {
  id: "settings-billing",
  group: "Settings",
  label: "Billing",
  Comp: () => /*#__PURE__*/React.createElement(SettingsWrapper, {
    tab: "billing"
  })
}, {
  id: "settings-notif",
  group: "Settings",
  label: "Notification prefs",
  Comp: () => /*#__PURE__*/React.createElement(SettingsWrapper, {
    tab: "notif-prefs"
  })
},
// Other
{
  id: "audit",
  group: "Other",
  label: "Audit log",
  Comp: () => /*#__PURE__*/React.createElement(AuditLog, null)
}, {
  id: "notif",
  group: "Other",
  label: "Notifications center",
  Comp: () => /*#__PURE__*/React.createElement(NotificationsCenter, null)
}, {
  id: "help",
  group: "Other",
  label: "Help / Support",
  Comp: () => /*#__PURE__*/React.createElement(Help, null)
},
// States
{
  id: "state-loading",
  group: "States",
  label: "Loading dashboard",
  Comp: () => /*#__PURE__*/React.createElement(LoadingDashboard, null)
}, {
  id: "state-empty",
  group: "States",
  label: "Empty expenses",
  Comp: () => /*#__PURE__*/React.createElement(EmptyExpenses, null)
}, {
  id: "state-error",
  group: "States",
  label: "Error",
  Comp: () => /*#__PURE__*/React.createElement(ErrorState, null)
}, {
  id: "state-success",
  group: "States",
  label: "Success — approval",
  Comp: () => /*#__PURE__*/React.createElement(SuccessApproval, null)
}, {
  id: "state-confirm",
  group: "States",
  label: "Confirmation — payout scheduled",
  Comp: () => /*#__PURE__*/React.createElement(ConfirmReimbursement, null)
},
// Mobile
{
  id: "mobile-flow",
  group: "Mobile",
  label: "Employee mobile flow (8 screens)",
  chrome: "mobile",
  Comp: () => /*#__PURE__*/React.createElement(MobileShelf, null)
}];
const SettingsWrapper = ({
  tab
}) => {
  const [active, setActive] = React.useState(tab);
  const map = {
    profile: /*#__PURE__*/React.createElement(SettingsProfile, null),
    security: /*#__PURE__*/React.createElement(SettingsSecurity, null),
    team: /*#__PURE__*/React.createElement(SettingsTeam, null),
    policies: /*#__PURE__*/React.createElement(SettingsPolicies, null),
    integrations: /*#__PURE__*/React.createElement(SettingsIntegrations, null),
    billing: /*#__PURE__*/React.createElement(SettingsBilling, null),
    "notif-prefs": /*#__PURE__*/React.createElement(SettingsNotifPrefs, null)
  };
  return /*#__PURE__*/React.createElement(SettingsShell, {
    active: active,
    setActive: setActive
  }, map[active]);
};

/* Wraps a fixed 360x760 MobileFrame in a scaled-down box. transform (not zoom) so
   percentage-based absolute-positioned children inside the frame still resolve
   against the real 360x760 box before the visual scale is applied. */
const MobileThumb = ({
  children,
  scale
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 360 * scale,
    height: 760 * scale,
    overflow: 'hidden',
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 360,
    height: 760,
    transform: `scale(${scale})`,
    transformOrigin: 'top left'
  }
}, children));
const MOBILE_SCREENS = [{
  label: "Sign in",
  Comp: () => /*#__PURE__*/React.createElement(MobileSignIn, null)
}, {
  label: "Home",
  Comp: () => /*#__PURE__*/React.createElement(MobileHome, null)
}, {
  label: "Snap receipt",
  Comp: () => /*#__PURE__*/React.createElement(MobileSnapReceipt, null)
}, {
  label: "New expense",
  Comp: () => /*#__PURE__*/React.createElement(MobileNewExpense, null)
}, {
  label: "Submitted",
  Comp: () => /*#__PURE__*/React.createElement(MobileSubmitSuccess, null)
}, {
  label: "Status",
  Comp: () => /*#__PURE__*/React.createElement(MobileStatusTimeline, null)
}, {
  label: "My expenses",
  Comp: () => /*#__PURE__*/React.createElement(MobileExpenses, null)
}, {
  label: "My card",
  Comp: () => /*#__PURE__*/React.createElement(MobileCards, null)
}];
const MOBILE_PAGES = [[0, 1, 2], [3, 4, 5], [6, 7]];
const MobileShelf = () => {
  const [page, setPage] = React.useState(0);
  const scale = 0.72;
  const indices = MOBILE_PAGES[page];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Mobile \xB7 Employee POV",
    title: "iOS \u2014 expense submission flow",
    sub: "Corey submits a $42.80 coffee expense in 6 taps, then checks past expenses and manages their card."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--ghost ff-btn--icon",
    "aria-label": "Previous screens",
    disabled: page === 0,
    onClick: () => setPage(p => Math.max(0, p - 1)),
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      border: '1px solid var(--ff-border-strong)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "caret-left",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-mobile-shelf",
    style: {
      borderRadius: 'var(--ff-radius-lg)',
      border: '1px solid var(--ff-border)',
      justifyContent: 'center',
      overflow: 'visible'
    }
  }, indices.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MobileThumb, {
    scale: scale
  }, MOBILE_SCREENS[i].Comp()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ff-fg-muted)',
      fontWeight: 500
    }
  }, i + 1, ". ", MOBILE_SCREENS[i].label)))), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--ghost ff-btn--icon",
    "aria-label": "Next screens",
    disabled: page === MOBILE_PAGES.length - 1,
    onClick: () => setPage(p => Math.min(MOBILE_PAGES.length - 1, p + 1)),
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      border: '1px solid var(--ff-border-strong)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "caret-right",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'center',
      gap: 8,
      marginTop: 16
    }
  }, MOBILE_PAGES.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": `Go to screens ${i * 3 + 1}–${i * 3 + 3}`,
    onClick: () => setPage(i),
    style: {
      width: 20,
      height: 8,
      borderRadius: 999,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      transform: i === page ? 'scaleX(1)' : 'scaleX(0.4)',
      transformOrigin: 'center',
      background: i === page ? 'var(--ff-primary)' : 'var(--ff-border-strong)',
      transition: 'transform 200ms var(--ff-ease)'
    }
  }))));
};
const DEFAULT_BY_ROLE = {
  finance: "dashboard",
  manager: "dashboard-mgr",
  employee: "dashboard-emp"
};
const useLocalStorage = (k, init) => {
  const [v, setV] = React.useState(() => {
    try {
      const s = localStorage.getItem(k);
      return s ? JSON.parse(s) : init;
    } catch {
      return init;
    }
  });
  React.useEffect(() => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch {}
  }, [k, v]);
  return [v, setV];
};

/* ----- Screen Directory ----- */
const ScreenDirectory = ({
  open,
  onClose,
  current,
  onPick
}) => {
  const [q, setQ] = React.useState("");
  const groups = {};
  SCREEN_REGISTRY.forEach(s => {
    if (q && !s.label.toLowerCase().includes(q.toLowerCase()) && !s.group.toLowerCase().includes(q.toLowerCase())) return;
    (groups[s.group] = groups[s.group] || []).push(s);
  });
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-modal",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 680,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--ff-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "magnifying-glass",
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: "Jump to screen\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "ff-kbd"
  }, "ESC"))), /*#__PURE__*/React.createElement("div", {
    className: "ff-scroll",
    style: {
      maxHeight: 460,
      overflow: 'auto',
      padding: '6px 0'
    }
  }, Object.entries(groups).map(([g, items]) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-sidebar__label",
    style: {
      padding: '10px 18px 6px'
    }
  }, g), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px'
    }
  }, items.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    href: "#",
    className: "ff-nav-item",
    "aria-current": current === s.id ? "page" : undefined,
    onClick: e => {
      e.preventDefault();
      onPick(s.id);
      onClose();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-elbow-down-right",
    size: 14,
    style: {
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("span", null, s.label), /*#__PURE__*/React.createElement("span", {
    className: "ff-nav-item__count",
    style: {
      fontFamily: 'var(--ff-font-mono)'
    }
  }, s.id))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px',
      borderTop: '1px solid var(--ff-border)',
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-kbd"
  }, "\u2318K"), " open \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ff-kbd"
  }, "\u2191\u2193"), " navigate \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ff-kbd"
  }, "\u21B5"), " select")));
};

/* ----- App ----- */
const App = () => {
  const [theme, setTheme] = useLocalStorage("ff-theme", "light");
  const [role, setRole] = useLocalStorage("ff-role", "finance");
  const [screen, setScreen] = useLocalStorage("ff-screen", "dashboard");
  const [dirOpen, setDirOpen] = React.useState(false);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Apply wordmark CSS vars whenever the tweak changes
  React.useEffect(() => {
    const preset = WORDMARK_PRESETS[t.wordmarkStyle] || WORDMARK_PRESETS["Editorial italic"];
    Object.entries(preset).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }, [t.wordmarkStyle]);
  React.useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setDirOpen(o => !o);
      }
      if (e.key === "Escape") setDirOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const onRole = r => {
    setRole(r);
    // Don't strand the user on a screen the new role can't reach from its own
    // navigation (e.g. an Employee left looking at Vendors/Audit). Redirect to
    // that role's home if the current screen isn't in its reachable set.
    const REACHABLE = {
      finance: ["dashboard", "expenses", "approvals", "reimburse", "reports", "cards", "vendors", "audit", "settings-policies", "settings-team", "settings-integrations", "settings-profile", "help"],
      manager: ["dashboard-mgr", "approvals", "expenses", "reports", "saved-report", "notif", "settings-profile", "help"],
      employee: ["dashboard-emp", "new-expense", "expenses", "reimburse", "cards", "notif", "help"]
    };
    if (!(REACHABLE[r] || []).includes(screen)) setScreen(DEFAULT_BY_ROLE[r]);
  };
  const onNavigate = id => {
    // Map sidebar id → screen id (mostly 1:1; map a few aliases)
    const alias = {
      "dashboard-mgr": "dashboard-mgr",
      "dashboard-emp": "dashboard-emp",
      "my-expenses": "expenses",
      "my-reimburse": "reimburse",
      "my-cards": "cards",
      "team": "settings-team",
      "policies": "settings-policies",
      "integrations": "settings-integrations",
      "settings": "settings-profile",
      "notif": "notif",
      "help": "help",
      "budgets": "saved-report"
    };
    setScreen(alias[id] || id);
  };

  // Expose a stable navigation handle so any screen can route via ffGo(id).
  const navRef = React.useRef(onNavigate);
  navRef.current = onNavigate;
  React.useEffect(() => {
    window.ffNavigate = id => navRef.current(id);
  }, []);
  const entry = SCREEN_REGISTRY.find(s => s.id === screen) || SCREEN_REGISTRY[0];
  const Comp = entry.Comp;
  const fullbleed = entry.chrome === "fullbleed";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%'
    }
  }, fullbleed ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflow: 'auto'
    },
    className: "ff-scroll"
  }, /*#__PURE__*/React.createElement(Comp, null)) : /*#__PURE__*/React.createElement("div", {
    className: "ff-app"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    role: role,
    current: screen,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-main"
  }, /*#__PURE__*/React.createElement(TopBar, {
    role: role,
    theme: theme,
    onTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    onRole: onRole,
    onSearchClick: () => setDirOpen(true),
    onNotif: () => setScreen("notif")
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-page ff-scroll"
  }, /*#__PURE__*/React.createElement(Comp, null)))), /*#__PURE__*/React.createElement("button", {
    className: "ff-launch",
    onClick: () => setDirOpen(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "magnifying-glass",
    size: 14
  }), "All screens", /*#__PURE__*/React.createElement("span", {
    className: "ff-kbd",
    style: {
      marginLeft: 6
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement(ScreenDirectory, {
    open: dirOpen,
    onClose: () => setDirOpen(false),
    current: screen,
    onPick: setScreen
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Brand wordmark"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Wordmark style",
    value: t.wordmarkStyle,
    options: Object.keys(WORDMARK_PRESETS),
    onChange: v => setTweak('wordmarkStyle', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      fontSize: 12,
      color: '#6b6478',
      lineHeight: 1.5
    }
  }, "\"FinFlow\" rendered in a single typeface across the whole product \u2014 sidebar mark, lockup, auth screen.")));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));