document.addEventListener('DOMContentLoaded', function() {
    const purchaseHistory = [
        {
            title: 'Book Title 1',
            quantity: 2,
            price: 300
        },
        {
            title: 'Book Title 2',
            quantity: 1,
            price: 150
        },
        {
            title: 'Book Title 3',
            quantity: 3,
            price: 450
        }
    ];

    const purchaseHistoryContainer = document.getElementById('purchase-history');
    let totalAmount = 0;

    purchaseHistory.forEach(item => {
        const itemTotal = item.quantity * item.price;
        totalAmount += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'purchase-item';
        itemElement.innerHTML = `
            <div class="book-title">${item.title}</div>
            <div class="purchase-details">Quantity: ${item.quantity}</div>
            <div class="purchase-details">Price: Rs.${item.price}</div>
            <div class="purchase-details">Total: Rs.${itemTotal}</div>
        `;
        purchaseHistoryContainer.appendChild(itemElement);
    });

    const totalAmountElement = document.createElement('div');
    totalAmountElement.className = 'total-amount';
    totalAmountElement.textContent =Grand ;Total: Rs.$;{totalAmount};
    purchaseHistoryContainer.appendChild(totalAmountElement);
});