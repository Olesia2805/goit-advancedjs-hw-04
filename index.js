import{i as u,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(o,s="horizontal"){return fetch(`https://pixabay.com/api/?key=45808598-d89d2298a0dffc9605af6e928&q=${o}&image_type=photo&orientation=${s}&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(t.hits.length===0)throw u.error({position:"topLeft",message:"Sorry, there are no images matching your search query. Please, try again!"}),new Error(t.statusText);return t}).catch(t=>{console.log(t)})}function m(o,s){const t=o.map(e=>`<li class="photo-card">
  <a class="gallery-link" href="${e.largeImageURL}">
    <div class="card-content">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      <ul class="card-info-list">
        <li class="info-item">
          <p class="info-description">Likes</p>
          <p class="info-description-value">${e.likes}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Views</p>
          <p class="info-description-value">${e.views}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Comments</p>
          <p class="info-description-value">${e.comments}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Downloads</p>
          <p class="info-description-value">${e.downloads}</p>
        </li>
      </ul>
    </div>
  </a>
</li>
`).join("");s.innerHTML=t,new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".form"),l=document.querySelector(".input-seach"),c=document.querySelector(".gallery"),f=document.querySelector(".js-loader");a.addEventListener("submit",o=>{o.preventDefault();const s=l.value.trim();if(s===""){u.error({position:"topLeft",message:"Sorry, the field must not contain only spaces. Please, try again!"}),a.reset();return}c.innerHTML="",f.classList.remove("is-hidden"),d(s).finally(()=>{f.classList.add("is-hidden"),l.value=""}).then(t=>{t.hits.length!==0&&m(t.hits,c)}).catch(t=>{console.error("Error fetching images:",t)})});
//# sourceMappingURL=index.js.map
