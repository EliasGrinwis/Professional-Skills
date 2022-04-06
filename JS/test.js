// SELECT ELEMENTS

const productsEl = document.querySelector(".products");
const cartItemsEL = document.querySelector(".cart-items");

// RENDER PRODUCTS
function renderProducts() {
    products.forEach( (product) =>  {
        productsEl.innerHTML += `
           
            <div class="card col-sm-12 col-md-4 padding-shop">
                <figure class="zoom width${product.number} ${product.center}" onmousemove="zoom(event)" style="background-image: url(${product.imgSrc})" >
                   <img src="${product.imgSrc}" style="width:100%" alt="${product.name}"/>
                </figure>
                <h2>${product.name}</h2>
                <p class="price">€${product.price}.00</p>
                <p class="grote-tekst">${product.description}</p>
                <p onclick="addToCart(${product.id})"><button> <i class="fas fa-shopping-cart"></i> In winkelwagen</button></p>
            </div>
           
        `;
    })
}

renderProducts();

// cart array
let cart = [];

// ADD TO CART
function  addToCart(id) {
    // Check if product already exist in cart
    if (cart.some( (item) => item.id === id)) {
        alert("Product zit al in het winkelmandje")
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1
        });

    }

    updateCart();
}

// UPDATE CART

function updateCart() {
    renderCartItems();
    // renderSubTotal();
}

// RENDER CARTITEMS
function renderCartItems() {
    cart.forEach( (item) => {
        cartItemsEL.innerHTML = ""; // CLEAR CART ELEMENT
        cartItemsEL.innerHTML += `
            <div class="row border-top border-bottom">
                  <div class="row main align-items-center">
                       <div class="col-2"><img class="img-fluid" src="${item.imgSrc}" alt="${item.name}"></div>
                        <div class="col">
                             <div class="row text-muted">${item.name}</div>
                            <div class="row">${item.description}</div>
                        </div>
                        <div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
                        <div class="col">&euro;${item.price}.00 <span class="close">&#10005;</span></div>
                </div>
            </div>
            
        `;

    })
}
renderCartItems();