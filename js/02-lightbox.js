import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
console.log( )

const gallery = document.querySelector('.gallery');
const imgList = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')

gallery.insertAdjacentHTML('afterbegin', imgList)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250
})
