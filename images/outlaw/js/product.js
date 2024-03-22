document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("product-modal");
    var productDetails = document.getElementById("product-details");
    var products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        product.addEventListener("click", function() {
            var previewImage = this.querySelector(".preview-image"); // Get the preview image element
            var imageSrc = previewImage.getAttribute("src"); // Get the preview image source
            var productName = this.querySelector(".product-name").innerText;
            var productDetail = this.querySelector(".product-detail").innerText;

            modal.style.display = "block"; // Display the modal on click
            modal.querySelector(".modal-content img").src = imageSrc; // Set the preview image source
            productDetails.innerHTML = "<h2>" + productName + "</h2><p>" + productDetail + "</p>";

            // Show the preview image
            previewImage.style.display = "block";
        });
    });

    var closeButton = modal.querySelector(".close");
    closeButton.onclick = function() {
        modal.style.display = "none"; // Hide the modal when close button is clicked
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Hide the modal when clicked outside of it
        }
    };
});
