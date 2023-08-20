const offerButton = document.querySelector("#offer-button")
const offerList = document.querySelector("#offer-list")
const listButtons = document.querySelectorAll(".Offer-button")
const searchButton = document.querySelector("#search-button")
const searchbar = document.querySelector("#searchbar")

// Mobile elements
const mobileOfferButton = document.querySelector("#mobile-offer-button")
const mobileOfferList = document.querySelector("#mobile-offer-list")
const mobileNav = document.querySelector("#mobile-nav")
const menuButton = document.querySelector("#menu-button")

offerButton.addEventListener("click", () => {
  offerList.classList.toggle("opacity-100")
  offerList.classList.toggle("pointer-events-auto")

  // Hide searchbar
  searchbar.classList.remove("opacity-100")
  searchbar.classList.remove("pointer-events-auto")
  searchbar.classList.remove("-bottom-[6.5rem]")
})

listButtons.forEach((button) => {
  button.addEventListener("click", () => {
    offerList.classList.remove("opacity-100")
    offerList.classList.remove("pointer-events-auto")
  })
})

searchButton.addEventListener("click", () => {
  searchbar.classList.toggle("opacity-100")
  searchbar.classList.toggle("pointer-events-auto")
  searchbar.classList.toggle("-bottom-[6.5rem]")

  // Hide offer list
  offerList.classList.remove("opacity-100")
  offerList.classList.remove("pointer-events-auto")
})

mobileOfferButton.addEventListener("click", () => {
  mobileOfferList.classList.toggle("hidden")
  mobileNav.classList.toggle("-bottom-92")
})

menuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("opacity-0")
  mobileNav.classList.toggle("pointer-events-none")
})
