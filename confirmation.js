function displayConfirmation() {
    const order = JSON.parse(localStorage.getItem('order'));
    const billingInfo = JSON.parse(localStorage.getItem('billingInfo'));
    const confirmationSection = document.getElementById('confirmationSection');

    let confirmationHTML = `<h2>Thank you, ${billingInfo.name}!</h2>`;
    confirmationHTML += `<p>Your order has been placed and will be delivered to:</p>`;
    confirmationHTML += `<p>${billingInfo.address}</p>`;
    confirmationHTML += '<h3>Order Details:</h3>';

    for (let item in order) {
        if (item !== 'total') {
            confirmationHTML += `<p>${item.charAt(0).toUpperCase() + item.slice(1)} x ${order[item].quantity} = $${order[item].cost}</p>`;
        }
    }
    confirmationHTML += `<strong>Total: $${order.total}</strong>`;

    confirmationSection.innerHTML = confirmationHTML;
}

displayConfirmation();
