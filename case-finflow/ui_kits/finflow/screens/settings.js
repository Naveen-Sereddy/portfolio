/* FinFlow Screens — Settings (profile, security, team, policies, integrations, billing, notifications) */

const SettingsShell = ({
  active,
  setActive,
  children
}) => {
  const tabs = [{
    id: "profile",
    label: "Profile",
    icon: "user"
  }, {
    id: "security",
    label: "Security",
    icon: "shield-check"
  }, {
    id: "team",
    label: "Team & roles",
    icon: "users-three"
  }, {
    id: "policies",
    label: "Policies",
    icon: "scales"
  }, {
    id: "integrations",
    label: "Integrations",
    icon: "plugs"
  }, {
    id: "billing",
    label: "Billing",
    icon: "credit-card"
  }, {
    id: "notif-prefs",
    label: "Notifications",
    icon: "bell"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Settings",
    title: "Workspace settings",
    sub: "Manage your Arcadia Labs workspace"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '220px 1fr',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '2px'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("a", {
    key: t.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setActive(t.id);
    },
    className: "ff-nav-item",
    "aria-current": active === t.id ? "page" : undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 16
  }), t.label))), /*#__PURE__*/React.createElement("div", null, children)));
};
const SettingsProfile = () => /*#__PURE__*/React.createElement(Card, {
  title: "Profile"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 18,
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: "MO",
  size: "xl"
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 18,
    fontWeight: 600
  }
}, "Maren Okafor"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--ff-fg-muted)'
  }
}, "Director of Finance \xB7 Joined Mar 2023"), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    marginTop: 10,
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--sm"
}, "Upload photo"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--sm ff-btn--ghost"
}, "Remove")))), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid ff-grid--2",
  style: {
    gap: '14px 18px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Full name"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "Maren Okafor"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Preferred name"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "Maren"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Title"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "Director of Finance"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Department"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "Finance"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Work email"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "maren@arcadialabs.co"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Time zone"), /*#__PURE__*/React.createElement("select", {
  className: "ff-select"
}, /*#__PURE__*/React.createElement("option", null, "America/Los_Angeles"), /*#__PURE__*/React.createElement("option", null, "America/New_York"), /*#__PURE__*/React.createElement("option", null, "UTC")))), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    marginTop: 20,
    justifyContent: 'flex-end',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, "Cancel"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary"
}, "Save")));
const SettingsSecurity = () => /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '16px'
  }
}, /*#__PURE__*/React.createElement(Card, {
  title: "Two-factor authentication"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 500
  }
}, "Authenticator app \xB7 enabled"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--ff-fg-muted)'
  }
}, "Last used May 22, 9:04 AM")), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, "Reconfigure")), /*#__PURE__*/React.createElement("hr", {
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
}, "Hardware key (YubiKey)"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--ff-fg-muted)'
  }
}, "Not configured")), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary"
}, "Add key"))), /*#__PURE__*/React.createElement(Card, {
  title: "Active sessions",
  padded: false
}, /*#__PURE__*/React.createElement("table", {
  className: "ff-table"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Device"), /*#__PURE__*/React.createElement("th", null, "Location"), /*#__PURE__*/React.createElement("th", null, "Last active"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Icon, {
  name: "laptop",
  size: 14
}), " MacBook Pro \xB7 Chrome 128"), /*#__PURE__*/React.createElement("td", null, "San Francisco, CA"), /*#__PURE__*/React.createElement("td", {
  className: "ff-tnum"
}, "Now"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
  className: "ff-badge ff-badge--approved ff-badge--no-dot"
}, "Current"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Icon, {
  name: "device-mobile",
  size: 14
}), " iPhone 15 \xB7 FinFlow iOS"), /*#__PURE__*/React.createElement("td", null, "San Francisco, CA"), /*#__PURE__*/React.createElement("td", {
  className: "ff-tnum"
}, "2h ago"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--ghost ff-btn--sm"
}, "Revoke"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Icon, {
  name: "laptop",
  size: 14
}), " Windows \xB7 Edge 128"), /*#__PURE__*/React.createElement("td", null, "Austin, TX (VPN)"), /*#__PURE__*/React.createElement("td", {
  className: "ff-tnum"
}, "3d ago"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--ghost ff-btn--sm"
}, "Revoke")))))), /*#__PURE__*/React.createElement(Card, {
  title: "API keys",
  action: /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm"
  }, "+ New key")
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 500
  },
  className: "ff-mono"
}, "ff_live_\u2022\u2022\u2022\u202291kx"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--ff-fg-muted)'
  }
}, "QuickBooks sync \xB7 created Apr 2")), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--sm ff-btn--ghost"
}, "Rotate"))));
const SettingsTeam = () => /*#__PURE__*/React.createElement(Card, {
  title: "Team & roles",
  padded: false,
  action: /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm ff-btn--primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: 12
  }), " Invite")
}, /*#__PURE__*/React.createElement("table", {
  className: "ff-table"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Role"), /*#__PURE__*/React.createElement("th", null, "Last active"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, [["Maren Okafor", "Finance Admin", "maren@arcadialabs.co", "Now"], ["Theo Vasquez", "Manager", "theo@arcadialabs.co", "12m"], ["Iris Chen", "Employee", "iris@arcadialabs.co", "2h"], ["Luna Park", "Employee", "luna@arcadialabs.co", "4h"], ["Dev Patel", "Employee", "dev@arcadialabs.co", "Yesterday"], ["Mira Solberg", "Employee", "mira@arcadialabs.co", "2d"], ["Asa Brown", "Auditor", "asa@arcadialabs.co", "1w"]].map(([n, role, em, la], i) => /*#__PURE__*/React.createElement("tr", {
  key: i
}, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
  className: "ff-row",
  style: {
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: n.split(' ').map(x => x[0]).join('').slice(0, 2)
}), n)), /*#__PURE__*/React.createElement("td", {
  style: {
    color: 'var(--ff-fg-muted)'
  }
}, em), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
  className: "ff-badge ff-badge--plum ff-badge--no-dot"
}, role)), /*#__PURE__*/React.createElement("td", {
  className: "ff-tnum",
  style: {
    color: 'var(--ff-fg-muted)'
  }
}, la), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--ghost ff-btn--sm"
}, "Edit")))))));
const SettingsPolicies = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(Card, {
    title: "Policies",
    action: /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--sm ff-btn--primary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 12
    }), " New policy"),
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Policy"), /*#__PURE__*/React.createElement("th", null, "Limit / rule"), /*#__PURE__*/React.createElement("th", null, "Scope"), /*#__PURE__*/React.createElement("th", null, "Last edited"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, d.policies.map((p, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, p.name)), /*#__PURE__*/React.createElement("td", null, p.limit), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--neutral ff-badge--no-dot"
  }, p.scope)), /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum",
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, p.lastEdit), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--ghost ff-btn--sm"
  }, "Edit")))))));
};
const SettingsIntegrations = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--3"
  }, d.integrations.map((i, k) => /*#__PURE__*/React.createElement(Card, {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'var(--ff-card-2)',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid var(--ff-border)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "Last sync \xB7 ", i.lastSync))), i.status === "connected" ? /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--approved ff-badge--no-dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " Connected") : /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--neutral ff-badge--no-dot"
  }, "Available")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 14px',
      fontSize: 13,
      color: 'var(--ff-fg-muted)'
    }
  }, {
    "QuickBooks": "Sync expenses, vendors, and reimbursements to QuickBooks Online.",
    "Mercury": "Pull statements; fund reimbursements from operating account.",
    "Brex": "Import card transactions and statements automatically.",
    "NetSuite": "Sync to NetSuite GL for monthly close.",
    "Slack": "Approve and review expenses inline in Slack.",
    "Okta SSO": "Single sign-on with SCIM provisioning."
  }[i.name]), /*#__PURE__*/React.createElement("button", {
    className: `ff-btn ff-btn--sm ${i.status === "connected" ? "" : "ff-btn--primary"}`,
    style: {
      width: '100%'
    }
  }, i.status === "connected" ? "Manage" : "Connect"))));
};
const SettingsBilling = () => /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '16px'
  }
}, /*#__PURE__*/React.createElement(Card, {
  title: "Plan"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-font-sans)',
    fontWeight: 600,
    fontSize: 24,
    letterSpacing: '-0.025em'
  }
}, "FinFlow Scale"), /*#__PURE__*/React.createElement("div", {
  style: {
    color: 'var(--ff-fg-muted)',
    fontSize: 13,
    marginTop: 4
  }
}, "$15 / user / month \xB7 billed annually"), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 6,
    marginTop: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "ff-badge ff-badge--approved ff-badge--no-dot"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 12
}), " Active"), /*#__PURE__*/React.createElement("span", {
  className: "ff-badge ff-badge--neutral ff-badge--no-dot"
}, "Renews Jan 14, 2027"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, "Compare plans"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary",
  style: {
    marginLeft: 8
  }
}, "Add seats")))), /*#__PURE__*/React.createElement(Card, {
  title: "Payment method"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 40,
    height: 28,
    borderRadius: 4,
    background: 'var(--ff-plum-700)'
  }
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 500
  },
  className: "ff-mono"
}, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--ff-fg-muted)'
  }
}, "Visa \xB7 expires 11/27"))), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn"
}, "Update"))), /*#__PURE__*/React.createElement(Card, {
  title: "Invoices",
  padded: false
}, /*#__PURE__*/React.createElement("table", {
  className: "ff-table"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Invoice"), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
  className: "ff-num"
}, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, [["INV-2026-005", "May 14", 3720, "paid"], ["INV-2026-004", "Apr 14", 3720, "paid"], ["INV-2026-003", "Mar 14", 3525, "paid"]].map(([id, dt, a, s], i) => /*#__PURE__*/React.createElement("tr", {
  key: i
}, /*#__PURE__*/React.createElement("td", {
  className: "ff-mono",
  style: {
    fontSize: 12
  }
}, id), /*#__PURE__*/React.createElement("td", null, dt), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: a
})), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
  status: s
})), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--ghost ff-btn--sm"
}, "PDF"))))))));
const SettingsNotifPrefs = () => /*#__PURE__*/React.createElement(Card, {
  title: "Notification preferences"
}, [["Expense submitted to me", true, true, false], ["Policy flag on my expense", true, true, true], ["Approval decision", true, false, true], ["Reimbursement scheduled", true, true, false], ["Weekly digest", true, false, false], ["Card transaction over $250", true, true, true]].map(([label, em, sl, push], i, arr) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "ff-row",
  style: {
    padding: '12px 0',
    borderBottom: i < arr.length - 1 ? '1px solid var(--ff-border)' : '0'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, label), /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 12,
    minWidth: 80
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: em
}), " Email"), /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 12,
    minWidth: 80
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: sl
}), " Slack"), /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 12,
    minWidth: 80
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: push
}), " Push"))));
Object.assign(window, {
  SettingsShell,
  SettingsProfile,
  SettingsSecurity,
  SettingsTeam,
  SettingsPolicies,
  SettingsIntegrations,
  SettingsBilling,
  SettingsNotifPrefs
});