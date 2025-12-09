function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDiv = document.getElementById("cart-items");
  let total = 0;

  cartDiv.innerHTML = "";

  cart.forEach((item) => {
    cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

if (window.location.pathname.includes("cart.html")) {
  showCart();
}
