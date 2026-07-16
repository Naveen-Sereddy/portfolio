const SCREENS = {
  signin: nav => /*#__PURE__*/React.createElement(MobileSignIn, {
    onNav: nav,
    fullbleed: true
  }),
  home: nav => /*#__PURE__*/React.createElement(MobileHome, {
    onNav: nav,
    fullbleed: true
  }),
  snap: nav => /*#__PURE__*/React.createElement(MobileSnapReceipt, {
    onNav: nav,
    fullbleed: true
  }),
  new: nav => /*#__PURE__*/React.createElement(MobileNewExpense, {
    onNav: nav,
    fullbleed: true
  }),
  success: nav => /*#__PURE__*/React.createElement(MobileSubmitSuccess, {
    onNav: nav,
    fullbleed: true
  }),
  timeline: (nav, id) => /*#__PURE__*/React.createElement(MobileStatusTimeline, {
    onNav: nav,
    fullbleed: true,
    expenseId: id
  }),
  expenses: nav => /*#__PURE__*/React.createElement(MobileExpenses, {
    onNav: nav,
    fullbleed: true
  }),
  cards: nav => /*#__PURE__*/React.createElement(MobileCards, {
    onNav: nav,
    fullbleed: true
  })
};
const App = () => {
  const [screen, setScreen] = React.useState('signin');
  const [expenseId, setExpenseId] = React.useState('EXP-2841');
  const nav = (next, payload) => {
    if (next === 'timeline' && payload) setExpenseId(payload);
    setScreen(next);
    window.scrollTo(0, 0);
  };
  return SCREENS[screen](nav, expenseId);
};
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));