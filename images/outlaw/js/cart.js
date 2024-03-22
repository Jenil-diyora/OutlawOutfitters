let check = false;

function changeVal(el) {
    let parent = el.parentElement;
    let qtElement = parent.querySelector(".qt");
    let priceElement = parent.querySelector(".price");
    
    console.log("Quantity Element:", qtElement);
    console.log("Price Element:", priceElement);

    let qt = parseFloat(qtElement.innerHTML);
    let price = parseFloat(priceElement.innerHTML.replace("₹", "")); // Remove currency symbol

    console.log("Quantity:", qt);
    console.log("Price:", price);

    let eq = Math.round(price * qt * 100) / 100;

    console.log("Calculated Price:", eq);

    parent.querySelector(".full-price").innerHTML = eq + "₹";

    changeTotal();
}


function changeTotal() {
    let price = 0;
    document.querySelectorAll(".full-price").forEach(function (item) {
        price += parseFloat(item.innerHTML);
    });
    console.log(price);

    price = Math.round(price * 100) / 100;
    let tax = Math.round(price * 0.05 * 100) / 100;
    let shipping = parseFloat(document.querySelector(".shipping span").innerHTML);
    let fullPrice = Math.round((price + tax + shipping) * 100) / 100;

    if (price === 0) {
        fullPrice = 0;
    }

    document.querySelector(".subtotal span").innerHTML = price;
    document.querySelector(".tax span").innerHTML = tax;
    document.querySelector(".total span").innerHTML = fullPrice;
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".remove").forEach(function (item) {
        item.addEventListener("click", function () {
            let el = this;
            el.parentElement.parentElement.classList.add("removed");
            window.setTimeout(function () {
                el.parentElement.parentElement.style.display = 'none';
                el.parentElement.parentElement.remove();
                if (document.querySelectorAll(".product").length === 0) {
                    if (check) {
                        document.getElementById("cart").innerHTML = "<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>";
                    } else {
                        document.getElementById("cart").innerHTML = "<h1>No products!</h1>";
                    }
                }
                changeTotal();
            }, 200);
        });
    });

    document.querySelectorAll(".qt-plus").forEach(function (item) {
        item.addEventListener("click", function () {
            let qtElement = this.parentElement.querySelector(".qt");
            qtElement.innerHTML = parseInt(qtElement.innerHTML) + 1;
            this.parentElement.querySelector(".full-price").classList.add("added");

            let el = this;
            window.setTimeout(function () {
                el.parentElement.querySelector(".full-price").classList.remove("added");
                changeVal(el);
            }, 150);
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
            window.setTimeout(function () {
                el.parentElement.querySelector(".full-price").classList.remove("minused");
                changeVal(el);
            }, 150);
        });
    });

    window.setTimeout(function () {
        document.querySelectorAll(".is-open").forEach(function (item) {
            item.classList.remove("is-open");
        });
    }, 1200);
});
