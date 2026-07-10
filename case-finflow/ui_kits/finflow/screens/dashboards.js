function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FinFlow Screens — Dashboards (Finance Admin, Manager, Employee) */

const FinanceDashboard = () => {
  const d = FF_DATA;
  const [compact, setCompact] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Workspace \xB7 Finance Admin",
    title: "Good morning, Marcus.",
    sub: "Spend across Reyonal \xB7 Fiscal week 22, FY 2026",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DensityToggle, {
      compact: compact,
      onToggle: () => setCompact(c => !c)
    }), /*#__PURE__*/React.createElement(RefreshButton, null), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 14
    }), " Export"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('report-build')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " New report"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--kpis"
  }, d.kpis.finance.map((k, i) => /*#__PURE__*/React.createElement(KpiTile, _extends({
    key: i
  }, k, {
    spark: i < 2 ? d.spendOverTime : null
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '2fr 1fr',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Spend over time",
    action: /*#__PURE__*/React.createElement("div", {
      className: "ff-segmented"
    }, /*#__PURE__*/React.createElement("button", null, "4W"), /*#__PURE__*/React.createElement("button", {
      "aria-pressed": "true"
    }, "12W"), /*#__PURE__*/React.createElement("button", null, "YTD"))
  }, /*#__PURE__*/React.createElement(LineChart, {
    data: d.spendOverTime,
    height: 260,
    unit: "$"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 12,
      fontSize: 12,
      color: 'var(--ff-fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 10,
      height: 10,
      background: 'var(--ff-chart-1)',
      borderRadius: 2,
      marginRight: 6
    }
  }), "Spend (K)"), /*#__PURE__*/React.createElement("span", {
    className: "ff-tnum"
  }, "Peak \xB7 $67.2K \xB7 W22"), /*#__PURE__*/React.createElement("span", {
    className: "ff-tnum"
  }, "Avg \xB7 $51.4K / wk"))), /*#__PURE__*/React.createElement(Card, {
    title: "Budget vs. spent",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ff-fg-muted)'
      }
    }, "FY26 \xB7 42% elapsed")
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '14px'
    }
  }, d.budgets.map((b, i) => /*#__PURE__*/React.createElement(BudgetBar, _extends({
    key: i
  }, b)))))), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1.4fr 1fr',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Pending approvals",
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "ff-row",
      style: {
        fontSize: 12,
        gap: 4
      },
      onClick: e => {
        e.preventDefault();
        ffGo('approvals');
      }
    }, "View all ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 12
    })),
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Merchant"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Submitted"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, d.expenses.filter(e => e.status === "pending" || e.status === "flagged").slice(0, 6).map(e => /*#__PURE__*/React.createElement("tr", {
    key: e.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-mono",
    style: {
      fontSize: 12
    }
  }, e.id)), /*#__PURE__*/React.createElement("td", null, e.merchant), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-row",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: e.who.split(' ').map(x => x[0]).join('').slice(0, 2)
  }), " ", e.who)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ff-fg-muted)',
      fontSize: 12
    }
  }, fmtDate(e.date)), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: e.amount
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status
  }))))))), /*#__PURE__*/React.createElement(Card, {
    title: "Spend by category",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ff-fg-muted)'
      }
    }, "YTD")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    data: d.categoryBreakdown.map(c => ({
      label: d.categories.find(x => x.id === c.cat).name,
      value: c.value
    })),
    size: 170,
    thickness: 22
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '8px'
    }
  }, d.categoryBreakdown.map((c, i) => {
    const cat = d.categories.find(x => x.id === c.cat);
    const total = d.categoryBreakdown.reduce((s, x) => s + x.value, 0);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-row",
      style: {
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        background: `var(--ff-chart-${i + 1})`,
        borderRadius: 2
      }
    }), cat.name), /*#__PURE__*/React.createElement("span", {
      className: "ff-tnum",
      style: {
        color: 'var(--ff-fg-muted)'
      }
    }, "$", c.value.toFixed(1), "K \xB7 ", (c.value / total * 100).toFixed(0), "%"));
  }))))), /*#__PURE__*/React.createElement(Card, {
    title: "Recent activity",
    style: {
      marginTop: 16
    },
    padded: false,
    action: /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--sm ff-btn--ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "funnel",
      size: 12
    }), " Filter")
  }, /*#__PURE__*/React.createElement("table", {
    className: `ff-table ${compact ? 'ff-table--compact' : ''}`
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Time"), /*#__PURE__*/React.createElement("th", null, "Actor"), /*#__PURE__*/React.createElement("th", null, "Action"), /*#__PURE__*/React.createElement("th", null, "Target"))), /*#__PURE__*/React.createElement("tbody", null, d.auditEntries.slice(0, 6).map((a, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ff-fg-muted)',
      fontSize: 12
    },
    className: "ff-tnum"
  }, a.ts), /*#__PURE__*/React.createElement("td", null, a.actor), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--neutral ff-badge--no-dot"
  }, a.action)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, a.target)))))));
};
const ManagerDashboard = () => {
  const d = FF_DATA;
  const pendingMine = d.expenses.filter(e => e.status === "pending" || e.status === "flagged");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Workspace \xB7 Manager",
    title: `${d.me.manager.name.split(' ')[0]}'s team — Sales`,
    sub: "8 direct reports \xB7 $48.2K spent this month \xB7 82% of monthly budget",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RefreshButton, null), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chats",
      size: 14
    }), " Message team"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('approvals')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-square",
      size: 14
    }), " Review ", pendingMine.length, " approvals"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--kpis"
  }, d.kpis.manager.map((k, i) => /*#__PURE__*/React.createElement(KpiTile, _extends({
    key: i
  }, k, {
    spark: i === 0 ? d.spendOverTime : null
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '2fr 1fr',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Team spend by member",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ff-fg-muted)'
      }
    }, "This month")
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: d.employees.map(e => ({
      cat: e.initials,
      value: e.spend / 1000
    })),
    height: 260,
    unit: "$",
    colorByIndex: false,
    color: "var(--ff-chart-1)"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Approvals queue",
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 12
      },
      onClick: e => {
        e.preventDefault();
        ffGo('approvals');
      }
    }, "Open queue"),
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '0',
      padding: '6px 0'
    }
  }, pendingMine.slice(0, 5).map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      padding: '12px 20px',
      borderBottom: '1px solid var(--ff-border)',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: e.who.split(' ').map(x => x[0]).join('').slice(0, 2)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, e.merchant), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, e.who, " \xB7 ", e.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-tnum",
    style: {
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Money, {
    value: e.amount
  })), /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--3",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Quick approve",
    action: /*#__PURE__*/React.createElement(Icon, {
      name: "lightning",
      size: 14
    })
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ff-fg-muted)',
      fontSize: 13,
      marginTop: 0
    }
  }, "Approve all pending under $100 with no policy flags."), (() => {
    const quick = pendingMine.filter(e => e.amount < 100 && e.policy === "ok");
    const quickTotal = quick.reduce((s, e) => s + e.amount, 0);
    return /*#__PURE__*/React.createElement("div", {
      className: "ff-row",
      style: {
        marginTop: 12,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary ff-btn--sm",
      onClick: () => ffGo('approvals')
    }, "Approve ", quick.length, " item", quick.length === 1 ? '' : 's', " \xB7 ", new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(quickTotal)), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--sm",
      onClick: () => ffGo('approvals')
    }, "Review first"));
  })()), /*#__PURE__*/React.createElement(Card, {
    title: "Budget snapshot"
  }, /*#__PURE__*/React.createElement(BudgetBar, {
    label: "Team \u2014 May",
    budget: 60,
    spent: 48.2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(BudgetBar, {
    label: "Travel \u2014 May",
    budget: 28,
    spent: 26.4
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Policy reminders"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 13,
      color: 'var(--ff-fg-muted)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "Hotel cap for domestic stays is ", /*#__PURE__*/React.createElement("strong", null, "$300/night")), /*#__PURE__*/React.createElement("li", null, "Per diem meals: ", /*#__PURE__*/React.createElement("strong", null, "$75/day")), /*#__PURE__*/React.createElement("li", null, "Anything over $500 in advertising \u2192 CMO sign-off")))));
};
const EmployeeDashboard = () => {
  const d = FF_DATA;
  const mine = d.expenses.filter(e => e.who === "Corey Anderson");
  const [compact, setCompact] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "My spend",
    title: `Hi, ${d.me.employee.name.split(' ')[0]}.`,
    sub: "Your expenses and reimbursements this month",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DensityToggle, {
      compact: compact,
      onToggle: () => setCompact(c => !c)
    }), /*#__PURE__*/React.createElement(RefreshButton, null), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn",
      onClick: () => ffGo('ocr')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload-simple",
      size: 14
    }), " Upload receipt"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('new-expense')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " New expense"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--kpis"
  }, d.kpis.employee.map((k, i) => /*#__PURE__*/React.createElement(KpiTile, _extends({
    key: i
  }, k)))), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1.5fr 1fr',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "My recent expenses",
    padded: false,
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 12
      },
      onClick: e => {
        e.preventDefault();
        ffGo('expenses');
      }
    }, "View all")
  }, /*#__PURE__*/React.createElement("table", {
    className: `ff-table ${compact ? 'ff-table--compact' : ''}`
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Merchant"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, mine.map(e => /*#__PURE__*/React.createElement("tr", {
    key: e.id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ff-fg-muted)'
    },
    className: "ff-tnum"
  }, e.date.slice(5)), /*#__PURE__*/React.createElement("td", null, e.merchant, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, e.memo)), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: e.amount
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '16px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "My virtual card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      borderRadius: 12,
      background: 'linear-gradient(135deg, var(--ff-teal-700), var(--ff-teal-900))',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      opacity: 0.75
    }
  }, "FinFlow \xB7 Virtual"), /*#__PURE__*/React.createElement("div", {
    className: "ff-mono",
    style: {
      fontSize: 18,
      letterSpacing: '0.12em'
    }
  }, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 9032"), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.7,
      textTransform: 'uppercase'
    }
  }, "Holder"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "Corey Anderson")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.7,
      textTransform: 'uppercase'
    }
  }, "Exp"), /*#__PURE__*/React.createElement("div", {
    className: "ff-mono",
    style: {
      fontSize: 13
    }
  }, "11/28"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 18
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    variant: "mark",
    size: 28,
    theme: "dark"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(BudgetBar, {
    label: "Used",
    budget: 5,
    spent: 2.69
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Reimbursement",
    action: /*#__PURE__*/React.createElement(StatusBadge, {
      status: "scheduled"
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-tnum",
    style: {
      fontFamily: 'var(--ff-font-sans)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.1,
      letterSpacing: '-0.025em'
    }
  }, "$320.40"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ff-fg-muted)',
      fontSize: 13,
      marginTop: 6
    }
  }, "RB-104 \xB7 Direct deposit \xB7 arrives May 30")))));
};
Object.assign(window, {
  FinanceDashboard,
  ManagerDashboard,
  EmployeeDashboard
});