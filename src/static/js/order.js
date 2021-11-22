const data = [
    {
        id: 12,
        img: 'img/products/new1-img.png ',
        name: 'Haunted House',
        price: 14.99,
        itemInCart: false
    },
    {
        id: 11,
        img: 'products/new6-img.png',
        name: 'Witch Broom',
        price: 7.99,
        itemInCart: false
    },
    {
        id: 10,
        img: ' products/new5-img_ktRlLv0.png',
        name: 'Terrifying Crystal Ball',
        price: 5.59,
        itemInCart: false
    },
    {
        id: 9,
        img: ' products/new4-img.png ',
        name: 'Rip',
        price: 24.99,
        itemInCart: false
    },
    {
        id: 8,
        img: 'products/category3-img.png ',
        name: 'Witch Hat',
        price: 4.99,
        itemInCart: false
    },
    {
        id: 7,
        img: ' products/trick-treat6-img.png',
        name: 'Ghost',
        price: 4.99,
        itemInCart: false
    },
    {
        id: 6,
        img: ' products/category2-img.png',
        name: 'Pumpkin',
        price: 19.99,
        itemInCart: false
    },
    {
        id: 5,
        img: ' products/trick-treat4-img.png ',
        name: 'Candy Cane',
        price: 7.99,
        itemInCart: false
    },
    {
        id: 4,
        img: ' products/trick-treat3-img.png ',
        name: 'Scarecrow',
        price: 15.99,
        itemInCart: false
    },
    {
        id: 3,
        img: ' products/trick-treat2-img.png',
        name: 'Bone',
        price: 8.99,

        itemInCart: false
    },
    {
        id: 2,
        img: ' products/trick-treat1-img.png ',
        name: 'Toffee',
        price: 11.99,
        itemInCart: false
    },

];

data.reverse();

const cartList = [];

const updateBtns = document.getElementsByClassName('update-cart');
for (i = 0; i < updateBtns.length; i++) {
    if (i >= 5) {
        updateBtns[i].addEventListener('click', function (event) {
            const btn = event.target.parentElement.parentElement;
            var productImg = btn.querySelector('img').src;
            var productName = btn.querySelector('h3').innerText;
            var productPrice = btn.querySelectorAll("span")[1].innerText;
            var index = 1;
            for (let item of data) {
                if (item.name == productName) {
                    index = item.id;
                }
            }
            var product = {
                id: index,
                img: productImg,
                name: productName,
                price: productPrice.substring(1),
                quantity: 1,
            };
            var check = 0;
            for (let item of cartList) {
                if (item.name == productName) {
                    item.quantity++;
                    check = 1;
                }
            }

            if (check == 0) {
                cartList.push(product);
                addToCart(product);
                updateCartTotal();
            }
            else {
                updateCart();
            }

        })
    }
    else {
        updateBtns[i].addEventListener('click', function (event) {
            const btn = event.target.parentElement.parentElement.parentElement;
            var productImg = btn.querySelector('img').src;
            var productName = btn.querySelector('h4').innerText;
            var productPrice = 29.99;
            var index = 1;
            for (let item of data) {
                if (item.name == productName) {
                    index = item.id;
                }
            }
            var product = {
                id: index,
                img: productImg,
                name: productName,
                price: productPrice,
                quantity: 1,
            };
            var check = 0;
            for (let item of cartList) {
                if (item.name == productName) {
                    item.quantity++;
                    check = 1;
                }
            }

            if (check == 0) {
                cartList.push(product);
                addToCart(product);
                updateCartTotal();
            }
            else {
                updateCart();
            }

        })
    }
}


function addToCart(product) {
    const cart = document.querySelector("tbody");
    const cartItem = document.createElement("tr");
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <tr style="font-family: Poppins">
            <td style="width: 100px; justify-content: center;
            align-items: center;">
                <img src="${product.img}">
            </td>
            <td style="width: 300px; text-align: center;">
                <h4>${product.name}</h4>
            </td>
            <td style="width: 100px; text-align: center; ">
                <span class="add">${product.quantity}</span>
            </td>
            <td style="width: 180px; text-align: center; ">
                <span>$${product.price}</span>
            </td>
            <td style="width: 180px; text-align: center;">
                <button class="remove"
                style="background-color: transparent; color: #99061b">
                    <i class='bx bx-trash bx-sm bx-spin'></i>
                </button>
            </td>

        </tr>
    `;

    cart.appendChild(cartItem);
    cartItem.querySelector('.remove').addEventListener('click', removeCartItem);

}


function updateCart() {
    const cart = document.querySelector("tbody");
    cart.innerHTML = '';
    for (let item of cartList) {
        const cartItem = document.createElement("tr");
        var price = item.price * item.quantity;
        price = price.toFixed(2);
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <tr>
                <td style="width: 100px; justify-content: center;
                align-items: center;">
                    <img src="${item.img}">
                </td>
                <td style="width: 300px; text-align: center;">
                    <h4>${item.name}</h4>
                </td>
                <td style="width: 100px; text-align: center; ">
                    <span class="add">${item.quantity}</span>
                </td>
                <td style="width: 180px; text-align: center; ">
                    <span>$${price}</span>
                </td>
                <td style="width: 180px; text-align: center;">
                    <button class="remove" style="background-color: transparent; color: #99061b">
                        <i class='bx bx-trash bx-sm bx-spin'></i>
                    </button>
                </td>

            </tr>
        `;

        cart.appendChild(cartItem);
        cartItem.querySelector('.remove').addEventListener('click', removeCartItem);
        updateCartTotal();


    }
}

function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    for (let item of cartList) {
        if (item.name == buttonClicked.parentElement.parentElement.querySelector('h4').innerText) {
            cartList.splice(cartList.indexOf(item), 1);
        }
    }
    updateCartTotal();
}


function updateCartTotal() {
    console.log(1);
    const cart = document.querySelector("tbody");
    const cartItems = cart.querySelectorAll('.cart-item');
    const total = document.getElementById('money');
    let totalPrice = 0;
    for (let item of cartItems) {
        const product = item.querySelectorAll('span')[1].innerText.substring(1);
        totalPrice += parseFloat(product);
    }
    total.innerText = '$' + totalPrice.toFixed(2);
}
