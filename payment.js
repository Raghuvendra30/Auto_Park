document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const packageName = urlParams.get("package");
    document.getElementById("selected-package").innerText = `Selected Package: ${packageName}`;

    document.getElementById("payButton").addEventListener("click", function() {
        initiatePayment(packageName);
    });
});

function initiatePayment(packageName) {
    var options = {
        "key": "YOUR_RAZORPAY_API_KEY",  // Replace with your Razorpay API Key
        "amount": getPackagePrice(packageName) * 100,  // Convert amount to paisa (₹1 = 100 paisa)
        "currency": "INR",
        "name": "Auto Park",
        "description": packageName,
        "image": "logo.png",  // Add your logo URL
        "handler": function(response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            window.location.href = "success.html";  // Redirect to success page after payment
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}

function getPackagePrice(packageName) {
    switch(packageName) {
        case "Basic Wash": return 10;
        case "Premium Wash": return 20;
        case "Deluxe Wash": return 35;
        default: return 0;
    }
}