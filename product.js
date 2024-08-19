document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const bookItems = document.querySelectorAll('.book-item');
    
    bookItems.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm) || searchTerm === '') {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    document.querySelectorAll('.book-item').forEach(item => {
        const plusBtn = item.querySelector('.plus');
        const minusBtn = item.querySelector('.minus');
        const quantityInput = item.querySelector('.quantity');
        const addToCartBtn = item.querySelector('.add-to-cart');
        const price = parseInt(item.dataset.price);

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = quantity + 1;
        });

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                quantityInput.value = quantity - 1;
            }
        });

        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                const book = {
                    title: item.querySelector('h3').innerText,
                    quantity: quantity,
                    price: price,
                    image: item.querySelector('img').src,
                    total: price * quantity
                };
                cart.push(book);
                updateCartCount();
                saveCartToLocalStorage();
            }
        });
    });

    function updateCartCount() {
        const totalItems = cart.reduce((sum, book) => sum + book.quantity, 0);
        cartCount.textContent = totalItems;
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});