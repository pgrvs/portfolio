document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const container = carousel.querySelector(".carousel-container");
        const elements = container.querySelectorAll("img, video");  // Prend en compte les vidéos
        const totalElements = elements.length;

        let currentIndex = 0;

        const nextBtn = carousel.querySelector(".nextBtn");
        const prevBtn = carousel.querySelector(".prevBtn");

        nextBtn.addEventListener("click", () => {
            stopAllVideos(); // Arrête la vidéo lors du changement
            currentIndex = (currentIndex + 1) % totalElements;
            updateCarousel(container, currentIndex);
        });

        prevBtn.addEventListener("click", () => {
            stopAllVideos(); // Arrête la vidéo lors du changement
            currentIndex = (currentIndex - 1 + totalElements) % totalElements;
            updateCarousel(container, currentIndex);
        });

        function updateCarousel(container, index) {
            const offset = -index * 100;
            container.style.transform = `translateX(${offset}%)`;

            // Démarre la vidéo si l'élément actuel est une vidéo
            if (elements[index].tagName === "VIDEO") {
                elements[index].play();
            }
        }

        // Fonction pour arrêter toutes les vidéos du carousel
        function stopAllVideos() {
            elements.forEach(element => {
                if (element.tagName === "VIDEO") {
                    element.pause();
                    element.currentTime = 0;
                }
            });
        }
    });
});