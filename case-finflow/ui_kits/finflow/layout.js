/* FinFlow Layout — App shell, sidebar, topbar, page wrappers, primitives */

/* Single source of truth for the open-approvals count, derived from the data
   so every surface (sidebar badges, KPIs, queue) agrees. */
const FF_PENDING = (window.FF_DATA ? window.FF_DATA.expenses : []).filter(e => e.status === "pending" || e.status === "flagged").length;

/* Navigate the app from any screen (App wires window.ffNavigate on mount). */
const ffGo = id => {
  if (window.ffNavigate) window.ffNavigate(id);
};
const Icon = ({
  name,
  size = 16,
  weight = "regular",
  style = {}
}) => /*#__PURE__*/React.createElement("i", {
  className: `ph${weight === "fill" ? "-fill" : weight === "bold" ? "-bold" : ""} ph-${name}`,
  style: {
    fontSize: size,
    lineHeight: 1,
    ...style
  },
  "aria-hidden": "true"
});
const Money = ({
  value,
  signed = false,
  className = ""
}) => {
  const sign = signed && value > 0 ? "+" : "";
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });
  return /*#__PURE__*/React.createElement("span", {
    className: `ff-tnum ${className}`
  }, sign, fmt.format(value));
};
const StatusBadge = ({
  status
}) => {
  const map = {
    approved: {
      label: "Approved",
      icon: "check-circle"
    },
    pending: {
      label: "Pending",
      icon: "clock"
    },
    rejected: {
      label: "Rejected",
      icon: "x-circle"
    },
    flagged: {
      label: "Flagged",
      icon: "warning"
    },
    paid: {
      label: "Paid",
      icon: "check-circle",
      cls: "approved"
    },
    scheduled: {
      label: "Scheduled",
      icon: "calendar-blank",
      cls: "flagged"
    }
  };
  const m = map[status] || {
    label: status,
    icon: "circle"
  };
  const cls = m.cls || status;
  return /*#__PURE__*/React.createElement("span", {
    className: `ff-badge ff-badge--${cls} ff-badge--no-dot`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 12
  }), " ", m.label);
};
const Avatar = ({
  initials,
  size = "md",
  style = {}
}) => {
  const cls = size === "lg" ? "ff-avatar ff-avatar--lg" : size === "xl" ? "ff-avatar ff-avatar--xl" : "ff-avatar";
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: style
  }, initials);
};
const Sidebar = ({
  role,
  current,
  onNavigate
}) => {
  const groups = {
    finance: [{
      label: "Workspace",
      items: [{
        id: "dashboard",
        icon: "house",
        label: "Dashboard"
      }, {
        id: "expenses",
        icon: "receipt",
        label: "Expenses",
        count: 14
      }, {
        id: "approvals",
        icon: "check-square",
        label: "Approvals",
        count: FF_PENDING
      }, {
        id: "reimburse",
        icon: "arrows-clockwise",
        label: "Reimbursements"
      }]
    }, {
      label: "Finance",
      items: [{
        id: "reports",
        icon: "chart-bar",
        label: "Reports"
      }, {
        id: "cards",
        icon: "credit-card",
        label: "Cards"
      }, {
        id: "vendors",
        icon: "buildings",
        label: "Vendors"
      }, {
        id: "audit",
        icon: "list-magnifying-glass",
        label: "Audit log"
      }]
    }, {
      label: "Configure",
      items: [{
        id: "policies",
        icon: "scales",
        label: "Policies"
      }, {
        id: "team",
        icon: "users-three",
        label: "Team & roles"
      }, {
        id: "integrations",
        icon: "plugs",
        label: "Integrations"
      }, {
        id: "settings",
        icon: "gear-six",
        label: "Settings"
      }]
    }],
    manager: [{
      label: "Workspace",
      items: [{
        id: "dashboard-mgr",
        icon: "house",
        label: "Team overview"
      }, {
        id: "approvals",
        icon: "check-square",
        label: "Approvals",
        count: FF_PENDING
      }, {
        id: "expenses",
        icon: "receipt",
        label: "Team expenses"
      }]
    }, {
      label: "Insights",
      items: [{
        id: "reports",
        icon: "chart-bar",
        label: "Reports"
      }, {
        id: "budgets",
        icon: "scales",
        label: "Budgets"
      }]
    }, {
      label: "Account",
      items: [{
        id: "notif",
        icon: "bell",
        label: "Notifications"
      }, {
        id: "settings",
        icon: "gear-six",
        label: "Settings"
      }]
    }],
    employee: [{
      label: "My work",
      items: [{
        id: "dashboard-emp",
        icon: "house",
        label: "My spend"
      }, {
        id: "new-expense",
        icon: "plus-circle",
        label: "New expense"
      }, {
        id: "my-expenses",
        icon: "receipt",
        label: "My expenses"
      }, {
        id: "my-reimburse",
        icon: "arrows-clockwise",
        label: "Reimbursements"
      }]
    }, {
      label: "Account",
      items: [{
        id: "my-cards",
        icon: "credit-card",
        label: "My cards"
      }, {
        id: "notif",
        icon: "bell",
        label: "Notifications"
      }, {
        id: "help",
        icon: "lifebuoy",
        label: "Help"
      }]
    }]
  };
  const user = FF_DATA.me[role];
  return /*#__PURE__*/React.createElement("aside", {
    className: "ff-sidebar ff-scroll",
    style: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-sidebar__brand"
  }, /*#__PURE__*/React.createElement(BrandMark, {
    variant: "mark",
    size: 28
  }), /*#__PURE__*/React.createElement(BrandMark, {
    variant: "wordmark",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 10px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      padding: '8px 10px',
      borderRadius: 8,
      background: 'var(--ff-hover)',
      border: '1px solid var(--ff-border)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: user.initials
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, user.title)))), groups[role].map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    className: "ff-sidebar__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-sidebar__label"
  }, g.label), g.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "ff-nav-item",
    "aria-current": current === it.id ? "page" : undefined,
    onClick: e => {
      e.preventDefault();
      onNavigate(it.id);
    },
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16,
    style: {
      color: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "ff-nav-item__count ff-tnum"
  }, it.count))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--ff-border)',
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, FF_DATA.company.name, " \xB7 ", FF_DATA.company.fiscalYear));
};
const TopBar = ({
  role,
  theme,
  onTheme,
  onRole,
  onSearchClick,
  onNotif
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-search",
    style: {
      maxWidth: 360,
      flex: 1,
      cursor: 'pointer'
    },
    onClick: onSearchClick,
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "magnifying-glass",
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search or jump to\u2026",
    readOnly: true,
    style: {
      cursor: 'pointer'
    },
    onFocus: onSearchClick
  }), /*#__PURE__*/React.createElement("span", {
    className: "ff-kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-segmented",
    role: "tablist",
    "aria-label": "Viewing role"
  }, [{
    id: "finance",
    label: "Finance Admin"
  }, {
    id: "manager",
    label: "Manager"
  }, {
    id: "employee",
    label: "Employee"
  }].map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    "aria-pressed": role === r.id,
    onClick: () => onRole(r.id)
  }, r.label))), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--ghost ff-btn--icon",
    onClick: onTheme,
    "aria-label": "Toggle theme"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === "dark" ? "sun" : "moon",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--ghost ff-btn--icon",
    onClick: onNotif,
    "aria-label": "Notifications",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 6,
      height: 6,
      background: 'var(--ff-rejected)',
      borderRadius: 999
    }
  })));
};

