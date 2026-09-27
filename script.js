// const header = `
// <header class="site-header">
//   <div class="container nav">
//     <a class="brand" href="index.html"><span class="brand-mark">💧</span>AquaZen</a>
//     <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
//     <nav class="nav-links">
//       <a href="index.html">Home</a><a href="about.html">About</a><a href="how-it-works.html">How It Works</a><a href="pricing.html">Pricing</a><a href="delivery-areas.html">Areas</a><a href="contact.html">Contact</a>
//     </nav>
//     <div class="nav-actions"><a class="btn btn-outline" href="login.html">Login</a><a class="btn btn-primary" href="pricing.html">Order Now</a></div>
//   </div>
// </header>`;
// const footer = `
// <footer class="site-footer">
//   <div class="container">
//     <div class="footer-grid">
//       <div><a class="brand footer-brand" href="index.html"><span class="brand-mark">💧</span>AquaZen</a><p style="margin-top:15px;font-size:12px">Fresh 20-liter drinking water delivered to your doorstep.</p></div>
//       <div><h4>Explore</h4><a href="about.html">About Us</a><a href="how-it-works.html">How It Works</a><a href="pricing.html">Pricing</a><a href="delivery-areas.html">Delivery Areas</a></div>
//       <div><h4>Support</h4><a href="contact.html">Contact Us</a><a href="login.html">Login</a><a href="register.html">Register</a></div>
//       <div><h4>Legal</h4><a href="terms.html">Terms & Conditions</a><a href="privacy.html">Privacy Policy</a></div>
//     </div>
//     <div class="footer-copy"><span>© 2026 AquaZen Water. All rights reserved.</span><span><a href="terms.html">Terms</a><a href="privacy.html">Privacy</a></span></div>
//   </div>
// </footer>`;

// document.getElementById("site-header").innerHTML = header;
// document.getElementById("site-footer").innerHTML = footer;

// const toggle = document.querySelector(".menu-toggle");
// const links = document.querySelector(".nav-links");
// if(toggle) toggle.addEventListener("click", () => {
//   const open = links.classList.toggle("open");
//   toggle.setAttribute("aria-expanded", open);
//   toggle.textContent = open ? "✕" : "☰";
// });

// const current = location.pathname.split("/").pop() || "index.html";
// document.querySelectorAll(".nav-links a").forEach(a => {
//   if(a.getAttribute("href") === current) a.classList.add("active");
// });

// document.querySelectorAll("form[data-form]").forEach(form => {
//   form.addEventListener("submit", e => {
//     e.preventDefault();
//     const msg = form.querySelector(".form-message");
//     const type = form.dataset.form;
//     if(type === "login") msg.textContent = "Demo login submitted. Connect this form to your backend/authentication service for real accounts.";
//     else if(type === "register") msg.textContent = "Demo registration submitted. Connect this form to your backend/database for real account creation.";
//     else if(type === "order") msg.textContent = "Order request received in demo mode. Connect a backend or WhatsApp/API workflow to process real orders.";
//     else msg.textContent = "Thanks! Your message has been submitted in demo mode. Connect a backend/email service to receive it.";
//     form.reset();
//   });
// });


/* =====================================
   AQUAZEN HEADER
===================================== */

const header = `

<header class="site-header">

    <div class="container nav">

        <a
            class="brand"
            href="index.html"
        >
            <span class="brand-mark">💧</span>
            AquaZen
        </a>


        <button
            class="menu-toggle"
            aria-label="Open menu"
            aria-expanded="false"
        >
            ☰
        </button>


        <nav class="nav-links">

            <a href="index.html">
                Home
            </a>

            <a href="about.html">
                About
            </a>

            <a href="how-it-works.html">
                How It Works
            </a>

            <a href="pricing.html">
                Pricing
            </a>

            <a href="delivery-areas.html">
                Areas
            </a>

            <a href="contact.html">
                Contact
            </a>

        </nav>


        <div class="nav-actions">

            <!-- CART -->

            <a
                href="cart.html"
                class="cart-link"
                aria-label="Shopping Cart"
            >
                <span class="cart-icon">
                    🛒
                </span>

                <span
                    id="cartCount"
                    class="cart-count"
                >
                    0
                </span>
            </a>


            <!-- LOGIN -->

            <a
                class="btn btn-outline"
                href="login.html"
            >
                Login
            </a>


            <!-- ORDER NOW -->

            <a
                class="btn btn-primary"
                href="pricing.html"
            >
                Order Now
            </a>

        </div>

    </div>

</header>

`;



