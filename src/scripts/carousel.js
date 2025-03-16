document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const container = carousel.querySelector(".carousel-container");
        const images = container.querySelectorAll("img");
        const totalImages = images.length;

        let currentIndex = 0;

        const nextBtn = carousel.querySelector(".nextBtn");
        const prevBtn = carousel.querySelector(".prevBtn");

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel(container, currentIndex);
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel(container, currentIndex);
        });

        function updateCarousel(container, index) {
            const offset = -index * 100;
            container.style.transform = `translateX(${offset}%)`;
        }
    });
});