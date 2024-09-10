import{a as d,i as f,S as u}from"./assets/vendor-C2ALA9WB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="45808598-d89d2298a0dffc9605af6e928";d.defaults.baseURL="https://pixabay.com/api/";const y=async(o,s,r,a="horizontal")=>{try{const e={params:{key:m,q:o,image_type:"photo",orientation:a,safesearch:"true",page:s,per_page:r}},i=(await d.get("",e)).data;if(i.hits.length===0)throw f.error({position:"topLeft",message:"Sorry, there are no images matching your search query. Please, try again!"}),new Error("No images found");return i}catch{console.log(err)}},h=(o,s)=>{const r=o.map(e=>`<li class="photo-card">
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

`).join("");s.innerHTML=r,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},c=document.querySelector(".form"),n=document.querySelector(".input-seach"),l=document.querySelector(".gallery"),p=document.querySelector(".js-loader");c.addEventListener("submit",async o=>{o.preventDefault();const s=n.value.trim();if(s===""){f.error({position:"topLeft",message:"Sorry, the field must not contain only spaces. Please, try again!"}),c.reset(),l.innerHTML="";return}try{p.classList.remove("is-hidden");const r=await y(s);n.value="",p.classList.add("is-hidden"),r.hits.length!==0&&h(r.hits,l)}catch{n.value="",console.error("Error fetching images:",error)}});
//# sourceMappingURL=index.js.map
