const grid = document.querySelector(".grid-gallery")
let msnry

const appendButton = document.querySelector("#append-button")
appendButton.addEventListener("click", expandGallery)

function expandGallery() {
  document.querySelector(".grid-gallery-container").style.height = "100%"
  document.querySelector("#gallery-overlay").style.opacity = "0"
  appendButton.style.display = "none"
}

imagesLoaded(grid, () => {
  msnry = new Masonry(grid, {
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    itemSelector: ".grid-item",
    percentPosition: true,
  })
})
