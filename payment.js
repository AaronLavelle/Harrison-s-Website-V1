document.addEventListener('DOMContentLoaded', function() {
    // Get plan details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const planName = urlParams.get('plan');
    const planPrice = urlParams.get('price');

    // Update the plan details in the UI
    if (planName && planPrice) {
        document.getElementById('plan-name').textContent = planName;
        document.getElementById('plan-price').textContent = `£${planPrice}`;
        document.getElementById('total-price').textContent = `£${planPrice}`;
        
        // Update the selected plan section
        document.getElementById('selected-plan').innerHTML = `
            <p>Selected Plan: <strong>${planName}</strong></p>
            <p>Price: <strong>£${planPrice}</strong></p>
        `;
    }

    // Card number formatting
    document.getElementById('cardNumber').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        e.target.value = formattedValue;
    });

    // Expiry date formatting
    document.getElementById('expiry').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (value.length > 2) {
            value = value.substr(0, 2) + '/' + value.substr(2);
        }
        e.target.value = value;
    });

    // Form submission
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        if (cardNumber.length !== 16) {
            alert('Please enter a valid card number');
            return;
        }

        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            alert('Please enter a valid expiry date (MM/YY)');
            return;
        }

        if (cvv.length !== 3) {
            alert('Please enter a valid CVV');
            return;
        }

        // Here you would typically send the payment data to your server
        alert('Payment processed successfully! Thank you for your purchase.');
        
        // Redirect to a confirmation page or back to services
        setTimeout(() => {
            window.location.href = 'services.html';
        }, 2000);
    });
}); 