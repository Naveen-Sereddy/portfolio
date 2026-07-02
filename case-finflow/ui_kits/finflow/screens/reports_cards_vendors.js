/* FinFlow Screens — Reports, Cards, Vendors */

const ReportsHome = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Reports",
    title: "Reports",
    sub: "Saved reports and finance close packets",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "folder-open",
      size: 14
    }), " Saved"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " Build report"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--kpis"
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "YTD Spend",
    value: "$553.0K",
    delta: "+18.4% YoY",
    trend: "up",
    spark: d.spendOverTime
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Burn Rate",
    value: "$108.6K",
    delta: "May avg, monthly",
    trend: "down"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Top Vendor",
    value: "AWS",
    delta: "$41.3K \xB7 7.5% of YTD",
    trend: "neutral"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Open Reports",
    value: "6",
    delta: "2 due this week",
    trend: "neutral"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1fr 1fr',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Cumulative spend \u2014 FY26",
    action: /*#__PURE__*/React.createElement("span", {
      className: "ff-row",
      style: {
        gap: 8,
        fontSize: 12,
        color: 'var(--ff-fg-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        background: 'var(--ff-chart-1)',
        borderRadius: 2
      }
    }), "Plan \xB7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        background: 'var(--ff-chart-2)',
        borderRadius: 2
      }
    }), "Actual")
  }, /*#__PURE__*/React.createElement(AreaChart, {
    data: d.cumulative,
    height: 220,
    unit: "$"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Top vendors \u2014 YTD",
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Vendor"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "\u0394"))), /*#__PURE__*/React.createElement("tbody", null, d.vendors.slice(0, 6).map(v => /*#__PURE__*/React.createElement("tr", {
    key: v.id
  }, /*#__PURE__*/React.createElement("td", null, v.name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--neutral ff-badge--no-dot"
  }, d.categories.find(c => c.id === v.cat).name)), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: v.spend
  })), /*#__PURE__*/React.createElement("td", {
    className: "ff-num",
    style: {
      color: v.change > 0 ? 'var(--ff-rejected)' : v.change < 0 ? 'var(--ff-approved)' : 'var(--ff-fg-muted)'
    }
  }, v.change > 0 ? '+' : '', v.change.toFixed(1), "%"))))))), /*#__PURE__*/React.createElement(Card, {
    title: "Saved reports",
    style: {
      marginTop: 16
    },
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Schedule"), /*#__PURE__*/React.createElement("th", null, "Last run"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, [["Monthly close packet", "Maren O.", "Monthly · 1st", "May 1, 6:00 AM"], ["Travel by team", "Maren O.", "Weekly · Mon", "May 19, 8:00 AM"], ["Software vendors over $1K", "Dev P.", "Quarterly", "Apr 1, 6:00 AM"], ["Marketing spend by campaign", "Iris C.", "Manual", "May 20, 2:14 PM"]].map(([n, o, s, l], i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, n)), /*#__PURE__*/React.createElement("td", null, o), /*#__PURE__*/React.createElement("td", null, s), /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum",
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm ff-btn--ghost"
  }, "Run"))))))));
};
const ReportBuilder = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Reports \xB7 Build",
  title: "Untitled report",
  sub: "Drag dimensions and measures, then save",
  actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn"
  }, "Discard"), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "floppy-disk",
    size: 14
  }), " Save report"))
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid",
  style: {
    gridTemplateColumns: '260px 1fr 280px',
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Card, {
  title: "Fields"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-eyebrow",
  style: {
    margin: '6px 0'
  }
}, "Dimensions"), ["Category", "Vendor", "Owner", "Team", "Project", "Date"].map(x => /*#__PURE__*/React.createElement("div", {
  key: x,
  className: "ff-nav-item",
  style: {
    cursor: 'grab'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "dots-six-vertical",
  size: 14
}), x)), /*#__PURE__*/React.createElement("div", {
  className: "ff-eyebrow",
  style: {
    margin: '16px 0 6px'
  }
}, "Measures"), ["Amount", "Count", "Avg per item", "Median", "% of budget"].map(x => /*#__PURE__*/React.createElement("div", {
  key: x,
  className: "ff-nav-item",
  style: {
    cursor: 'grab'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "dots-six-vertical",
  size: 14
}), x))), /*#__PURE__*/React.createElement(Card, {
  title: "Preview"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 8,
    marginBottom: 16,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "ff-chip",
  "aria-pressed": "true"
}, "Rows: Category"), /*#__PURE__*/React.createElement("span", {
  className: "ff-chip",
  "aria-pressed": "true"
}, "Columns: Month"), /*#__PURE__*/React.createElement("span", {
  className: "ff-chip",
  "aria-pressed": "true"
}, "Measure: Sum(amount)"), /*#__PURE__*/React.createElement("span", {
  className: "ff-chip"
}, "Filter: Last 90 days")), /*#__PURE__*/React.createElement(BarChart, {
  data: FF_DATA.categoryBreakdown.map(c => ({
    cat: FF_DATA.categories.find(x => x.id === c.cat).name,
    value: c.value
  })),
  height: 260,
  unit: "$"
})), /*#__PURE__*/React.createElement(Card, {
  title: "Options"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '12px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Report name"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "Spend by category (last 90d)"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Schedule"), /*#__PURE__*/React.createElement("select", {
  className: "ff-select"
}, /*#__PURE__*/React.createElement("option", null, "Weekly \xB7 Monday 8am"), /*#__PURE__*/React.createElement("option", null, "Monthly"), /*#__PURE__*/React.createElement("option", null, "Manual"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("span", null, "Email me each run"), /*#__PURE__*/React.createElement("span", {
  className: "ff-switch",
  role: "switch",
  "aria-checked": "true"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("span", null, "Share with team"), /*#__PURE__*/React.createElement("span", {
  className: "ff-switch",
  role: "switch",
  "aria-checked": "false"
}))))));
const SavedReport = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Report",
    title: "Monthly close packet \u2014 April FY26",
    sub: "Generated May 1 \xB7 Owned by Maren Okafor",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-clockwise",
      size: 14
    }), " Re-run"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "share-network",
      size: 14
    }), " Share"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 14
    }), " Export PDF"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--kpis"
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Total spend",
    value: "$348.0K",
    delta: "+9% vs Mar",
    trend: "up"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Reimbursed",
    value: "$42.1K",
    delta: "142 payouts",
    trend: "up"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Variance vs plan",
    value: "\u22122.4%",
    delta: "Under by $8.6K",
    trend: "up"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Top category",
    value: "Software",
    delta: "$184.2K \xB7 33%",
    trend: "neutral"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1.4fr 1fr',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Spend by week"
  }, /*#__PURE__*/React.createElement(LineChart, {
    data: d.spendOverTime,
    height: 240,
    unit: "$"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "By category"
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: d.categoryBreakdown.map(c => ({
      cat: d.categories.find(x => x.id === c.cat).name.slice(0, 4),
      value: c.value
    })),
    height: 240,
    unit: "$"
  }))));
};
const ExportReport = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Export",
  title: "Export report",
  sub: "Choose format and recipients"
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid",
  style: {
    gridTemplateColumns: '1fr 1fr',
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Format"), /*#__PURE__*/React.createElement("div", {
  className: "ff-segmented",
  style: {
    width: 'fit-content'
  }
}, /*#__PURE__*/React.createElement("button", {
  "aria-pressed": "true"
}, "PDF"), /*#__PURE__*/React.createElement("button", null, "CSV"), /*#__PURE__*/React.createElement("button", null, "XLSX"), /*#__PURE__*/React.createElement("button", null, "QBO"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Date range"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "2026-04-01 \u2192 2026-04-30"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Include"), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    gap: 16
  }
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: true
}), " Charts"), /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: true
}), " Line-items"), /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox"
}), " Receipt images"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Email to"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "maren@arcadialabs.co, board@arcadialabs.co"
})))), /*#__PURE__*/React.createElement(Card, {
  title: "Preview"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: '8.5/11',
    background: '#fff',
    border: '1px solid var(--ff-border)',
    borderRadius: 6,
    boxShadow: 'var(--ff-shadow-md)',
    padding: '20px 18px',
    color: '#15131A',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: 11
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-font-sans)',
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: '-0.02em'
  }
}, "FinFlow \xB7 Monthly Close \u2014 April FY26"), /*#__PURE__*/React.createElement("div", {
  style: {
    color: '#888'
  }
}, "Arcadia Labs \xB7 Generated May 1, 2026"), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 60,
    background: 'var(--ff-chart-1)',
    opacity: 0.2,
    borderRadius: 4,
    marginTop: 8
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 6
  }
}, ["$348K", "$42K", "−2.4%", "6/6"].map((x, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    padding: '6px 8px',
    background: '#F7F4EE',
    borderRadius: 3
  }
}, x))), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: 'right',
    color: '#888'
  }
}, "Page 1 of 4")))));
const CardsList = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Cards",
    title: "Corporate cards",
    sub: `${d.cards.length} cards · ${d.cards.filter(c => c.status === 'active').length} active`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 14
    }), " Statement"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " Issue card"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, d.cards.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "ff-card",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      color: '#FBF5E8',
      background: c.status === 'frozen' ? 'linear-gradient(135deg, oklch(0.40 0.02 340), oklch(0.30 0.02 340))' : 'linear-gradient(135deg, var(--ff-plum-700), var(--ff-plum-900))',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      opacity: 0.7
    }
  }, c.type === "virtual" ? "Virtual" : "Physical"), /*#__PURE__*/React.createElement(BrandMark, {
    variant: "mark",
    size: 22,
    theme: "dark"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-mono",
    style: {
      fontSize: 15,
      letterSpacing: '0.1em'
    }
  }, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ", c.last4), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      opacity: 0.7,
      textTransform: 'uppercase'
    }
  }, "Holder"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12
    }
  }, c.holder)), c.status === 'frozen' && /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--no-dot",
    style: {
      background: 'rgba(255,255,255,0.15)',
      color: '#FBF5E8'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "snowflake",
    size: 11
  }), " Frozen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(BudgetBar, {
    label: "Used this month",
    budget: c.limit / 1000,
    spent: c.spent / 1000
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      marginTop: 14,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm",
    style: {
      flex: 1
    }
  }, "View"), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm"
  }, c.status === 'frozen' ? 'Unfreeze' : 'Freeze')))))));
};
const CardDetail = () => {
  const d = FF_DATA;
  const c = d.cards[2]; // Luna Park's card
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: `Card · ${c.type}`,
    title: `•••• ${c.last4}`,
    sub: `${c.holder} · issued Jan 2024`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "snowflake",
      size: 14
    }), " Freeze"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 14
    }), " Edit limits"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--danger"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 14
    }), " Cancel card"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "This card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px',
      borderRadius: 12,
      background: 'linear-gradient(135deg, var(--ff-plum-700), var(--ff-plum-900))',
      color: '#FBF5E8'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      opacity: 0.7
    }
  }, "Physical"), /*#__PURE__*/React.createElement(BrandMark, {
    variant: "mark",
    size: 28,
    theme: "dark"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-mono",
    style: {
      fontSize: 20,
      letterSpacing: '0.12em',
      margin: '16px 0'
    }
  }, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ", c.last4), /*#__PURE__*/React.createElement("div", {
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
  }, "Holder"), /*#__PURE__*/React.createElement("div", null, c.holder)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.7,
      textTransform: 'uppercase'
    }
  }, "Exp"), /*#__PURE__*/React.createElement("div", {
    className: "ff-mono"
  }, "03/27")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.7,
      textTransform: 'uppercase'
    }
  }, "CVV"), /*#__PURE__*/React.createElement("div", {
    className: "ff-mono"
  }, "\u2022\u2022\u2022")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(BudgetBar, {
    label: "Used this month",
    budget: c.limit / 1000,
    spent: c.spent / 1000
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '10px'
    }
  }, /*#__PURE__*/React.createElement(SettingRow, {
    label: "Monthly limit",
    value: "$10,000"
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Per-transaction",
    value: "$2,500"
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Allowed categories",
    value: "Travel, Meals"
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "International",
    value: "Allowed"
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "ATM withdrawals",
    value: "Disabled"
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Cardholder PIN",
    value: "Set"
  })))), /*#__PURE__*/React.createElement(Card, {
    title: "Recent transactions",
    style: {
      marginTop: 16
    },
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Merchant"), /*#__PURE__*/React.createElement("th", null, "Memo"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, d.expenses.filter(e => e.cardLast4 === c.last4).map(e => /*#__PURE__*/React.createElement("tr", {
    key: e.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum",
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, e.date), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, e.merchant)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, e.memo), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: e.amount
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status
  }))))))));
};
const SettingRow = ({
  label,
  value
}) => /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    fontSize: 13,
    padding: '8px 0',
    borderBottom: '1px solid var(--ff-border)'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--ff-fg-muted)'
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 500
  }
}, value));
const IssueCard = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Cards",
  title: "Issue a new card",
  sub: "Virtual cards are ready instantly. Physical cards arrive in 5\u20137 days."
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid",
  style: {
    gridTemplateColumns: '1.4fr 1fr',
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Card type"), /*#__PURE__*/React.createElement("div", {
  className: "ff-segmented"
}, /*#__PURE__*/React.createElement("button", {
  "aria-pressed": "true"
}, "Virtual"), /*#__PURE__*/React.createElement("button", null, "Physical"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Cardholder"), /*#__PURE__*/React.createElement("select", {
  className: "ff-select"
}, /*#__PURE__*/React.createElement("option", null, "Iris Chen \u2014 Marketing"), /*#__PURE__*/React.createElement("option", null, "Dev Patel \u2014 Eng"), /*#__PURE__*/React.createElement("option", null, "Vendor card (no holder)"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid ff-grid--2"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Monthly limit"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "5,000"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Per-transaction"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "2,500"
}))), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Allowed categories"), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    flexWrap: 'wrap'
  }
}, FF_DATA.categories.map((c, i) => /*#__PURE__*/React.createElement("span", {
  key: c.id,
  className: "ff-chip",
  "aria-pressed": i < 3
}, c.name)))), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 500
  }
}, "Notify on each charge"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--ff-fg-muted)'
  }
}, "Email + Slack")), /*#__PURE__*/React.createElement("span", {
  className: "ff-switch",
  role: "switch",
  "aria-checked": "true"
})))), /*#__PURE__*/React.createElement(Card, {
  title: "Preview"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '24px',
    borderRadius: 12,
    background: 'linear-gradient(135deg, var(--ff-plum-700), var(--ff-plum-900))',
    color: '#FBF5E8'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    opacity: 0.7
  }
}, "Virtual \xB7 New"), /*#__PURE__*/React.createElement(BrandMark, {
  variant: "mark",
  size: 26,
  theme: "dark"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-mono",
  style: {
    fontSize: 18,
    letterSpacing: '0.12em',
    margin: '18px 0'
  }
}, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"), /*#__PURE__*/React.createElement("div", {
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
}, "Iris Chen")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 10,
    opacity: 0.7,
    textTransform: 'uppercase'
  }
}, "Limit"), /*#__PURE__*/React.createElement("div", {
  className: "ff-tnum",
  style: {
    fontSize: 13
  }
}, "$5,000")))), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary ff-btn--lg",
  style: {
    width: '100%',
    marginTop: 16
  }
}, "Issue card"))));
const FreezeCardModal = ({
  onClose
}) => /*#__PURE__*/React.createElement("div", {
  className: "ff-modal-backdrop",
  onClick: onClose
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-modal",
  onClick: e => e.stopPropagation()
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-modal__head"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-modal__title"
}, "Freeze card \xB7 \u2022\u2022\u2022\u2022 4112"), /*#__PURE__*/React.createElement("div", {
  className: "ff-modal__sub"
}, "Luna Park will not be able to charge this card until unfrozen.")), /*#__PURE__*/React.createElement("div", {
  className: "ff-modal__body"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Reason (optional)"), /*#__PURE__*/React.createElement("textarea", {
  className: "ff-textarea",
  placeholder: "e.g. Suspicious activity, off-policy charge\u2026"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    marginTop: 12,
    gap: 16
  }
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox"
}), " Notify cardholder"), /*#__PURE__*/React.createElement("label", {
  className: "ff-row",
  style: {
    gap: 6,
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: true
}), " Add to audit log"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-modal__foot"
}, /*#__PURE__*/React.createElement("button", {
  className: "ff-btn",
  onClick: onClose
}, "Cancel"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary"
}, "Freeze card"))));
const VendorsList = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Vendors",
    title: "Vendor directory",
    sub: `${d.vendors.length} vendors active YTD`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload-simple",
      size: 14
    }), " Import W-9s"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " Add vendor"))
  }), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Vendor"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "YTD spend"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "\u0394 vs Q1"), /*#__PURE__*/React.createElement("th", null, "Top owner"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, d.vendors.map(v => /*#__PURE__*/React.createElement("tr", {
    key: v.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "vendor-", v.id.slice(1).padStart(4, '0'), "@arcadialabs.co")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--neutral ff-badge--no-dot"
  }, d.categories.find(c => c.id === v.cat).name)), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: v.spend
  })), /*#__PURE__*/React.createElement("td", {
    className: "ff-num",
    style: {
      color: v.change > 0 ? 'var(--ff-rejected)' : v.change < 0 ? 'var(--ff-approved)' : 'var(--ff-fg-muted)'
    }
  }, v.change > 0 ? '+' : '', v.change.toFixed(1), "%"), /*#__PURE__*/React.createElement("td", null, "Maren O."), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--approved ff-badge--no-dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " W-9 on file"))))))));
};
const VendorDetail = () => {
  const d = FF_DATA;
  const v = d.vendors[1];
  // Build a vendor-specific spend over time
  const vendorTrend = d.spendOverTime.map((p, i) => ({
    w: p.w,
    v: Math.round((p.v * 0.7 + i * 1.4) * 10) / 10
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Vendor",
    title: v.name,
    sub: "EIN 47-2210331 \xB7 Tax type C-Corp \xB7 Net-30",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "paperclip",
      size: 14
    }), " Contracts"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "envelope",
      size: 14
    }), " Message"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary"
    }, "Pay vendor"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--kpis"
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "YTD Spend",
    value: `$${(v.spend / 1000).toFixed(1)}K`,
    delta: `${v.change > 0 ? '+' : ''}${v.change}% vs Q1`,
    trend: v.change > 0 ? "down" : "up"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Transactions",
    value: "38",
    delta: "3 this week",
    trend: "neutral"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Avg invoice",
    value: "$1,086",
    delta: "\u22124% vs Q1",
    trend: "up"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Open invoices",
    value: "2",
    delta: "Both within 30d",
    trend: "neutral"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Spend over time",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(LineChart, {
    data: vendorTrend,
    height: 220,
    unit: "$"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Recent transactions",
    style: {
      marginTop: 16
    },
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Memo"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, [["2026-05-20", "Monthly infra", "Dev Patel", 3204.18, "approved"], ["2026-04-22", "Monthly infra", "Dev Patel", 3018.40, "approved"], ["2026-03-21", "Monthly infra", "Dev Patel", 2964.22, "approved"]].map(([dt, m, w, a, s], i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum",
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, dt), /*#__PURE__*/React.createElement("td", null, m), /*#__PURE__*/React.createElement("td", null, w), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: a
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: s
  }))))))));
};
Object.assign(window, {
  ReportsHome,
  ReportBuilder,
  SavedReport,
  ExportReport,
  CardsList,
  CardDetail,
  IssueCard,
  FreezeCardModal,
  VendorsList,
  VendorDetail
});