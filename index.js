import{a as d,S as u,i as n}from"./assets/vendor-C_7oAj77.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const m=document.querySelector(".gallery");document.querySelector(".loader");function p(r){const a=r.map(e=>`
        <li class="gallery-item">  <div class="image-card">  <a class="gallery-link" href="${e.largeImageURL}">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-meta">
              <ul class="gallery-stats">
                <li class="stats-item">
                  <span class="stats-label">Likes</span>
                  <span class="stats-value">${e.likes}</span>
                </li>
                <li class="stats-item">
                  <span class="stats-label">Views</span>
                  <span class="stats-value">${e.views}</span>
                </li>
                <li class="stats-item">
                  <span class="stats-label">Comments</span>
                  <span class="stats-value">${e.comments}</span>
                </li>
                <li class="stats-item">
                  <span class="stats-label">Downloads</span>
                  <span class="stats-value">${e.downloads}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      `).join("");m.innerHTML=a}const f="48704705-de0108bea4c192368cade13d3",g="https://pixabay.com/api/",h=d.create({baseURL:g,params:{key:f,image_type:"photo",orientation:"horizontal",safesearch:!0}});function y(r,a=1,e=9){return h.get("/",{params:{q:r,page:a,per_page:e}}).then(l=>l.data.hits).catch(l=>(console.log("Error fetching images:",l),[]))}const c=document.querySelector(".search-form"),L=document.querySelector(".gallery"),o=document.querySelector(".loader");let v=new u(".gallery a");c.addEventListener("submit",r=>{r.preventDefault();const a=c.elements["search-query"].value.trim();if(!a){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L.innerHTML="",o.classList.remove("hidden"),y(a).then(e=>{if(e.length===0){o.classList.add("hidden"),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e),v.refresh(),setTimeout(()=>{o.classList.add("hidden")},200)}).catch(e=>{setTimeout(()=>{o.classList.add("hidden")},200),n.error({title:"Error",message:"An error occurred while fetching images",position:"topRight"})})});
//# sourceMappingURL=index.js.map
