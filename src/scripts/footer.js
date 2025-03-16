document.addEventListener("DOMContentLoaded", function () {
    const basePath = window.location.origin + "/portfolio/src/components/footer.html";

    fetch(basePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du footer :", error));
});