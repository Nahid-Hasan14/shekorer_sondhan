// async function loadProducts() {
//   try {
//     const res = await fetch("/api/products");
//     const products = await res.json();

//     const grid = document.getElementById("productGrid");
//     grid.innerHTML = "";

//     products.forEach(p => {
//       grid.innerHTML += `
//         <div class="product-card">
//           <img src="${p.image}" alt="${p.name}">
//           <h3>${p.name}</h3>
//           <p>৳ ${p.price}</p>

//           <button onclick="openSingleOrder('${p.name}', ${p.price})">
//             অর্ডার করুন
//           </button>
//         </div>
//       `;
//     });

//   } catch (err) {
//     console.error(err);
//     document.getElementById("productGrid").innerHTML =
//       "<p>Products load করতে সমস্যা হচ্ছে</p>";
//   }
// }

// window.addEventListener("DOMContentLoaded", loadProducts);



async function loadProducts() {
  try {
    const res = await fetch("/api/products"); // Vercel API
    const products = await res.json();

    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    products.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>৳ ${p.price}</p>
          <button onclick="openSingleOrder('${p.name}', ${p.price})">
            অর্ডার করুন
          </button>
        </div>
      `;
    });

  } catch (err) {
    console.error(err);
    document.getElementById("productGrid").innerHTML =
      "<p>Products load করতে সমস্যা হচ্ছে</p>";
  }
}

window.addEventListener("DOMContentLoaded", loadProducts);
