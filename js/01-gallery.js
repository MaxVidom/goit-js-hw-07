import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('div.gallery');

createGalery();

galleryRef.addEventListener('click', modalLargeImageUrl);

function createGalery() {
    const galleryList = galleryItems.map((item) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`;
    }).join("");
    galleryRef.insertAdjacentHTML("afterbegin", galleryList);
}

function modalLargeImageUrl(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const urlLLargeImage = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${urlLLargeImage}" width="800" height="600">
    `);
    instance.show();
    console.log(urlLLargeImage);
}

console.log(galleryItems);
