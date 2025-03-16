document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".tab-content");

    let activeContent = document.querySelector(".tab-content.active");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            if (contents[index] === activeContent) return;

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            let previousContent = activeContent;
            let newContent = contents[index];

            // Fermer l'ancien contenu en douceur
            previousContent.style.overflow = "hidden";
            previousContent.style.transition = "max-height 0.5s ease, opacity 0.3s ease";
            previousContent.style.maxHeight = previousContent.scrollHeight + "px";
            previousContent.style.opacity = "1";

            setTimeout(() => {
                previousContent.style.maxHeight = "0";
                previousContent.style.opacity = "0";
            }, 10);

            // Afficher le nouveau contenu après fermeture complète
            setTimeout(() => {
                previousContent.classList.remove("active");
                previousContent.style.display = "none";

                newContent.style.display = "flex";
                newContent.style.overflow = "hidden";
                newContent.style.maxHeight = "0";
                newContent.style.opacity = "0";

                setTimeout(() => {
                    newContent.classList.add("active");
                    newContent.style.transition = "max-height 0.5s ease, opacity 0.3s ease";
                    newContent.style.maxHeight = newContent.scrollHeight + "px";
                    newContent.style.opacity = "1";
                    activeContent = newContent;
                }, 10);
            }, 500);
        });
    });
});