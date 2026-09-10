(function () {
  var d = document, root = d.documentElement;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
    d.querySelectorAll("video[autoplay]").forEach(function (v) { v.removeAttribute("autoplay"); v.pause(); });
  }

  var header = d.querySelector(".site-header");
  function setHeaderH() { if (header) root.style.setProperty("--header-h", header.offsetHeight + "px"); }
  setHeaderH();
  addEventListener("resize", setHeaderH);

  /* ---- scroll reveal ---- */
  var els = [].slice.call(d.querySelectorAll(".reveal"));
  if (els.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("is-visible"); });
    } else {
      var vh = innerHeight;
      els.forEach(function (e) {
        if (e.getBoundingClientRect().top < vh * 0.92) e.classList.add("is-visible", "no-anim");
      });
      var pending = [], raf = 0;
      function flush() {
        raf = 0;
        pending.sort(function (a, b) { return a.getBoundingClientRect().top - b.getBoundingClientRect().top; });
        pending.forEach(function (e, i) {
          e.style.setProperty("--reveal-delay", Math.min(i, 5) * 60 + "ms");
          e.classList.add("is-visible");
        });
        pending = [];
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { pending.push(en.target); io.unobserve(en.target); }
        });
        if (!raf) raf = requestAnimationFrame(flush);
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
      els.forEach(function (e) { if (!e.classList.contains("is-visible")) io.observe(e); });
    }
  }

  /* ---- publications: year timeline ---- */
  var years = d.querySelector(".years");
  var sections = [].slice.call(d.querySelectorAll(".pub-year[id]"));
  if (years && sections.length) {
    var links = [].slice.call(years.querySelectorAll("a"));
    var marker = years.querySelector(".years-marker");
    var head = d.querySelector(".page-head");
    var active = null, ticking = false;

    function setActive(sec) {
      if (sec === active) return;
      active = sec;
      var id = sec.id;
      links.forEach(function (a) {
        var on = a.getAttribute("href") === "#" + id;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
        if (on && getComputedStyle(years).position === "sticky") {
          years.scrollTo({ left: a.offsetLeft - years.clientWidth / 2 + a.offsetWidth / 2, behavior: reduce ? "auto" : "smooth" });
        }
        if (on && marker) marker.style.top = (a.offsetTop + a.offsetHeight / 2 - years.clientTop) + "px";
      });
    }

    function update() {
      ticking = false;
      var hh = header ? header.offsetHeight : 0;
      /* a section counts as current once its top reaches where an anchor jump lands it (its scroll margin) */
      var line = (parseFloat(getComputedStyle(sections[0]).scrollMarginTop) || hh + 28) + 4;
      var current = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= line) current = sections[i]; else break;
      }
      setActive(current);
      var last = sections[sections.length - 1].getBoundingClientRect();
      var headBottom = head ? head.getBoundingClientRect().bottom : 0;
      years.classList.toggle("is-shown", headBottom < hh && last.bottom > innerHeight * 0.45);
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    update();
  }
})();
