// Display order summary on billing page
function displayOrderSummary() {
    const order = JSON.parse(localStorage.getItem('order'));
    const orderSummary = document.getElementById('orderSummary');
    let summaryHTML = '<h2>Order Summary</h2>';

    for (let item in order) {
        if (item !== 'total') {
            summaryHTML += `<p>${item.charAt(0).toUpperCase() + item.slice(1)} x ${order[item].quantity} = $${order[item].cost}</p>`;
        }
    }
    summaryHTML += `<strong>Total: $${order.total}</strong>`;
    orderSummary.innerHTML = summaryHTML;
}

function goToConfirmation() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (name && address) {
        const billingInfo = { name, address };
        localStorage.setItem('billingInfo', JSON.stringify(billingInfo));
        window.location.href = 'confirmation.html';
    } else {
        alert('Please fill in your billing details.');
    }
}

displayOrderSummary();
