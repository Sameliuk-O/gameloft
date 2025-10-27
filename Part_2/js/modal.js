/**
 * Module for working with a modal image viewer
 */

const modal = document.getElementById("imageModal");
const modalImage = modal.querySelector(".modal__image");
const closeBtn = modal.querySelector(".modal__close");
const cardImage = document.querySelectorAll(".card__image");

/**
 * Add a click event handler for each image
 */
cardImage.forEach(img => {
    img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.classList.add("open");
    });
});

/**
 * Close button click handler
 */
closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

/**
 * Modal window overlay click handler
 */
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("open");
    }
});
