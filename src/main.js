import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';

let page = 1;
let per_page = 15;
let userValue = '';
let totalPages = 1;

const form = document.querySelector('.form');
const input = document.querySelector('.input-seach');
const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.js-loader');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const searchQuery = input.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      position: 'topLeft',
      message:
        'Sorry, the field must not contain only spaces. Please, try again!',
    });

    form.reset();
    gallery.innerHTML = '';

    return;
  }

  try {
    loaderEl.classList.remove('is-hidden');
    const response = await fetchImages(searchQuery);
    input.value = '';
    loaderEl.classList.add('is-hidden');
    if (response.hits.length !== 0) {
      renderImages(response.hits, gallery);
    }
  } catch {
    loaderEl.classList.add('is-hidden');
    input.value = '';
    console.error('Error fetching images:', error);
  }

  // function scrollWindow() {
  //   const galleryItemEl = document.querySelector('.gallery-item');
  //   const galleryItemHeight = galleryItemEl.getBoundingClientRect().height;
  //   window.scrollBy({
  //     top: galleryItemHeight * 2,
  //     behavior: 'smooth',
  //   });
  // }
});
