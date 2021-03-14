import gallery from './gallery-items.js';
import addArrGaller from './fun-modal.js';

const createGaller = addArrGaller(gallery);
const arrGallery = document.querySelector('ul.js-gallery');
const modalRef = document.querySelector('div.js-lightbox');
const substitutionImgRef = document.querySelector('img.lightbox__image');
const closeModalRef = document.querySelector('button[data-action]');
const modaleOverlayRef = document.querySelector('div.lightbox__overlay');

arrGallery.addEventListener('click', originalImgRef);
closeModalRef.addEventListener('click', closeModal)
modaleOverlayRef.addEventListener('click',closeModal)

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
    substitutionImgRef.src = "";
    substitutionImgRef.alt = "";
    window.addEventListener('keydown', event => windowControl(event));
};

function windowControl(e) {
    if (e.code === 'Escape') {
        return closeModal();
    };
};
