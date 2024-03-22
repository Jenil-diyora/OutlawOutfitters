document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-toggle").addEventListener("click", function () {
        var element = document.querySelector(".search-popup"); // Use querySelector instead
        console.log(element);
        if (element) {
            if (element.classList.contains("search-active")) {
                element.classList.remove("search-active");
            } else {
                element.classList.add("search-active");
            }
        } else {
            console.error("Element not found!");
        }
    });

    document.getElementById("close-search").addEventListener("click", function () {
        var element = document.querySelector(".search-popup");
        if (element) {
            element.classList.remove("search-active");
        } else {
            console.error("Element not found!");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("product-modal");
    var productDetails = document.getElementById("product-details");
    var products = document.querySelectorAll(".product");

    products.forEach(function (product) {
        product.addEventListener("click", function (event) {
            // Check if the click is on the add to cart button
            if (event.target.classList.contains("primary-button")) {
                // Get the product details
                var productName = this.querySelector(".product-name").innerText;
                var productDetail = this.querySelector(".product-detail").innerText;
                var productPrice = this.querySelector(".product-price").innerText; // Get the product price correctly

                // You can add the product to the cart here.
                addToCart(productName, productDetail, productPrice);

                // You may also want to show a message or perform any other action to indicate that the product has been added to the cart.

                // Prevent the default action of the anchor tag, which may be to navigate to another page
                event.preventDefault();
            } else {
                var previewImage = this.querySelector(".preview-image"); // Get the preview image element
                var imageSrc = previewImage.getAttribute("src"); // Get the preview image source
                var productName = this.querySelector(".product-name").innerText;
                var productDetail = this.querySelector(".product-detail").innerText;
                var productPrice = this.querySelector(".product-price").innerText; // Get the product price correctly

                modal.style.display = "block"; // Display the modal on click
                modal.querySelector(".modal-content img").src = imageSrc; // Set the preview image source
                productDetails.innerHTML = "<h2>" + productName + "</h2><p>" + productDetail + "</p><h3>" + productPrice + "</h3>";

                // Show the preview image
                previewImage.style.display = "block";
            }
        });
    });

    var closeButton = modal.querySelector(".close");
    closeButton.onclick = function () {
        modal.style.display = "none"; // Hide the modal when close button is clicked
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Hide the modal when clicked outside of it
        }
    };
});

