import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgList = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')

gallery.insertAdjacentHTML('afterbegin', imgList)
 
gallery.addEventListener("click", onOpenLargeImage)
function onOpenLargeImage(evt) {
      evt.preventDefault()
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    const instanse = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" alt="${evt.target.description}"
         width="1300" height="900" data-source="${evt.target.dataset.source}">`,
            
    );

    instanse.show();
  console.log("onOpenLargeImage data", instanse);

  
}




