const gallery = document.querySelector("#gallery")
const imagesSources = [
  "https://images.unsplash.com/photo-1594886962861-1cbd2afd5fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
  "https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=796&q=80",
  "https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/flagged/photo-1552686234-8e47d5602508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80",
  "https://images.unsplash.com/photo-1563297699-d94b46d8179d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1539823903325-6e1b5630081a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1552761374-698129c35d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1505128996263-6d566b34149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=639&q=80",
  "https://images.pexels.com/photos/13871294/pexels-photo-13871294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/10280850/pexels-photo-10280850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg",
  "https://images.pexels.com/photos/4946994/pexels-photo-4946994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]

// Creating gallery item
imagesSources.forEach((image, index) => {
  const item = document.createElement("div")
  item.innerHTML = `
    <div class='grid-item' onClick="expandGallery()">
      <div class='cssbox'>
        <a id="image${index}" href="#image${index}">
          <img
            class="cssbox_thumb"
            src=${image}
            alt='Zdjęcie poglądowe ogrodu'
          />
          <span class="cssbox_full">
            <img
              src=${image}
              alt='Pełne zdjęcie ogrodu'
            />
          </span>
        </a>
        <a class="cssbox_close" href="#void"></a>
        <a class="cssbox_prev" href="#image${index - 1}">&lt;</a>
        <a class="cssbox_next" href="#image${index + 1}">&gt;</a>
      </div>
    </div>
  `
  gallery.appendChild(item)
})
