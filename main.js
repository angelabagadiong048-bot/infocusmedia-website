/* In Focus Media — small enhancements only. The site works without this file. */
(function () {
  "use strict";

  /* Current year in the footer, so nobody has to remember to update it. */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Solid header background once the hero has scrolled away. */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Fade sections in as they enter the viewport. */
  var targets = document.querySelectorAll(".reveal");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

  targets.forEach(function (el) { observer.observe(el); });
})();
