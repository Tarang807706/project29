// Cart state
let cartCount = 0;
let cartItems = [];

// Add to cart function
function addToCart(name, price) {
    cartCount++;
    cartItems.push({ name, price });

    // Update cart display
    document.getElementById('cart').textContent = cartCount;

    // Show toast notification
    showToast(`✓ ${name} added to cart`);
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Search functionality
document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.getElementById('search').value.trim();
    if (query) {
        alert(`Searching for: "${query}"`);
        // In a real project: redirect to search results page
    }
});

document.getElementById('search').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
            alert(`Searching for: "${query}"`);
        }
    }
});

// Save cart count to localStorage so cart.html can read it
function saveCart() {
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Wrap addToCart to also save
const _addToCart = addToCart;
window.addToCart = function(name, price) {
    _addToCart(name, price);
    saveCart();
};
