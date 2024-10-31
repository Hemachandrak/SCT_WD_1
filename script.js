function goToBilling() {
    const menuPrices = { pizza: 10, burger: 7, pasta: 8, salad: 5 };
    const order = {};
    let total = 0;

    Object.keys(menuPrices).forEach(item => {
        const quantity = parseInt(document.getElementById(item).value) || 0;
        if (quantity > 0) {
            order[item] = {
                quantity: quantity,
                cost: quantity * menuPrices[item]
            };
            total += quantity * menuPrices[item];
        }
    });

    if (total > 0) {
        order.total = total;
        localStorage.setItem('order', JSON.stringify(order));
        window.location.href = 'billing.html';
    } else {
        alert('Please select at least one item.');
    }
}
