document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((book, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>Rs.${book.price}</p>
                <div class="quantity-controls">
                    <button class="minus">-</button>
                    <input type="text" value="${book.quantity}" class="quantity" readonly>
                    <button class="plus">+</button>
                </div>
                <p>Rs.${book.total}</p>
                <button class="remove">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            const plusBtn = cartItem.querySelector('.plus');
            const minusBtn = cartItem.querySelector('.minus');
            const removeBtn = cartItem.querySelector('.remove');
            const quantityInput = cartItem.querySelector('.quantity');

            plusBtn.addEventListener('click', () => {
                updateQuantity(index, 1);
            });

            minusBtn.addEventListener('click', () => {
                updateQuantity(index, -1);
            });

            removeBtn.addEventListener('click', () => {
                removeItem(index);
            });
        });

        updateTotalAmount();
    }

    function updateQuantity(index, change) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].total = cart[index].quantity * cart[index].price;
        }
        saveCartToLocalStorage();
        renderCartItems();
    }

    function removeItem(index) {
        cart.splice(index, 1);
        saveCartToLocalStorage();
        renderCartItems();
    }

    function updateTotalAmount() {
        const total = cart.reduce((sum, book) => sum + book.total, 0);
        totalAmount.textContent = total;
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    renderCartItems();
});