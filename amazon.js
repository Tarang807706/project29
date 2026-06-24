
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 1000);

});

// CART

let cartCount = 0;

let cartItems = [];

// ADD TO CART

function addToCart(name, price) {

    cartCount++;

    cartItems.push({
        name,
        price
    });

    document.getElementById("cartCount").innerText = cartCount;

    updateCart();

    showToast(name + " added to cart");

}

// UPDATE CART

function updateCart() {

    const cart = document.getElementById("cartItems");

    cart.innerHTML = "";

    let total = 0;

    cartItems.forEach((item) => {

        total += item.price;

        cart.innerHTML += `

<div class="cart-item">

    <h4>${item.name}</h4>

    <p>₹${item.price}</p>

</div>

`;

    });

    cart.innerHTML += `

    <h3 style="margin-top:20px;">
        Total : ₹${total}
    </h3>

    `;

}

// TOAST

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}

// SIDEBAR

document.getElementById("cartBtn").addEventListener("click", () => {

    document.getElementById("sidebar").classList.toggle("active");

});

// SEARCH

function searchProducts() {

    const input = document.getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        const title = card.querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(input)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}

// ENTER SEARCH

document.getElementById("searchInput")
    .addEventListener("keyup", (e) => {

        if (e.key === "Enter") {

            searchProducts();

        }

    });

// NAVBAR SHADOW

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.5)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});

