import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

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
createGalery();
console.log(galleryItems);
