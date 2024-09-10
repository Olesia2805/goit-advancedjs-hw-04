import{a as g,i as h,S as w}from"./assets/vendor-C2ALA9WB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const S="45808598-d89d2298a0dffc9605af6e928";g.defaults.baseURL="https://pixabay.com/api/";const L=async(o,s,n=15,l="horizontal")=>{try{const e={params:{key:S,q:o,page:s,orientation:l,per_page:n,image_type:"photo",safesearch:"true"}},r=(await g.get("",e)).data;if(r.hits.length===0)throw h.error({position:"topLeft",message:"Sorry, there are no images matching your search query. Please, try again!"}),new Error("No images found");return r}catch{console.log(err)}},v=(o,s)=>{const n=o.map(e=>`<li class="photo-card">
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

`).join("");s.insertAdjacentHTML("beforeend",n),new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()};let c=1,d="",f=15,y=0;const b=document.querySelector(".form"),p=document.querySelector(".input-seach"),u=document.querySelector(".gallery"),a=document.querySelector(".js-loader"),i=document.querySelector(".js-loadmore"),m=document.querySelector(".scroll-to-top"),E=async o=>{if(o.preventDefault(),i.classList.add("is-hidden"),d=p.value.trim(),u.innerHTML="",d===""){h.error({position:"topLeft",message:"Sorry, the field must not contain only spaces. Please, try again!"}),b.reset();return}a.classList.remove("is-hidden"),c=1;try{const s=await L(d,c,f);if(p.value="",a.classList.add("is-hidden"),s.hits.length!==0&&v(s.hits,u),s.total<=f)return;i.classList.remove("is-hidden")}catch{a.classList.add("is-hidden"),p.value="",console.error("Error fetching images:",error)}},q=async o=>{try{c++,i.classList.add("is-hidden"),a.classList.remove("is-hidden");const s=await L(d,c,f);s.hits.length!==0&&v(s.hits,u),y=u.querySelector("li").getBoundingClientRect().height,scrollBy({top:y*2,behavior:"smooth"}),i.classList.remove("is-hidden"),a.classList.add("is-hidden"),c>=s.totalHits&&(i.classList.add("is-hidden"),h.info({position:"topLeft",message:"We're sorry, but you've reached the end of search results."}))}catch(s){i.classList.remove("is-hidden"),a.classList.add("is-hidden"),console.log(s)}};window.onscroll=function(){P()};const P=o=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?m.style.display="block":m.style.display="none"},O=o=>{window.scrollTo({top:0,behavior:"smooth"})};b.addEventListener("submit",E);i.addEventListener("click",q);m.addEventListener("click",O);
//# sourceMappingURL=index.js.map
