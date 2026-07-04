/* FinFlow Screens — Expenses (list, detail, new, OCR review, flagged, import) */

const ExpenseList = () => {
  const d = FF_DATA;
  const [status, setStatus] = React.useState("all");
  const [cat, setCat] = React.useState("all");
  const [q, setQ] = React.useState("");
  const query = q.trim().toLowerCase();
  const filtered = d.expenses.filter(e => (status === "all" || e.status === status) && (cat === "all" || e.cat === cat) && (query === "" || [e.merchant, e.memo, e.who, e.id].some(f => f.toLowerCase().includes(query))));
  const total = filtered.reduce((s, e) => s + e.amount, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Expenses",
    title: "All expenses",
    sub: `${filtered.length} items · total ${new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(total)}`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn",
      onClick: () => ffGo('import')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload-simple",
      size: 14
    }), " Import CSV"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 14
    }), " Export"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('new-expense')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " New expense"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 14,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ChipBar, {
    items: [{
      id: "all",
      label: "All",
      count: d.expenses.length
    }, {
      id: "pending",
      label: "Pending",
      count: d.expenses.filter(e => e.status === "pending").length
    }, {
      id: "approved",
      label: "Approved",
      count: d.expenses.filter(e => e.status === "approved").length
    }, {
      id: "flagged",
      label: "Flagged",
      count: d.expenses.filter(e => e.status === "flagged").length
    }, {
      id: "rejected",
      label: "Rejected",
      count: d.expenses.filter(e => e.status === "rejected").length
    }],
    value: status,
    onChange: setStatus
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-search",
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "magnifying-glass",
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search expenses…",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("select", {
    className: "ff-select",
    style: {
      width: 140
    },
    value: cat,
    onChange: e => setCat(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "All categories"), d.categories.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.name))), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-blank",
    size: 14
  }), " May 2026"))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "ff-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 32
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    "aria-label": "Select all"
  })), /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Merchant / memo"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    className: "ff-num"
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(e => {
    const cat = d.categories.find(c => c.id === e.cat);
    return /*#__PURE__*/React.createElement("tr", {
      key: e.id,
      onClick: () => ffGo('expense-detail'),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("td", {
      onClick: ev => ev.stopPropagation()
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "ff-mono",
      style: {
        fontSize: 12,
        color: 'var(--ff-fg-muted)'
      }
    }, e.id)), /*#__PURE__*/React.createElement("td", {
      className: "ff-tnum",
      style: {
        color: 'var(--ff-fg-muted)',
        fontSize: 12
      }
    }, e.date), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500
      }
    }, e.merchant), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ff-fg-muted)'
      }
    }, e.memo)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "ff-row",
      style: {
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: e.who.split(' ').map(x => x[0]).join('').slice(0, 2)
    }), e.who)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "ff-badge ff-badge--neutral ff-badge--no-dot"
    }, cat.name)), /*#__PURE__*/React.createElement("td", {
      className: "ff-num"
    }, /*#__PURE__*/React.createElement(Money, {
      value: e.amount
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
      status: e.status
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--ghost ff-btn--sm ff-btn--icon"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dots-three",
      size: 16
    }))));
  })))));
};
const ExpenseDetail = () => {
  const d = FF_DATA;
  const e = d.expenses.find(x => x.id === "EXP-2841");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 8,
      marginBottom: 12,
      color: 'var(--ff-fg-muted)',
      fontSize: 13,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    },
    onClick: ev => {
      ev.preventDefault();
      ffGo('expenses');
    }
  }, "Expenses"), /*#__PURE__*/React.createElement(Icon, {
    name: "caret-right",
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ff-fg)'
    },
    className: "ff-mono"
  }, e.id)), /*#__PURE__*/React.createElement(PageHead, {
    title: e.merchant,
    sub: `${e.id} · Submitted by ${e.who} on ${e.date}`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chat-text",
      size: 14
    }), " Comment"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 14
    }), " Reject"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('state-success')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }), " Approve"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1.6fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '16px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Summary"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px 28px'
    }
  }, /*#__PURE__*/React.createElement(DetailRow, {
    label: "Amount"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-font-sans)',
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: '-0.025em'
    },
    className: "ff-tnum"
  }, /*#__PURE__*/React.createElement(Money, {
    value: e.amount
  }))), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Status"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status
  })), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Category"
  }, d.categories.find(c => c.id === e.cat).name), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-tnum"
  }, e.date)), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Payment"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-mono"
  }, "•••• ", e.cardLast4)), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Memo"
  }, e.memo))), /*#__PURE__*/React.createElement(Card, {
    title: "Receipt",
    action: /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--sm ff-btn--ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 12
    }), " Download")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ff-card-2)',
      border: '1px dashed var(--ff-border)',
      borderRadius: 10,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 280,
      background: `repeating-linear-gradient(0deg, var(--ff-border) 0 1px, transparent 1px 12px), var(--ff-card)`,
      border: '1px solid var(--ff-border)',
      borderRadius: 6,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontFamily: 'var(--ff-font-mono)',
      fontSize: 10,
      color: 'var(--ff-fg-muted)'
    }
  }, "UNITED · receipt.pdf"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontFamily: 'var(--ff-font-display)',
      fontSize: 22,
      fontStyle: 'italic'
    },
    className: "ff-tnum"
  }, "$842.50")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "1 of 1 · receipt_2026-05-22_united.pdf · 248 KB"))), /*#__PURE__*/React.createElement(Card, {
    title: "Activity",
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '0'
    }
  }, [{
    who: "Luna Park",
    act: "Submitted expense",
    ts: "May 22, 9:12 AM"
  }, {
    who: "System",
    act: "Policy check passed",
    ts: "May 22, 9:12 AM"
  }, {
    who: "Theo Vasquez",
    act: "Routed for approval",
    ts: "May 22, 9:15 AM"
  }, {
    who: "Maren Okafor",
    act: "Viewing now",
    ts: "Just now"
  }].map((a, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '14px 20px',
      borderBottom: i < arr.length - 1 ? '1px solid var(--ff-border)' : '0',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: a.who.split(' ').map(x => x[0]).join('').slice(0, 2)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("strong", null, a.who), " · ", a.act), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    },
    className: "ff-tnum"
  }, a.ts))))))), /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '16px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Approval chain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '12px'
    }
  }, [{
    name: "Theo Vasquez",
    title: "Head of Sales",
    status: "approved"
  }, {
    name: "Maren Okafor",
    title: "Finance",
    status: "pending"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ff-row",
    style: {
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 10,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: s.name.split(' ').map(x => x[0]).join('').slice(0, 2)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, s.title))), /*#__PURE__*/React.createElement(StatusBadge, {
    status: s.status
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert ff-alert--info"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    weight: "fill",
    style: {
      color: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__title"
  }, "Within policy"), /*#__PURE__*/React.createElement("div", null, "Airfare under domestic cap ($1,000). Receipt attached. Tax ID matches vendor."))))));
};
const DetailRow = ({
  label,
  children
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "ff-eyebrow",
  style: {
    marginBottom: 4
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14
  }
}, children));
const NewExpense = () => {
  const d = FF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Expenses",
    title: "New expense",
    sub: "Submit a business expense for approval",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, "Save draft"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('expenses')
    }, "Submit for approval"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1.5fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-label"
  }, "Merchant"), /*#__PURE__*/React.createElement("input", {
    className: "ff-input",
    defaultValue: "United Airlines"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-label"
  }, "Date"), /*#__PURE__*/React.createElement("input", {
    className: "ff-input",
    type: "text",
    defaultValue: "2026-05-22"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-label"
  }, "Amount (USD)"), /*#__PURE__*/React.createElement("input", {
    className: "ff-input ff-tnum",
    defaultValue: "842.50"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-label"
  }, "Category"), /*#__PURE__*/React.createElement("select", {
    className: "ff-select",
    defaultValue: "tr"
  }, d.categories.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.name))))), /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-label"
  }, "Memo"), /*#__PURE__*/React.createElement("textarea", {
    className: "ff-textarea",
    defaultValue: "SF → Austin (sales kickoff)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-label"
  }, "Project / cost center"), /*#__PURE__*/React.createElement("select", {
    className: "ff-select"
  }, /*#__PURE__*/React.createElement("option", null, "Sales — FY26"), /*#__PURE__*/React.createElement("option", null, "Marketing"), /*#__PURE__*/React.createElement("option", null, "R&D"))), /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-label"
  }, "Payment"), /*#__PURE__*/React.createElement("select", {
    className: "ff-select"
  }, /*#__PURE__*/React.createElement("option", null, "FinFlow Card · •••• 4112"), /*#__PURE__*/React.createElement("option", null, "Personal — request reimbursement")))))), /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '16px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Receipt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1.5px dashed var(--ff-border-strong)',
      borderRadius: 10,
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-empty__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload-simple",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, "Drop a receipt"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ff-fg-muted)'
    }
  }, "PDF or image · OCR fills the form automatically"), /*#__PURE__*/React.createElement("button", {
    className: "ff-btn ff-btn--sm",
    style: {
      marginTop: 6
    },
    onClick: () => ffGo('ocr')
  }, "Choose file"))), /*#__PURE__*/React.createElement(Card, {
    title: "Approval preview"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ff-fg-muted)',
      marginBottom: 10
    }
  }, "This expense will be routed to:"), /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "TV"
  }), /*#__PURE__*/React.createElement("span", null, "Theo Vasquez · Head of Sales")), /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "MO"
  }), /*#__PURE__*/React.createElement("span", null, "Maren Okafor · Finance")))))));
};
const OcrReview = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Receipt OCR",
    title: "Review extracted data",
    sub: "We've parsed the receipt — confirm the fields below.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, "Re-scan"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary",
      onClick: () => ffGo('expenses')
    }, "Save expense"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ff-card-2)',
      border: '1px solid var(--ff-border)',
      borderRadius: 8,
      height: 540,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 24,
      background: '#fff',
      borderRadius: 4,
      boxShadow: 'var(--ff-shadow-md)',
      padding: '24px 20px',
      color: '#15131A',
      fontSize: 11,
      fontFamily: 'var(--ff-font-mono)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--ff-font-display)',
      fontSize: 22,
      marginBottom: 14
    }
  }, "MARRIOTT"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 18,
      color: '#666'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'oklch(0.72 0.14 75 / 0.25)',
      border: '1px solid oklch(0.72 0.14 75)',
      borderRadius: 3,
      padding: '2px 6px'
    }
  }, "Austin, TX · Folio 4471")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Room 412 — 3 nights"), /*#__PURE__*/React.createElement("span", null, "$1,140.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Resort fee"), /*#__PURE__*/React.createElement("span", null, "$45.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tax"), /*#__PURE__*/React.createElement("span", null, "$55.00")), /*#__PURE__*/React.createElement("hr", {
    style: {
      margin: '10px 0',
      border: '0',
      borderTop: '1px dashed #ccc'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "TOTAL"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'oklch(0.72 0.14 75 / 0.25)',
      border: '1px solid oklch(0.72 0.14 75)',
      borderRadius: 3,
      padding: '1px 6px'
    }
  }, "$1,240.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      textAlign: 'center',
      color: '#888'
    }
  }, "VISA •••• 4112 · 05/21/26 14:08")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      background: 'var(--ff-card)',
      border: '1px solid var(--ff-border)',
      borderRadius: 6,
      padding: '4px 8px',
      fontSize: 11,
      color: 'var(--ff-fg-muted)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 12
  }), " OCR confidence · 94%")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "ff-stack",
    style: {
      '--ff-stack-gap': '14px'
    }
  }, /*#__PURE__*/React.createElement(OcrField, {
    label: "Merchant",
    value: "Marriott Austin",
    confidence: 98
  }), /*#__PURE__*/React.createElement(OcrField, {
    label: "Date",
    value: "2026-05-21",
    confidence: 99
  }), /*#__PURE__*/React.createElement(OcrField, {
    label: "Amount",
    value: "$1,240.00",
    confidence: 97,
    highlight: true
  }), /*#__PURE__*/React.createElement(OcrField, {
    label: "Tax",
    value: "$55.00",
    confidence: 88
  }), /*#__PURE__*/React.createElement(OcrField, {
    label: "Card",
    value: "VISA •••• 4112",
    confidence: 96
  }), /*#__PURE__*/React.createElement(OcrField, {
    label: "Category (predicted)",
    value: "Travel · Lodging",
    confidence: 91
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert ff-alert--warn",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "warning",
    size: 18,
    weight: "fill"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__title"
  }, "Policy: over hotel cap"), /*#__PURE__*/React.createElement("div", null, "3 nights at $413/night exceeds the $300/night domestic cap. This expense will be flagged."))))));
};
const OcrField = ({
  label,
  value,
  confidence,
  highlight
}) => /*#__PURE__*/React.createElement("div", {
  className: "ff-field"
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-row",
  style: {
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("label", {
  className: "ff-label"
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 11,
    color: confidence > 90 ? 'var(--ff-approved)' : 'var(--ff-pending)'
  }
}, confidence, "% confidence")), /*#__PURE__*/React.createElement("input", {
  className: "ff-input " + (highlight ? "ff-tnum" : ""),
  defaultValue: value,
  style: highlight ? {
    fontWeight: 600
  } : {}
}));
const FlaggedExpense = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Expense · Policy violation",
    title: "Marriott Austin — flagged",
    sub: "EXP-2839 · Luna Park · May 21, 2026",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "ff-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chat-text",
      size: 14
    }), " Ask for info"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--danger"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 14
    }), " Reject"), /*#__PURE__*/React.createElement("button", {
      className: "ff-btn ff-btn--primary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }), " Approve override"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert ff-alert--error",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "warning-octagon",
    size: 20,
    weight: "fill"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-alert__title"
  }, "3 policy violations detected"), /*#__PURE__*/React.createElement("div", null, "Hotel rate $413/night (cap $300) · Stay extended past sanctioned trip window · Missing project code"))), /*#__PURE__*/React.createElement("div", {
    className: "ff-grid",
    style: {
      gridTemplateColumns: '1.6fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Receipt + transcription"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-grid ff-grid--2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      background: 'var(--ff-card-2)',
      border: '1px solid var(--ff-border)',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--ff-font-mono)',
      fontSize: 11,
      color: 'var(--ff-fg-muted)'
    }
  }, "receipt.jpg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(DetailRow, {
    label: "Total"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-font-sans)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.025em'
    },
    className: "ff-tnum"
  }, "$1,240.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Nights"
  }, "3 × $413.33"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Policy cap"
  }, "$300/night"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Overage"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ff-rejected)'
    },
    className: "ff-tnum"
  }, "+$340.00"))))), /*#__PURE__*/React.createElement(Card, {
    title: "Override note"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "ff-textarea",
    defaultValue: "Customer offsite — only room block available. Approving as one-time exception."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ff-fg-muted)',
      marginTop: 10
    }
  }, "Override will be recorded in audit log under Maren Okafor (Finance Admin)."))));
};
const BulkImport = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
  eyebrow: "Expenses",
  title: "Bulk import",
  sub: "Upload a CSV of expenses to import in one batch."
}), /*#__PURE__*/React.createElement("div", {
  className: "ff-grid",
  style: {
    gridTemplateColumns: '1.5fr 1fr',
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  style: {
    border: '1.5px dashed var(--ff-border-strong)',
    borderRadius: 12,
    padding: 48,
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ff-empty__icon",
  style: {
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "file-csv",
  size: 26
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 12
  }
}, "Drop your CSV here"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--ff-fg-muted)',
    marginTop: 4
  }
}, "Up to 5,000 rows · UTF-8 · max 10 MB"), /*#__PURE__*/React.createElement("button", {
  className: "ff-btn ff-btn--primary",
  style: {
    marginTop: 18
  },
  onClick: () => ffGo('expenses')
}, /*#__PURE__*/React.createElement(Icon, {
  name: "upload-simple",
  size: 14
}), " Choose file"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 12,
    fontSize: 12
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Download CSV template")))), /*#__PURE__*/React.createElement(Card, {
  title: "Expected columns"
}, /*#__PURE__*/React.createElement("table", {
  className: "ff-table ff-table--compact"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Column"), /*#__PURE__*/React.createElement("th", null, "Required"))), /*#__PURE__*/React.createElement("tbody", null, [["date", "Yes"], ["merchant", "Yes"], ["amount", "Yes"], ["category", "Yes"], ["memo", "No"], ["card_last4", "No"], ["owner_email", "No"], ["project_code", "No"]].map(([k, r], i) => /*#__PURE__*/React.createElement("tr", {
  key: i
}, /*#__PURE__*/React.createElement("td", {
  className: "ff-mono",
  style: {
    fontSize: 12
  }
}, k), /*#__PURE__*/React.createElement("td", null, r))))))));
Object.assign(window, {
  ExpenseList,
  ExpenseDetail,
  NewExpense,
  OcrReview,
  FlaggedExpense,
  BulkImport
});

