import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input-seach');
const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.js-loader');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = input.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      position: 'topLeft',
      message:
        'Sorry, the field must not contain only spaces. Please, try again!',
    });

    form.reset();

    return;
  }

  gallery.innerHTML = '';

  loaderEl.classList.remove('is-hidden');

  fetchImages(searchQuery)
    .finally(() => {
      loaderEl.classList.add('is-hidden');
      input.value = '';
    })
    .then(data => {
      if (data.hits.length !== 0) {
        renderImages(data.hits, gallery);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
});
