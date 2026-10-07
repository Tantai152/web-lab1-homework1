(() => {
  const THEME_KEY = "theme";
  const themeButton = document.getElementById("theme-btn");

  if (!themeButton) {
    return;
  }

  const icon = themeButton.querySelector("span[aria-hidden='true']");
  const storedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme ?? (prefersDark ? "dark" : "light");

  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark-theme", isDark);
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.childNodes[1].textContent = isDark ? "Light mode" : "Dark mode";

    if (icon) {
      icon.textContent = isDark ? "◑" : "◐";
    }
  };

  applyTheme(initialTheme);

  themeButton.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark-theme");
    const nextTheme = isDark ? "light" : "dark";

    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
})();
