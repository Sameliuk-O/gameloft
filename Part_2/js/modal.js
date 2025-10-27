const modal = document.getElementById("imageModal");
const modalImage = modal.querySelector(".modal__image");
const closeBtn = modal.querySelector(".modal__close");
const cardImage = document.querySelectorAll(".card__image");

cardImage.forEach(img => {
    img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.classList.add("open");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("open");
    }
});
