/* Light/dark toggle for the case-study pages. Shares the "theme" key with the home. */
(function () {
  "use strict";
  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");
  var moon = document.querySelector(".theme-moon");
  var sun = document.querySelector(".theme-sun");
  function sync() {
    var dark = root.classList.contains("dark");
    if (moon) moon.classList.toggle("hidden", dark);
    if (sun) sun.classList.toggle("hidden", !dark);
    if (btn) btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  sync();
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
      sync();
    });
  }
})();
