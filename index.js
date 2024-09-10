import{a as p,i as f,S as u}from"./assets/vendor-C2ALA9WB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="45808598-d89d2298a0dffc9605af6e928";p.defaults.baseURL="https://pixabay.com/api/";const y=async(o,t,r,a="horizontal")=>{try{const e={params:{key:m,q:o,image_type:"photo",orientation:a,safesearch:"true",page:t,per_page:r}},i=(await p.get("",e)).data;if(i.hits.length===0)throw f.error({position:"topLeft",message:"Sorry, there are no images matching your search query. Please, try again!"}),new Error("No images found");return i}catch{console.log(err)}},h=(o,t)=>{const r=o.map(e=>`<li class="photo-card">
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

`).join("");t.innerHTML=r,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},l=document.querySelector(".form"),n=document.querySelector(".input-seach"),d=document.querySelector(".gallery"),c=document.querySelector(".js-loader");l.addEventListener("submit",async o=>{o.preventDefault();const t=n.value.trim();if(t===""){f.error({position:"topLeft",message:"Sorry, the field must not contain only spaces. Please, try again!"}),l.reset(),d.innerHTML="";return}c.classList.remove("is-hidden");try{const r=await y(t);n.value="",c.classList.add("is-hidden"),r.hits.length!==0&&h(r.hits,d)}catch{c.classList.add("is-hidden"),n.value="",console.error("Error fetching images:",error)}});
//# sourceMappingURL=index.js.map
