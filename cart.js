// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price, image) {
    let item = { name, price, image };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// Display cart items on cart.html
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        totalPrice += item.price;

        cartItems.innerHTML += `
            <div class="cart-card">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "₹" + totalPrice;
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Checkout (save customer order)
function placeOrder() {
    let name = document.getElementById("cust-name").value;
    let phone = document.getElementById("cust-phone").value;
    let address = document.getElementById("cust-address").value;

    if (!name || !phone || !address) {
        alert("Please fill all details");
        return;
    }

    localStorage.removeItem("cart"); // Cart empty
    alert("Order placed successfully!");

    window.location.href = "index.html";
                 }
