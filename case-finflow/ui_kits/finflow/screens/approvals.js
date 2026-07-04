/* FinFlow Screens — Approvals, Reimbursements */

const ApprovalsQueue = () => {
  const d = FF_DATA;
  const items = d.expenses.filter(e => e.status === "pending" || e.status === "flagged");
  const selCount = Math.min(3, items.length);
  const selTotal = items.slice(0, selCount).reduce((s, e) => s + e.amount, 0);
  const fmtUSD = n => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(n);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Approvals",
    title: "Approvals queue",
    sub: `${items.length} items awaiting your review`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "funnel",
      size: 14
    }), " Filter"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--accent"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lightning",
      size: 14
    }), " Bulk approve (", items.length, ")"))
  }), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid var(--ff-border)',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      background: 'var(--ff-card-2)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ff-fg-muted)'
    }
  }, selCount, " selected · total ", fmtUSD(selTotal)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm"
  }, "Reject"), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm ff-btn--primary",
    onClick: () => ffGo('state-success')
  }, "Approve")), items.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    onClick: () => ffGo('approval-detail'),
    style: {
      padding: '16px 20px',
      borderBottom: i < items.length - 1 ? '1px solid var(--ff-border)' : '0',
      display: 'grid',
      gridTemplateColumns: 'auto 60px 1fr auto auto',
      gap: 16,
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: i < 3,
    onClick: ev => ev.stopPropagation()
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-receipt"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-font-mono)'
    }
  }, e.cardLast4)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("strong", null, e.merchant), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ff-fg-muted)'
    },
    className: "ff-mono"
  }, e.id), /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ff-fg-muted)',
      marginTop: 2
    }
  }, e.memo, " · ", e.who, " · ", e.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-font-sans)',
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: '-0.02em'
    },
    className: "ff-tnum"
  }, /*#__PURE__*/React.createElement(Money, {
    value: e.amount
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, d.categories.find(c => c.id === e.cat).name)), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    onClick: ev => ev.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--ghost ff-btn--sm"
  }, "Reject"), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--primary ff-btn--sm",
    onClick: () => ffGo('state-success')
  }, "Approve"))))));
};
const ApprovalDetail = () => /*#__PURE__*/React.createElement(ExpenseDetail, null); // Reuses expense detail for approval context

