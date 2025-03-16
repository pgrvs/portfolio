document.addEventListener("DOMContentLoaded", function () {
    const backLink = document.getElementById("dynamic-back-link");

    if (backLink) {
        const sectionID = backLink.getAttribute("data-section-id");

        if (document.referrer) {
            backLink.href = `${document.referrer}#${sectionID}`;
        } else {
            backLink.href = `../../projets.html#${sectionID}`;
        }
    }
});