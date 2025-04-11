/* File: script.js */

// Event listener for the "Shop Now" button to scroll to the products section
document.getElementById("shop-now").addEventListener("click", () => {
    window.location.href = "#products";
});

// Generate and display a list of products dynamically
const productList = document.getElementById("product-list");
const products = [
    { name: "T-Shirt", price: "$20" },
    { name: "Hoodie", price: "$40" },
    { name: "Jeans", price: "$50" }
];

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
    productList.appendChild(productDiv);
});
