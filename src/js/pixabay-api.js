import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchImages(word, orientation = 'horizontal') {
  return fetch(
    `https://pixabay.com/api/?key=45808598-d89d2298a0dffc9605af6e928&q=${word}&image_type=photo&orientation=${orientation}&safesearch=true`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topLeft',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
        });
        throw new Error(data.statusText);
      }
      return data;
    })
    .catch(err => {
      console.log(err);
    });
}
