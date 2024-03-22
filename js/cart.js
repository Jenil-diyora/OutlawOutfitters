document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".remove").forEach(function (item) {
        item.addEventListener("click", function () {
            let el = this;
            el.parentElement.parentElement.classList.add("removed");
        });
    });

    document.querySelectorAll(".qt-plus").forEach(function (item) {
        item.addEventListener("click", function () {
            let qtElement = this.parentElement.querySelector(".qt");
            qtElement.innerHTML = parseInt(qtElement.innerHTML) + 1;
            this.parentElement.querySelector(".full-price").classList.add("added");

            let el = this;
        });
    });

    document.querySelectorAll(".qt-minus").forEach(function (item) {
        item.addEventListener("click", function () {
            let qtElement = this.parentElement.querySelector(".qt");
            if (parseInt(qtElement.innerHTML) > 1) {
                qtElement.innerHTML = parseInt(qtElement.innerHTML) - 1;
            }
            this.parentElement.querySelector(".full-price").classList.add("minused");

            let el = this;
        });
    });

});


document.addEventListener("DOMContentLoaded", function () {
    function updateCart() {
        let subTotal = 0;
        let tax = 0;
        let shipping = 200;
        let total = 0;

        // Loop through each product in the cart
        document.querySelectorAll(".product").forEach(function (product) {
            // Get quantity and price of each product
            const quantity = parseInt(product.querySelector(".qt").innerHTML);
            const price = parseInt(product.querySelector(".full-price").textContent.trim().replace(/[^\d]/g, ''));

            // Calculate subtotal
            subTotal += quantity * price;
        });

        // Calculate tax (9% of subtotal)
        tax = 0.09 * subTotal;

        // Calculate total
        total = subTotal + tax + shipping;

        // Update subtotal, tax, shipping, and total in the footer
        document.querySelector(".subtotal span").textContent = subTotal.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
        document.querySelector(".tax span").textContent = tax.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
        document.querySelector(".shipping span").textContent = shipping.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
        document.querySelector(".total span").textContent = total.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    }

    // Update cart on DOMContentLoaded
    updateCart();

    // Add event listeners for quantity modification and product removal
    document.querySelectorAll(".qt-plus, .qt-minus, .remove").forEach(function (item) {
        item.addEventListener("click", function () {
            updateCart(); // Update cart whenever there's a change
        });
    });
});


document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
        if (!button.classList.contains("loading")) {
            button.classList.add("loading");
            setTimeout(() => {
                button.classList.remove("loading");
                setTimeout(() => {
                    // Redirect to other page after 3.4s
                    window.location.href = "detail.html";
                }, 500);
            }, 3700);
        }
        // e.preventDefault();
    })
);
