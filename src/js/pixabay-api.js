import iziToast from 'izitoast';
import axios from 'axios';

const API_KEY = '45808598-d89d2298a0dffc9605af6e928';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (
  word,
  page,
  per_page = 15,
  orientation = 'horizontal'
) => {
  try {
    const axiosOptions = {
      params: {
        key: API_KEY,
        q: word,
        page,
        orientation,
        per_page,
        image_type: 'photo',
        safesearch: 'true',
      },
    };

    const axiosResopne = await axios.get('', axiosOptions);

    const data = axiosResopne.data;
    if (data.hits.length === 0) {
      iziToast.error({
        position: 'topLeft',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
      });
      throw new Error('No images found');
    }

    return data;
  } catch {
    console.log(err);
  }
};