/* =====================================
   AQUAZEN FOOTER
===================================== */

const footer = `

<footer class="site-footer">

    <div class="container">

        <div class="footer-grid">


            <div>

                <a
                    class="brand footer-brand"
                    href="index.html"
                >

                    <span class="brand-mark">
                        💧
                    </span>

                    AquaZen

                </a>


                <p
                    style="margin-top:15px;font-size:12px"
                >

                    Fresh 20-liter drinking water
                    delivered to your doorstep.

                </p>

            </div>



            <div>

                <h4>
                    Explore
                </h4>

                <a href="about.html">
                    About Us
                </a>

                <a href="how-it-works.html">
                    How It Works
                </a>

                <a href="pricing.html">
                    Pricing
                </a>

                <a href="delivery-areas.html">
                    Delivery Areas
                </a>

            </div>



            <div>

                <h4>
                    Support
                </h4>

                <a href="contact.html">
                    Contact Us
                </a>

                <a href="login.html">
                    Login
                </a>

                <a href="register.html">
                    Register
                </a>

                <a href="cart.html">
                    Cart
                </a>

            </div>



            <div>

                <h4>
                    Legal
                </h4>

                <a href="terms.html">
                    Terms & Conditions
                </a>

                <a href="privacy.html">
                    Privacy Policy
                </a>

            </div>

        </div>



        <div class="footer-copy">

            <span>

                © 2026 AquaZen Water.
                All rights reserved.

            </span>


            <span>

                <a href="terms.html">
                    Terms
                </a>

                <a href="privacy.html">
                    Privacy
                </a>

            </span>

        </div>

    </div>

</footer>

`;



/* =====================================
   LOAD HEADER & FOOTER
===================================== */

const headerElement =
    document.getElementById("site-header");

if (headerElement) {
    headerElement.innerHTML = header;
}


const footerElement =
    document.getElementById("site-footer");

if (footerElement) {
    footerElement.innerHTML = footer;
}



/* =====================================
   MOBILE MENU
===================================== */

const toggle =
    document.querySelector(".menu-toggle");

const links =
    document.querySelector(".nav-links");


if (toggle && links) {

    toggle.addEventListener(
        "click",
        () => {

            const open =
                links.classList.toggle("open");


            toggle.setAttribute(
                "aria-expanded",
                open
            );


            toggle.textContent =
                open ? "✕" : "☰";

        }
    );

}



/* =====================================
   ACTIVE NAVIGATION
===================================== */

const current =
    location.pathname
        .split("/")
        .pop()
        || "index.html";


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        if (
            link.getAttribute("href")
            === current
        ) {

            link.classList.add("active");

        }

    });



/* =====================================
   AQUAZEN CART STORAGE
===================================== */

let cart =
    JSON.parse(
        localStorage.getItem(
            "aquaZenCart"
        )
    ) || [];



/* =====================================
   SAVE CART
===================================== */

function saveCart() {

    localStorage.setItem(
        "aquaZenCart",
        JSON.stringify(cart)
    );

}



/* =====================================
   GET TOTAL CART ITEMS
===================================== */

function getCartItemCount() {

    let count = 0;


    cart.forEach(item => {

        count +=
            Number(item.quantity) || 0;

    });


    return count;

}



/* =====================================
   GET CART TOTAL
===================================== */

function getCartTotal() {

    let total = 0;


    cart.forEach(item => {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 0;


        total +=
            price * quantity;

    });


    return total;

}



/* =====================================
   UPDATE HEADER CART
===================================== */

function updateCartCount() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (!cartCount) {
        return;
    }


    const totalItems =
        getCartItemCount();


    cartCount.textContent =
        totalItems;


    if (totalItems > 0) {

        cartCount.style.display =
            "flex";

    } else {

        cartCount.style.display =
            "none";

    }

}



/* =====================================
   QUANTITY ON PRICING CARDS
===================================== */

function changeQuantity(
    id,
    change
) {

    const quantityElement =
        document.getElementById(id);


    if (!quantityElement) {
        return;
    }


    let quantity =
        parseInt(
            quantityElement.textContent
        ) || 0;


    quantity += change;


    if (quantity < 0) {
        quantity = 0;
    }


    if (quantity > 5) {
        quantity = 5;
    }


    quantityElement.textContent =
        quantity;

}



/* =====================================
   ADD TO CART
===================================== */

