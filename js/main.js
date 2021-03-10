import gallery from './gallery-items.js';

const createGaller = addArrGaller(gallery);
const arrGallery = document.querySelector('ul.js-gallery'); // Галерея изображений
const modalRef = document.querySelector('div.js-lightbox'); // Мадальное окно галереи
const substitutionImgRef = document.querySelector('img.lightbox__image'); //Подмена атрибута
const closeModalRef = document.querySelector('button[data-action]'); // Закрытие модального окна
const modaleOverlayRef = document.querySelector('div.lightbox__overlay'); // Очистка модального окна


arrGallery.addEventListener('click', originalImgRef);
closeModalRef.addEventListener('click', closeModal)
modaleOverlayRef.addEventListener('click',closeModal)

function addArrGaller(gallery) {
    const arrGal = gallery.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  });
    return arrGal.join("");
};

const createDivGaller = arrGallery.insertAdjacentHTML('beforeend', createGaller);
function originalImgRef(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const imgOriginal =event.target.dataset.source;
    const imgAlt = event.target.alt;
    const imgIndex = event.target.dataIndex;
    openModal(imgOriginal, imgAlt, imgIndex);
};

function openModal(imgOriginal, imgAlt, imgIndex) {
    modalRef.classList.add('is-open');
    substitutionImgRef.src = imgOriginal;
    substitutionImgRef.alt = imgAlt;
    substitutionImgRef.dataset.index = imgIndex;
    window.addEventListener('keydown', event => windowControl(event));
};

function closeModal() {
    modalRef.classList.remove('is-open');
    delete substitutionImgRef.dataset.index;
    window.addEventListener('keydown', event => windowControl(event));
};

function windowControl(e) {
    if (e.code === 'Escape') {
        return closeModal();
    };
};
