import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';

let currentPage = 1;
let searchQuery = '';
let imagesPerPage = 15;
let galleryItemHeight = 0;
// let totalPages = 4;

const form = document.querySelector('.form');
const input = document.querySelector('.input-seach');
const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreEl = document.querySelector('.js-loadmore');
const scrollEl = document.querySelector('.scroll-to-top');

const onSearchFormSubmit = async event => {
  event.preventDefault();
  loadMoreEl.classList.add('is-hidden');
  searchQuery = input.value.trim();
  gallery.innerHTML = '';

  if (searchQuery === '') {
    iziToast.error({
      position: 'topLeft',
      message:
        'Sorry, the field must not contain only spaces. Please, try again!',
    });

    form.reset();

    return;
  }

  loaderEl.classList.remove('is-hidden');
  currentPage = 1;

  try {
    const response = await fetchImages(searchQuery, currentPage, imagesPerPage);
    input.value = '';
    loaderEl.classList.add('is-hidden');
    if (response.hits.length !== 0) {
      renderImages(response.hits, gallery);
    }

    loadMoreEl.classList.remove('is-hidden');
  } catch {
    loaderEl.classList.add('is-hidden');
    input.value = '';
    console.error('Error fetching images:', error);
  }
};

const onLoadMore = async event => {
  try {
    currentPage++;

    loadMoreEl.classList.add('is-hidden');
    loaderEl.classList.remove('is-hidden');

    const data = await fetchImages(searchQuery, currentPage, imagesPerPage);
    if (data.hits.length !== 0) {
      renderImages(data.hits, gallery);
    }

    const totalPages = Math.ceil(data.total / imagesPerPage);
    galleryItemHeight = gallery
      .querySelector('li')
      .getBoundingClientRect().height;

    scrollBy({
      top: galleryItemHeight * 2,
      behavior: 'smooth',
    });

    loadMoreEl.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
    if (currentPage >= totalPages) {
      loadMoreEl.classList.add('is-hidden');
      iziToast.info({
        position: 'topLeft',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    loadMoreEl.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
    console.log(err);
  }
};

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = event => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollEl.style.display = 'block';
  } else {
    scrollEl.style.display = 'none';
  }
};

const topFunction = event => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

form.addEventListener('submit', onSearchFormSubmit);
loadMoreEl.addEventListener('click', onLoadMore);
scrollEl.addEventListener('click', topFunction);