function addToCart(
    floor,
    price,
    quantityId
) {

    const quantityElement =
        document.getElementById(
            quantityId
        );


    if (!quantityElement) {
        return;
    }


    const quantity =
        parseInt(
            quantityElement.textContent
        ) || 0;


    if (quantity <= 0) {

        showCartMessage(
            "Please select at least 1 water can."
        );

        return;

    }


    const existingItem =
        cart.find(
            item =>
                item.floor === floor
        );


    if (existingItem) {

        existingItem.quantity +=
            quantity;


        if (
            existingItem.quantity > 5
        ) {

            existingItem.quantity = 5;

            showCartMessage(
                "Maximum 5 cans allowed for this floor."
            );

        }

    } else {

        cart.push({

            floor: floor,

            price: Number(price),

            quantity: quantity

        });

    }


    saveCart();


    quantityElement.textContent =
        "0";


    updateCartCount();


    showCartMessage(
        quantity +
        " can(s) added to cart."
    );

}



/* =====================================
   CART MESSAGE
===================================== */

function showCartMessage(message) {

    let messageBox =
        document.getElementById(
            "cartMessage"
        );


    if (!messageBox) {

        messageBox =
            document.createElement(
                "div"
            );


        messageBox.id =
            "cartMessage";


        messageBox.className =
            "cart-message";


        document.body.appendChild(
            messageBox
        );

    }


    messageBox.textContent =
        message;


    messageBox.classList.add(
        "show"
    );


    clearTimeout(
        window.aquaZenMessageTimer
    );


    window.aquaZenMessageTimer =
        setTimeout(
            () => {

                messageBox.classList.remove(
                    "show"
                );

            },
            2000
        );

}



/* =====================================
   FORM HANDLING
===================================== */

document
    .querySelectorAll(
        "form[data-form]"
    )
    .forEach(form => {


        form.addEventListener(
            "submit",
            e => {

                e.preventDefault();


                const msg =
                    form.querySelector(
                        ".form-message"
                    );


                const type =
                    form.dataset.form;



                /* =====================
                   LOGIN
                ===================== */

                if (type === "login") {

                    const email =
                        form.querySelector(
                            'input[name="email"]'
                        ).value.trim();


                    const password =
                        form.querySelector(
                            'input[name="password"]'
                        ).value.trim();


                    if (
                        email &&
                        password
                    ) {

                        localStorage.setItem(
                            "aquaZenLoggedIn",
                            "true"
                        );


                        localStorage.setItem(
                            "aquaZenUser",
                            email
                        );


                        if (msg) {

                            msg.textContent =
                                "Login successful! Redirecting...";

                        }


                        setTimeout(
                            () => {

                                window.location.href =
                                    "pricing.html";

                            },
                            1000
                        );

                    }

                }



                /* =====================
                   REGISTER
                ===================== */

                else if (
                    type === "register"
                ) {

                    localStorage.setItem(
                        "aquaZenLoggedIn",
                        "true"
                    );


                    const emailInput =
                        form.querySelector(
                            'input[name="email"]'
                        );


                    if (emailInput) {

                        localStorage.setItem(
                            "aquaZenUser",
                            emailInput.value
                                .trim()
                        );

                    }


                    if (msg) {

                        msg.textContent =
                            "Registration successful! Redirecting...";

                    }


                    setTimeout(
                        () => {

                            window.location.href =
                                "pricing.html";

                        },
                        1000
                    );

                }



                /* =====================
                   ORDER
                ===================== */

                else if (
                    type === "order"
                ) {

                    const loggedIn =
                        localStorage.getItem(
                            "aquaZenLoggedIn"
                        );


                    if (
                        loggedIn !== "true"
                    ) {

                        alert(
                            "Please login before placing an order."
                        );


                        window.location.href =
                            "login.html";


                        return;

                    }


                    const nameInput =
                        form.querySelector(
                            'input[name="name"]'
                        );


                    const phoneInput =
                        form.querySelector(
                            'input[name="phone"]'
                        );


                    const quantityInput =
                        form.querySelector(
                            'select[name="quantity"]'
                        );


                    const floorInput =
                        form.querySelector(
                            'select[name="floor"]'
                        );


                    const areaInput =
                        form.querySelector(
                            'input[name="area"]'
                        );


                    const name =
                        nameInput
                            ? nameInput.value
                                .trim()
                            : "";


                    const phone =
                        phoneInput
                            ? phoneInput.value
                                .trim()
                            : "";


                    const quantity =
                        quantityInput
                            ? quantityInput.value
                            : "1";


                    const floor =
                        floorInput
                            ? floorInput.value
                            : "30";


                    let floorText =
                        "Ground Floor";


                    if (floorInput) {

                        floorText =
                            floorInput.options[
                                floorInput.selectedIndex
                            ].text;

                    }


                    const area =
                        areaInput
                            ? areaInput.value
                                .trim()
                            : "";


                    const orderId =
                        "AZ" +
                        Math.floor(
                            100000 +
                            Math.random() *
                            900000
                        );


                    const total =
                        Number(quantity) *
                        Number(floor);


                    /* SAVE LAST ORDER */

                    localStorage.setItem(
                        "aquaZenLastOrder",
                        JSON.stringify({

                            orderId,
                            name,
                            phone,
                            quantity,
                            floor:
                                floorText,
                            area,
                            total

                        })
                    );


                    console.log(
                        "AquaZen Order:",
                        {
                            orderId,
                            name,
                            phone,
                            quantity,
                            floor:
                                floorText,
                            area,
                            total
                        }
                    );


                    if (msg) {

                        msg.textContent =
                            "Order placed successfully!";

                    }


                    setTimeout(
                        () => {

                            form.reset();

                        },
                        500
                    );

                }



                /* =====================
                   OTHER FORMS
                ===================== */

                else {

                    if (msg) {

                        msg.textContent =
                            "Thanks! Your message has been submitted in demo mode.";

                    }


                    form.reset();

                }

            }
        );

    });