/* PageHead — title + actions */
const PageHead = ({
  eyebrow,
  title,
  sub,
  actions,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "ff-page__head"
}, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
  className: "ff-eyebrow",
  style: {
    marginBottom: 8
  }
}, eyebrow), /*#__PURE__*/React.createElement("h1", {
  className: "ff-page__title"
}, title), sub && /*#__PURE__*/React.createElement("div", {
  className: "ff-page__sub"
}, sub), children), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 8
  }
}, actions));

/* KPI tile */
const KpiTile = ({
  label,
  value,
  delta,
  trend,
  spark
}) => /*#__PURE__*/React.createElement("div", {
  className: "ff-kpi"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-kpi__label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "ff-kpi__value"
}, value), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: `ff-kpi__delta ff-kpi__delta--${trend === "up" ? "up" : trend === "down" ? "down" : ""}`
}, trend === "up" && /*#__PURE__*/React.createElement(Icon, {
  name: "trend-up",
  size: 12
}), trend === "down" && /*#__PURE__*/React.createElement(Icon, {
  name: "trend-down",
  size: 12
}), delta), spark && /*#__PURE__*/React.createElement(Sparkline, {
  data: spark,
  width: 80,
  height: 28
})));
const Card = ({
  title,
  action,
  children,
  padded = true,
  style = {}
}) => /*#__PURE__*/React.createElement("section", {
  className: "ff-card",
  style: style
}, (title || action) && /*#__PURE__*/React.createElement("header", {
  className: "ff-card__head"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-card__title"
}, title), action), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: padded ? 20 : 0
  }
}, children));

/* Filter chip row */
const ChipBar = ({
  items,
  value,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    flexWrap: 'wrap'
  }
}, items.map(it => /*#__PURE__*/React.createElement("button", {
  key: it.id,
  className: "ff-chip",
  "aria-pressed": value === it.id,
  onClick: () => onChange(it.id)
}, it.label, it.count !== undefined && /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--ff-fg-muted)'
  }
}, "\xB7 ", it.count))));
Object.assign(window, {
  Icon,
  Money,
  StatusBadge,
  Avatar,
  Sidebar,
  TopBar,
  PageHead,
  KpiTile,
  Card,
  ChipBar,
  ffGo,
  FF_PENDING
});