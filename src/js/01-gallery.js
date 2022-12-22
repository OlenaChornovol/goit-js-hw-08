// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// де ця течка
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  imageContainer: document.querySelector('.gallery'),
  body: document.body,
};

function makeGalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img loading="lazy" width="354" height="240"
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

const cardsGalleryMarkup = makeGalleryItems(galleryItems);
refs.imageContainer.insertAdjacentHTML('beforeend', cardsGalleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

console.log(galleryItems);