/* =====================================
   CART PAGE
===================================== */

function renderCartPage() {

    const cartItemsContainer =
        document.getElementById(
            "cartItems"
        );


    /*
       This function only runs on
       cart.html because cart.html
       contains #cartItems.
    */

    if (!cartItemsContainer) {
        return;
    }


    /* Reload latest cart */

    cart =
        JSON.parse(
            localStorage.getItem(
                "aquaZenCart"
            )
        ) || [];


    cartItemsContainer.innerHTML =
        "";



    /* =========================
       CART ELEMENTS
    ========================== */

    const cartSection =
        document.querySelector(
            ".cart-section"
        );


    const emptyCart =
        document.getElementById(
            "emptyCart"
        );


    const cartTotalPrice =
        document.getElementById(
            "cartTotalPrice"
        );


    const cartTotalCans =
        document.getElementById(
            "cartTotalCans"
        );


    const cartItemBadge =
        document.getElementById(
            "cartItemBadge"
        );


    const checkoutButton =
        document.getElementById(
            "cartCheckoutBtn"
        );



    /* =========================
       EMPTY CART
    ========================== */

    if (cart.length === 0) {

        if (cartSection) {

            cartSection.style.display =
                "none";

        }


        if (emptyCart) {

            emptyCart.style.display =
                "block";

        }


        if (cartTotalPrice) {

            cartTotalPrice.textContent =
                "₹0";

        }


        if (cartTotalCans) {

            cartTotalCans.textContent =
                "0";

        }


        if (cartItemBadge) {

            cartItemBadge.textContent =
                "0 items";

        }


        if (checkoutButton) {

            checkoutButton.disabled =
                true;

        }


        updateCartCount();

        return;

    }



    /* =========================
       SHOW CART
    ========================== */

    if (cartSection) {

        cartSection.style.display =
            "block";

    }


    if (emptyCart) {

        emptyCart.style.display =
            "none";

    }


    if (checkoutButton) {

        checkoutButton.disabled =
            false;

    }



    /* =========================
       TOTALS
    ========================== */

    const totalCans =
        getCartItemCount();


    const totalPrice =
        getCartTotal();


    if (cartTotalCans) {

        cartTotalCans.textContent =
            totalCans;

    }


    if (cartTotalPrice) {

        cartTotalPrice.textContent =
            "₹" + totalPrice;

    }


    if (cartItemBadge) {

        cartItemBadge.textContent =
            totalCans +
            (
                totalCans === 1
                    ? " item"
                    : " items"
            );

    }



    /* =========================
       CREATE CART ITEMS
    ========================== */

    cart.forEach(
        (item, index) => {

            const itemBox =
                document.createElement(
                    "div"
                );


            itemBox.className =
                "cart-page-item";


            const price =
                Number(item.price) || 0;


            const quantity =
                Number(item.quantity) || 0;


            const subtotal =
                price * quantity;



            /* ICON */

            const iconBox =
                document.createElement(
                    "div"
                );


            iconBox.className =
                "cart-product-icon";


            iconBox.innerHTML =
                '<i class="fa-solid fa-bottle-water"></i>';



            /* INFO */

            const infoBox =
                document.createElement(
                    "div"
                );


            infoBox.className =
                "cart-product-info";


            const title =
                document.createElement(
                    "h3"
                );


            title.textContent =
                item.floor +
                " Delivery";


            const description =
                document.createElement(
                    "p"
                );


            description.textContent =
                "20L Water Can • ₹" +
                price +
                " / can";


            infoBox.appendChild(
                title
            );


            infoBox.appendChild(
                description
            );



            /* PRICE */

            const priceBox =
                document.createElement(
                    "div"
                );


            priceBox.className =
                "cart-product-price";


            priceBox.textContent =
                "₹" + subtotal;



            /* QUANTITY */

            const quantityBox =
                document.createElement(
                    "div"
                );


            quantityBox.className =
                "cart-page-quantity";



            /* MINUS */

            const minusButton =
                document.createElement(
                    "button"
                );


            minusButton.type =
                "button";


            minusButton.className =
                "cart-quantity-btn";


            minusButton.textContent =
                "−";


            minusButton.setAttribute(
                "aria-label",
                "Decrease quantity"
            );


            minusButton.addEventListener(
                "click",
                () => {

                    changeCartPageQuantity(
                        index,
                        -1
                    );

                }
            );



            /* NUMBER */

            const number =
                document.createElement(
                    "span"
                );


            number.className =
                "cart-quantity-number";


            number.textContent =
                quantity;



            /* PLUS */

            const plusButton =
                document.createElement(
                    "button"
                );


            plusButton.type =
                "button";


            plusButton.className =
                "cart-quantity-btn";


            plusButton.textContent =
                "+";


            plusButton.setAttribute(
                "aria-label",
                "Increase quantity"
            );


            plusButton.addEventListener(
                "click",
                () => {

                    changeCartPageQuantity(
                        index,
                        1
                    );

                }
            );



            /* REMOVE */

            const removeButton =
                document.createElement(
                    "button"
                );


            removeButton.type =
                "button";


            removeButton.className =
                "cart-remove-btn";


            removeButton.innerHTML =
                '<i class="fa-solid fa-trash"></i>';


            removeButton.setAttribute(
                "aria-label",
                "Remove item"
            );


            removeButton.addEventListener(
                "click",
                () => {

                    removeCartPageItem(
                        index
                    );

                }
            );



            quantityBox.appendChild(
                minusButton
            );


            quantityBox.appendChild(
                number
            );


            quantityBox.appendChild(
                plusButton
            );


            quantityBox.appendChild(
                removeButton
            );



            itemBox.appendChild(
                iconBox
            );


            itemBox.appendChild(
                infoBox
            );


            itemBox.appendChild(
                priceBox
            );


            itemBox.appendChild(
                quantityBox
            );


            cartItemsContainer.appendChild(
                itemBox
            );

        }
    );



    updateCartCount();

}



