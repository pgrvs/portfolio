document.addEventListener("DOMContentLoaded", function () {
    const switcherContainer = document.getElementById("theme-switcher-container");

    if (!switcherContainer) return;

    // Calcul du bon chemin relatif automatiquement
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    const basePath = "../".repeat(depth - 1); // ajusté selon le niveau

    fetch(`${basePath}src/components/theme-switcher.html`)
        .then((res) => res.text())
        .then((html) => {
            switcherContainer.innerHTML = html;

            const checkbox = document.getElementById("toggle-theme");
            if (!checkbox) return;

            const currentTheme = localStorage.getItem("theme") || "dark";
            checkbox.checked = currentTheme === "light";

            checkbox.addEventListener("change", function () {
                const newTheme = this.checked ? "light" : "dark";
                document.documentElement.setAttribute("data-theme", newTheme);
                localStorage.setItem("theme", newTheme);
            });
        })
        .catch((err) => {
            console.error("Erreur lors du chargement du switcher :", err);
        });
});