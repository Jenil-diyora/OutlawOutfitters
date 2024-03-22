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