/* =====================================
   CHANGE CART PAGE QUANTITY
===================================== */

function changeCartPageQuantity(
    index,
    change
) {

    if (!cart[index]) {
        return;
    }


    let quantity =
        Number(
            cart[index].quantity
        ) || 1;


    quantity += change;


    /* Minimum = 1 */

    if (quantity < 1) {

        quantity = 1;

    }


    /* Maximum = 5 */

    if (quantity > 5) {

        quantity = 5;


        showCartMessage(
            "Maximum 5 cans allowed for each floor."
        );

    }


    cart[index].quantity =
        quantity;


    saveCart();


    renderCartPage();


    updateCartCount();

}



/* =====================================
   REMOVE CART ITEM
===================================== */

function removeCartPageItem(
    index
) {

    if (!cart[index]) {
        return;
    }


    const floor =
        cart[index].floor;


    cart.splice(
        index,
        1
    );


    saveCart();


    renderCartPage();


    updateCartCount();


    showCartMessage(
        floor +
        " removed from cart."
    );

}



// /* =====================================
//    CHECKOUT FROM CART
// ===================================== */

// const checkoutButton =
//     document.getElementById(
//         "cartCheckoutBtn"
//     );


// if (checkoutButton) {

//     checkoutButton.addEventListener(
//         "click",
//         () => {

//             /* Reload latest cart */

//             cart =
//                 JSON.parse(
//                     localStorage.getItem(
//                         "aquaZenCart"
//                     )
//                 ) || [];


//             if (cart.length === 0) {

//                 showCartMessage(
//                     "Your cart is empty."
//                 );

//                 return;

//             }


//             /* LOGIN CHECK */

