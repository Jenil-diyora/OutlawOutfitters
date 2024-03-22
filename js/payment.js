function Redirect() {
    var selectedPaymentMethod = document.querySelector('input[name="value-radio"]:checked');
    if (selectedPaymentMethod) {
        var selectedMethodValue = selectedPaymentMethod.value;
        if (selectedMethodValue === 'cash-on-delivery') {
            window.location.href = "finish.html";
        } else if (selectedMethodValue === 'credit-card') {
            window.location.href = "creditCard.html";
        } else if (selectedMethodValue === 'debit-card') {
            window.location.href = "debitCard.html";
        } else if (selectedMethodValue === 'upi') {
            window.location.href = "upi.html";
        }
    }
}