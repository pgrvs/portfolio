document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("top-nav");
    if (!navContainer) return;

    const basePath = window.location.origin + "/portfolio/src/components/top-nav.html";

    fetch(basePath)
        .then(res => res.text())
        .then(html => {
            navContainer.innerHTML = html;

            const currentPath = window.location.pathname;
            const navLinks = navContainer.querySelectorAll(".nav-item");
            const backBtn = navContainer.querySelector("#nav-back-btn");

            /* ----- GESTION ACTIVE ----- */
            navLinks.forEach(link => {
                link.classList.remove("active");
                const href = link.getAttribute("href");

                if (
                    currentPath === href ||
                    (currentPath === "/portfolio/" && href.includes("index.html")) ||
                    (currentPath === "/portfolio" && href.includes("index.html"))
                ) {
                    link.classList.add("active");
                }
            });

            /* ----- GESTION DU BOUTON RETOUR ----- */
            if (currentPath.includes("/projets/")) {
                // On est sur une page détail de projet
                backBtn.classList.remove("hidden");

                const sectionId = document.body.dataset.sectionId;

                if (document.referrer) {
                    backBtn.href = sectionId
                        ? `${document.referrer}#${sectionId}`
                        : document.referrer;
                } else {
                    backBtn.href = "/portfolio/projets.html";
                }
            }
        })
        .catch(err => console.error("Erreur nav :", err));
});