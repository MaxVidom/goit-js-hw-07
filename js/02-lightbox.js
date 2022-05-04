import { galleryItems } from './gallery-items.js';

const galeryUlRef = document.querySelector('ul.gallery');

function createGalery(items) {
    const galeryMarkup = items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description} title="${description}" />
</a>`;
    }).join("");
    galeryUlRef.insertAdjacentHTML("afterbegin", galeryMarkup);
}
createGalery(galleryItems);

let gallery = new SimpleLightbox('ul.gallery a');
gallery.on(`show.simplelightbox`, function () {
    galery.defaultOptions.captionDelay = 250;
});