const ApprovalHistory = () => {
  const items = [{
    id: "EXP-2840",
    merchant: "Figma",
    who: "Mira Solberg",
    amount: 180.00,
    status: "approved",
    decided: "May 22 14:22",
    by: "Maren Okafor"
  }, {
    id: "EXP-2837",
    merchant: "AWS",
    who: "Dev Patel",
    amount: 3204.18,
    status: "approved",
    decided: "May 20 11:08",
    by: "Maren Okafor"
  }, {
    id: "EXP-2834",
    merchant: "Reforge",
    who: "Iris Chen",
    amount: 995.00,
    status: "approved",
    decided: "May 19 16:42",
    by: "Maren Okafor"
  }, {
    id: "EXP-2832",
    merchant: "Eventbrite",
    who: "Iris Chen",
    amount: 640.00,
    status: "rejected",
    decided: "May 18 17:30",
    by: "Maren Okafor"
  }, {
    id: "EXP-2828",
    merchant: "Slack",
    who: "Dev Patel",
    amount: 149.00,
    status: "approved",
    decided: "May 16 09:14",
    by: "Maren Okafor"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Approvals",
    title: "Approval history",
    sub: "Decisions you've made — past 30 days"
  }), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Merchant"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Decision"), /*#__PURE__*/React.createElement("th", null, "Decided at"), /*#__PURE__*/React.createElement("th", null, "By"))), /*#__PURE__*/React.createElement("tbody", null, items.map(e => /*#__PURE__*/React.createElement("tr", {
    key: e.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "ff-mono",
    style: {
      fontSize: 12
    }
  }, e.id), /*#__PURE__*/React.createElement("td", null, e.merchant), /*#__PURE__*/React.createElement("td", null, e.who), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: e.amount
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status
  })), /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum",
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, e.decided), /*#__PURE__*/React.createElement("td", null, e.by)))))));
};
const ReimbursementsList = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Reimbursements",
    title: "Payouts",
    sub: "Out-of-pocket expenses owed to employees",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 14
    }), " Export ACH file"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('schedule-payout')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-plus",
      size: 14
    }), " Schedule payout"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--kpis",
    style: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Owed this cycle",
    value: "$685.10",
    delta: "4 employees",
    trend: "neutral"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Scheduled",
    value: "$320.40",
    delta: "May 30",
    trend: "neutral"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Paid YTD",
    value: "$48,210",
    delta: "142 payouts",
    trend: "up"
  })), /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Employee"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Method"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, d.reimbursements.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "ff-mono",
    style: {
      fontSize: 12
    }
  }, r.id), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-row",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: r.who.split(' ').map(x => x[0]).join('').slice(0, 2)
  }), r.who)), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: r.amount
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: r.status
  })), /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum",
    style: {
      color: 'var(--ff-fg-muted)'
    }
  }, r.date), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ff-badge ff-badge--neutral ff-badge--no-dot"
  }, "ACH")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--ghost ff-btn--sm",
    onClick: () => ffGo('payout-detail')
  }, "View"))))))));
};
const PayoutDetail = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Reimbursement",
    title: "RB-104 — Iris Chen",
    sub: "Scheduled · arrives May 30, 2026",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--danger",
      onClick: () => ffGo('reimburse')
    }, "Cancel payout"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary"
    }, "Pay now"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Items in this payout",
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Expense"), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Office supplies — Staples", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "EXP-2820")), /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum"
  }, "May 12"), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: 48.20
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Mileage 84 mi @ $0.67", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "EXP-2826")), /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum"
  }, "May 15"), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: 56.28
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Client coffee — Sightglass", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "EXP-2829")), /*#__PURE__*/React.createElement("td", {
    className: "ff-tnum"
  }, "May 18"), /*#__PURE__*/React.createElement("td", {
    className: "ff-num"
  }, /*#__PURE__*/React.createElement(Money, {
    value: 215.92
  })))), /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--ff-card-2)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: "2",
    style: {
      textAlign: 'right',
      fontWeight: 600
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "ff-num",
    style: {
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Money, {
    value: 320.40
  })))))), /*#__PURE__*/React.createElement(Card, {
    title: "Payout method"
  }, /*#__PURE__*/React.createElement(DetailRow, {
    label: "Account"
  }, "Bank of Marin · •••• 8841"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Method"
  }, "ACH — same day"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Memo"
  }, "FinFlow · RB-104"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert ff-alert--info"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    weight: "fill"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__title"
  }, "Estimated arrival May 30"), /*#__PURE__*/React.createElement("div", null, "Cancel up until 2 hours before send."))))));
};
const SchedulePayout = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Reimbursements",
  title: "Schedule a payout",
  sub: "Choose employees and an arrival date"
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid",
  style: {
    gridTemplateColumns: '1.5fr 1fr',
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Card, {
  title: "Eligible items",
  padded: false
}, /*#__PURE__*/React.createElement("table", {
  className: "ff-table"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: true
})), /*#__PURE__*/React.createElement("th", null, "Employee"), /*#__PURE__*/React.createElement("th", {
  className: "ff-num"
}, "Owed"), /*#__PURE__*/React.createElement("th", null, "Items"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: true
})), /*#__PURE__*/React.createElement("td", null, "Iris Chen"), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: 320.40
})), /*#__PURE__*/React.createElement("td", null, "3")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: true
})), /*#__PURE__*/React.createElement("td", null, "Luna Park"), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: 82.00
})), /*#__PURE__*/React.createElement("td", null, "1")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  defaultChecked: true
})), /*#__PURE__*/React.createElement("td", null, "Dev Patel"), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: 218.50
})), /*#__PURE__*/React.createElement("td", null, "2")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
  type: "checkbox"
})), /*#__PURE__*/React.createElement("td", null, "Asa Brown"), /*#__PURE__*/React.createElement("td", {
  className: "ff-num"
}, /*#__PURE__*/React.createElement(Money, {
  value: 64.20
})), /*#__PURE__*/React.createElement("td", null, "1"))))), /*#__PURE__*/React.createElement(Card, {
  title: "Schedule"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-stack",
  style: {
    '--ff-stack-gap': '14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Arrival date"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input ff-tnum",
  defaultValue: "2026-05-30"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Funding source"), /*#__PURE__*/React.createElement("select", {
  className: "ff-select"
}, /*#__PURE__*/React.createElement("option", null, "Mercury · Operating ·  •••• 5512"))), /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, "Memo"), /*#__PURE__*/React.createElement("input", {
  className: "ff-input",
  defaultValue: "FinFlow · May 2026"
})), /*#__PURE__*/React.createElement("div", {
  className: "ff-card ff-card--flat",
  style: {
    background: 'var(--ff-card-2)',
    padding: 14,
    marginTop: 6
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("span", null, "3 payouts"), /*#__PURE__*/React.createElement("span", {
  className: "ff-tnum"
}, "$620.90")), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    fontSize: 13,
    color: 'var(--ff-fg-muted)'
  }
}, /*#__PURE__*/React.createElement("span", null, "ACH fee"), /*#__PURE__*/React.createElement("span", {
  className: "ff-tnum"
}, "$0.00")), /*#__PURE__*/React.createElement("hr", {
  className: "ff-divider",
  style: {
    margin: '10px 0'
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between',
    fontWeight: 600
  }
}, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
  className: "ff-tnum"
}, "$620.90"))), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary ff-btn--lg",
  style: {
    width: '100%'
  },
  onClick: () => ffGo('state-confirm')
}, "Schedule 3 payouts")))));
Object.assign(window, {
  ApprovalsQueue,
  ApprovalDetail,
  ApprovalHistory,
  ReimbursementsList,
  PayoutDetail,
  SchedulePayout
});

