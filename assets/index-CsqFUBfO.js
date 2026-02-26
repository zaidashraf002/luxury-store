/* Luxury Way Store - Fixed Bundle */
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();

// Fixed Data Array with correct paths
const d = [
  { id: 1, name: "Rolex Submariner", price: 12500, image: "assets/rolex.jpg", category: "Watches" },
  { id: 2, name: "Cartier Love Bracelet", price: 6800, image: "assets/cartier-bracelet.png", category: "Jewelry" },
  { id: 3, name: "Chanel Classic Flap", price: 8200, image: "assets/chanel-bag.jpg", category: "Bags" },
  { id: 4, name: "Dior Lady Dior", price: 5500, image: "assets/dior-bag.jpg", category: "Bags" },
  { id: 5, name: "Gucci Marmont", price: 2400, image: "assets/gucci-bag.jpg", category: "Bags" },
  { id: 6, name: "Hermes Birkin 30", price: 25000, image: "assets/hermes-bag.jpg", category: "Bags" },
  { id: 7, name: "Prada Galleria", price: 3200, image: "assets/prada-bag.jpg", category: "Bags" },
  { id: 8, name: "Louboutin Pigalle", price: 795, image: "assets/louboutin.jpg", category: "Shoes" }
];

// Display Function
function renderStore() {
  const grid = document.getElementById("product-grid") || document.getElementById("root");
  if (grid) {
    grid.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 20px;">
        ${d.map(item => `
          <div style="background: #111; border: 1px solid #333; padding: 15px; border-radius: 8px; text-align: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;" onerror="this.src='https://via.placeholder.com/300?text=Image+Not+Found'">
            <h3 style="margin: 10px 0;">${item.name}</h3>
            <p style="color: #888;">${item.category}</p>
            <div style="font-weight: bold; color: #d4af37;">$${item.price.toLocaleString()}</div>
            <button style="margin-top: 10px; background: #d4af37; border: none; padding: 8px 15px; cursor: pointer;">Add to Cart</button>
          </div>
        `).join("")}
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", renderStore);
window.addToCart = (id) => alert("Item added to cart!");