//             const loggedIn =
//                 localStorage.getItem(
//                     "aquaZenLoggedIn"
//                 );


//             if (
//                 loggedIn !== "true"
//             ) {

//                 showCartMessage(
//                     "Please login before checkout."
//                 );


//                 setTimeout(
//                     () => {

//                         window.location.href =
//                             "login.html";

//                     },
//                     900
//                 );


//                 return;

//             }





//             /* SAVE CHECKOUT DETAILS */

//             localStorage.setItem(
//                 "aquaZenCheckoutItems",
//                 JSON.stringify(cart)
//             );


//             localStorage.setItem(
//                 "aquaZenCheckoutTotal",
//                 getCartTotal()
//             );


//             /*
//                Go to your existing
//                order section.
//             */

//             window.location.href =
//                 "pricing.html#order";

//         }
//     );

// }

/* =====================================
   AQUAZEN CHECKOUT
===================================== */

const checkoutButton =
    document.getElementById(
        "cartCheckoutBtn"
    );


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function () {

            /* =========================
               RELOAD CART
            ========================== */

            cart =
                JSON.parse(
                    localStorage.getItem(
                        "aquaZenCart"
                    )
                ) || [];


            /* =========================
               EMPTY CART
            ========================== */

            if (cart.length === 0) {

                showCartMessage(
                    "Your cart is empty."
                );

                return;

            }


            /* =========================
               LOGIN CHECK
            ========================== */

            const loggedIn =
                localStorage.getItem(
                    "aquaZenLoggedIn"
                );


            if (
                loggedIn !== "true"
            ) {

                showCartMessage(
                    "Please login before checkout."
                );


                setTimeout(
                    function () {

                        window.location.href =
                            "login.html";

                    },
                    900
                );


                return;

            }


            /* =========================
               CALCULATE DETAILS
            ========================== */

            let totalCans = 0;

            let totalPrice = 0;


            cart.forEach(
                function (item) {

                    const quantity =
                        Number(
                            item.quantity
                        ) || 0;


                    const price =
                        Number(
                            item.price
                        ) || 0;


                    totalCans += quantity;


                    totalPrice +=
                        quantity * price;

                }
            );


            /* =========================
               GENERATE ORDER ID
            ========================== */

            const orderId =
                "AZ" +
                Math.floor(
                    100000 +
                    Math.random() *
                    900000
                );


            /* =========================
               SAVE ORDER
            ========================== */

            const orderData = {

                orderId: orderId,

                totalCans: totalCans,

                totalPrice: totalPrice,

                items: cart,

                date:
                    new Date()
                        .toLocaleString()

            };


            localStorage.setItem(
                "aquaZenLastOrder",
                JSON.stringify(
                    orderData
                )
            );


            /* =========================
               SUCCESS ELEMENTS
            ========================== */

            const thankYou =
                document.getElementById(
                    "aquaZenThankYou"
                );


            const cartSection =
                document.querySelector(
                    ".cart-section"
                );


            const emptyCart =
                document.getElementById(
                    "emptyCart"
                );


            const successOrderId =
                document.getElementById(
                    "successOrderId"
                );


            const successCanCount =
                document.getElementById(
                    "successCanCount"
                );


            const successTotal =
                document.getElementById(
                    "successTotal"
                );



            /* =========================
               FILL ORDER DETAILS
            ========================== */

            if (successOrderId) {

                successOrderId.textContent =
                    orderId;

            }


            if (successCanCount) {

                successCanCount.textContent =
                    totalCans;

            }


            if (successTotal) {

                successTotal.textContent =
                    "₹" +
                    totalPrice;

            }



            /* =========================
               HIDE CART
            ========================== */

            if (cartSection) {

                cartSection.style.display =
                    "none";

            }


            if (emptyCart) {

                emptyCart.style.display =
                    "none";

            }



            /* =========================
               SHOW SUCCESS
            ========================== */

            if (thankYou) {

                thankYou.classList.add(
                    "show"
                );

            }



            /* =========================
               CLEAR CART
            ========================== */

            cart = [];


            localStorage.setItem(
                "aquaZenCart",
                JSON.stringify(cart)
            );


            /* =========================
               UPDATE HEADER
            ========================== */

            updateCartCount();



            /* =========================
               SCROLL TO SUCCESS
            ========================== */

            if (thankYou) {

                setTimeout(
                    function () {

                        thankYou.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    100
                );

            }

        }
    );

}

/* =====================================
   INITIALIZE CART
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCartCount();

        renderCartPage();

    }
);