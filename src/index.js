
const buttonSpiderman = document.querySelector('.card-spiderman');
const modal = document.querySelector('.modal');
const buttonModalClose = document.querySelector(".modal-icon-close")

buttonSpiderman.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
})

buttonModalClose.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hidden")
})