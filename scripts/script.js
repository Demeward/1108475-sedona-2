document.querySelector(".search-hotel__popup-btn").addEventListener("click", () => {
  document.querySelector(".modal-overlay").classList.add("modal-overlay_opened");
})
document.querySelector(".modal__close").addEventListener("click", () => {
  document.querySelector(".modal-overlay").classList.remove("modal-overlay_opened");
})
