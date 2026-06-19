(function () {
  const KEY = "midorikawa.lang";
  const params = new URLSearchParams(window.location.search);
  const explicit = params.get("lang");

  if (explicit === "ja" || explicit === "en") {
    localStorage.setItem(KEY, explicit);
  }

  const preferred = explicit === "ja" || explicit === "en"
    ? explicit
    : localStorage.getItem(KEY);

  if (preferred === "ja" || preferred === "en") {
    document.documentElement.dataset.langPreference = preferred;
  }

  const brand = document.querySelector(".site-name");
  if (brand && (preferred === "ja" || preferred === "en")) {
    brand.setAttribute("href", preferred === "en" ? "/en/" : "/");
  }

  document.querySelectorAll(".site-nav-links > a").forEach((link) => {
    if (preferred !== "ja" && preferred !== "en") return;
    const label = link.textContent.trim();
    if (label === "Notes") {
      link.setAttribute("href", preferred === "en" ? "/en/research/" : "/research/");
    }
    if (label === "Topics") {
      link.setAttribute("href", preferred === "en" ? "/topics/?lang=en" : "/topics/");
    }
    if (label === "Series") {
      link.setAttribute("href", preferred === "en" ? "/series/?lang=en" : "/series/");
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

  const header = document.querySelector(".site-header");
  if (!header) return;

  const currentLang = header.getAttribute("data-site-lang") || "ja";
  const target = document.querySelector(`[data-language-choice="${preferred}"]`);
  if (!target || preferred === currentLang) return;

  const targetUrl = new URL(target.href, window.location.href);
  const currentUrl = new URL(window.location.href);
  if (targetUrl.href !== currentUrl.href) {
    window.location.replace(targetUrl.href);
  }
})();
