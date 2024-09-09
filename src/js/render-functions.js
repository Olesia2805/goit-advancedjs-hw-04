import SimpleLightbox from 'simplelightbox';

export const renderImages = (images, gallery) => {
  const createCard = images
    .map(img => {
      return `<li class="photo-card">
  <a class="gallery-link" href="${img.largeImageURL}">
    <div class="card-content">
      <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
      <ul class="card-info-list">
        <li class="info-item">
          <p class="info-description">Likes</p>
          <p class="info-description-value">${img.likes}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Views</p>
          <p class="info-description-value">${img.views}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Comments</p>
          <p class="info-description-value">${img.comments}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Downloads</p>
          <p class="info-description-value">${img.downloads}</p>
        </li>
      </ul>
    </div>
  </a>
</li>

`;
    })
    .join('');
  gallery.innerHTML = createCard;

  let galleryLibrary = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  galleryLibrary.refresh();
};
