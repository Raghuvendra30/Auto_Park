function bookWash(packageName) {
    // Redirect to payment page with selected package details
    window.location.href = `payment.html?package=${encodeURIComponent(packageName)}`;
}