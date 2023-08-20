const slides = document.querySelectorAll(".slide")
const leftButton = document.querySelector("#left-btn")
const rightButton = document.querySelector("#right-btn")

let activeSlide = 0

rightButton.addEventListener("click", () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setActiveSlide()
})

leftButton.addEventListener("click", () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setActiveSlide()
})

// Change slide every 5 seconds
setInterval(() => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setActiveSlide()
}, 5000)

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"))

  slides[activeSlide].classList.add("active")
}
