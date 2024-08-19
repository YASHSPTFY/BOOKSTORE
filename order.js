document.addEventListener('DOMContentLoaded', () => {
    // Example order data
    const orderItems = [
        { name: 'Book Title 1', quantity: 2, price: 300 },
        { name: 'Book Title 2', quantity: 1, price: 150 },
        { name: 'Book Title 3', quantity: 3, price: 450 }
    ];

    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');

    let totalAmount = 0;

    orderItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Quantity: ${item.quantity}</p>
            <p>Price per item: Rs.${item.price}</p>
            <p>Total: Rs.${item.quantity * item.price}</p>
        `;
        orderSummary.appendChild(itemElement);

        totalAmount += item.quantity * item.price;
    });

    orderTotal.textContent = totalAmount;
});