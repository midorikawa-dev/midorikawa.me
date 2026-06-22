(function () {
  const KEY = "midorikawa.lang";
  const params = new URLSearchParams(window.location.search);
  const explicit = params.get("lang");

  if (explicit === "ja" || explicit === "en") {
    localStorage.setItem(KEY, explicit);
  }

  const header = document.querySelector(".site-header");
  const currentLang = header ? header.getAttribute("data-site-lang") || "ja" : "ja";

  const preferred = explicit === "ja" || explicit === "en"
    ? explicit
    : localStorage.getItem(KEY) || currentLang;

  if (preferred === "ja" || preferred === "en") {
    document.documentElement.dataset.langPreference = preferred;
  }

  document.querySelectorAll("[data-lang-row]").forEach((row) => {
    row.hidden = row.getAttribute("data-lang-row") !== preferred;
  });

  const brand = document.querySelector(".site-name");
  if (brand && (preferred === "ja" || preferred === "en")) {
    brand.setAttribute("href", preferred === "en" ? "/en/" : "/");
  }

  document.querySelectorAll(".site-nav-links > a").forEach((link) => {
    if (preferred !== "ja" && preferred !== "en") return;
    const label = link.textContent.trim();
    if (label === "Projects") {
      link.setAttribute("href", preferred === "en" ? "/en/projects/" : "/projects/");
    }
    if (label === "Writing") {
      link.setAttribute("href", preferred === "en" ? "/en/research/" : "/research/");
    }
  });

  document.querySelectorAll("[data-language-choice]").forEach((link) => {
    const choice = link.getAttribute("data-language-choice");
    if (choice === preferred) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "true");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }

    link.addEventListener("click", () => {
      if (choice === "ja" || choice === "en") {
        localStorage.setItem(KEY, choice);
      }
    });
  });

  if (preferred !== "ja" && preferred !== "en") return;

  if (!header) return;

  const target = document.querySelector(`[data-language-choice="${preferred}"]`);
  if (!target || preferred === currentLang) return;

  const targetUrl = new URL(target.href, window.location.href);
  const currentUrl = new URL(window.location.href);
  if (targetUrl.href !== currentUrl.href) {
    window.location.replace(targetUrl.href);
  }
})();
