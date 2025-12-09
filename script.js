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
// --- CART SYSTEM ---

let cartCount = localStorage.getItem("cartCount")
    ? parseInt(localStorage.getItem("cartCount"))
    : 0;

// Update cart count on page load
function updateCartUI() {
    const cartDisplay = document.getElementById("cart-count");
    if (cartDisplay) cartDisplay.innerText = cartCount;
}

// Add product to cart
function addToCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    updateCartUI();
}

// Run this when page loads
document.addEventListener("DOMContentLoaded", updateCartUI);
function signup() {
  const user = {
    name: document.getElementById("signupName").value,
    email: document.getElementById("signupEmail").value,
    password: document.getElementById("signupPassword").value
  };

  localStorage.setItem("farmosUser", JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
}

function login() {
  const savedUser = JSON.parse(localStorage.getItem("farmosUser"));
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (savedUser && email === savedUser.email && password === savedUser.password) {
    alert("Login successful!");
    window.location.href = "product.html";
  } else {
    alert("Invalid login details");
  }
}
