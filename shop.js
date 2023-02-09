/*  Call All the add carts*/
let carts = document.querySelectorAll('.add-cart');
let products = 
[
{
    name: 'Cyan Night Play Tshirt',
    tag: 'cyannightplaytshirt',
    price: 35,
    inCart: 0
},
  
{
    name: 'Black Night Play Tshirt',
    tag: 'blacknightplaytshirt',
    price: 35,
    inCart: 0
},

{
    name: 'Ochre YOA Tshirt',
    tag: 'ochreyoatshirt',
    price: 35,
    inCart: 0
},

{
    name: 'White YOA Tshirt',
    tag: 'whiteyoatshirt',
    price: 35,
    inCart: 0
},

{
    name: 'Greige Tsubame Tshirt',
    tag: 'greigetsubametshirt',
    price: 35,
    inCart: 0
},

{
    name: 'Orange Love Letter Pullover',
    tag: 'orangeloveletterpullover',
    price: 60,
    inCart: 0
},

{
    name: 'Light Black Nice To Meet You Hoodie',
    tag: 'lightblacknicetomeetyouhoodie',
    price: 75,
    inCart: 0
},

{
    name: 'Greige Nice To Meet You Hoodie',
    tag: 'greigenicetomeetyouhoodie',
    price: 75,
    inCart: 0
},

{
    name: 'Red Yoasobi Asian Pattern Facetowel',
    tag: 'redyoasobiasianpatternfacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Blue Yoasobi Asian Pattern Facetowel',
    tag: 'blueyoasobiasianpatternfacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Cyan Yoasobi Beach Towel',
    tag: 'cyanyoasobibeachtowel',
    price: 40,
    inCart: 0
},

{
    name: 'White Yoasobi Beach Towel',
    tag: 'whiteyoasobibeachtowel',
    price: 40,
    inCart: 0
},

{
    name: 'Yellow & Blue Nice To Meet You Facetowel',
    tag: 'yellow&bluenicetomeetyoufacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Blue & Brown Nice To Meet You Facetowel',
    tag: 'blue&brownnicetomeetyoufacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Dark Blue Night Play Beach Towel',
    tag: 'darkbluenightplaybeachtowel',
    price: 40,
    inCart: 0
},

{
    name: 'Light Blue Yoasobi Asian Pattern Facetowel',
    tag: 'lightblueyoasobiasianpatternfacetowel',
    price: 15,
    inCart: 0
}
];

for (let i=0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () =>
    {
        cartNum(products[i]);
        totalCost(products[i]);
    })
}
/* Always display the cart value stored in local storage*/
function loadcartNum()
{
    let productNum = localStorage.getItem('cartNum');
    if(productNum)
    {
        document.querySelector('.cart span').textContent = productNum;
    }
}

function cartNum(product, action)
{
    console.log("The product clicked is", product);
    let productNum = localStorage.getItem('cartNum');
    /* Convert to integer*/
    productNum = parseInt(productNum);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(action == "decrease")
    {
        localStorage.setItem('cartNum' , productNum - 1);
        document.querySelector('.cart span').textContent = productNum - 1;
    } 
    else if( productNum)
    {
        localStorage.setItem("cartNum", productNum + 1);
        document.querySelector('.cart span').textContent = productNum + 1;
    }
    else
    {
        localStorage.setItem('cartNum', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    
    setItems(product);
}
function setItems(product)
{
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)
    console.log("My cartItems are" , cartItems);
    /* Check if anything exists inside*/
    if(cartItems != null)
    {
        /* check if the item exist in the local storage */
        if(cartItems[product.tag] == undefined)
        {
            /* update cart item from before and add additional item */
            cartItems = {
                ...cartItems,[product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else
    {
        product.inCart = 1;
    cartItems = { 
        [product.tag]: product
    }
    }
    
    /* Change the data to string */
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

/* Total cost function */
function totalCost(product, action)
{
    //console.log("The product price is" , product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is" , cartCost);
    if(action == "decrease")
    {
      cartCost = parseInt(cartCost);
      localStorage.setItem('totalCost', cartCost - product.price);
    }
    
    else if(cartCost != null)
    {
        /*Convert to number to addition */
        cartCost = parseInt(cartCost);
        /* add on new item price to the existing total price */
        localStorage.setItem("totalCost" , cartCost + product.price);
    }
    else
    {
        localStorage.setItem("totalCost" , product.price);  
    }
    
}
function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    /* Check if there is any values */
    if(cartItems && productContainer)
    {
         productContainer.innerHTML = '';
        /* Check values in key */
        Object.values(cartItems).map(item => {
            /* include += to ensure it not being overwritten */
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle" style="font-size:25px;
                color:blue;
                margin-left: 5px;
                margin-right: 5px;"></ion-icon>
                <img src="/Image/${item.tag}.jpg" style="width:150px;height:150px;">
                <span>${item.name}</span>
            </div>
            <div style="width: 15%;
            border-bottom: 2px solid #f2285a;
            display: flex;
            align-items: center;">$${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease" name="remove-circle" style="font-size:25px;
                color:blue;
                margin-left: 5px;
                margin-right: 5px;"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="add-circle" style="font-size:25px;
                color:blue;
                margin-left: 5px;
                margin-right: 5px;"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                 $${cartCost}.00
                </h4>
            `;
    
    }
    /* if remove button is clicked */
    deleteButtons();

    manageQuantity();
}

function deleteButtons()
{
    /* locate the cross button*/
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let cartNum = localStorage.getItem('cartNum');
    /* to access each item data */
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    for(let i=0; i < deleteButtons.length; i++)
    {
        deleteButtons[i].addEventListener('click', () =>
        {
            /* go up to the parent division and select the name of the product name */
            /* .trim remove all the negative space */
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g , '');
            localStorage.setItem('cartNum', cartNum -= cartItems[productName].inCart );
            /* calculate the total price for the column we are removing */
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart))

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            /* refreshes the page */
            displayCart();
            loadcartNum();
        });
    }
}
/* increase or decrease */
function manageQuantity()
{
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);
    for(let i=0; i < decreaseButtons.length; i++)
    {
        decreaseButtons[i].addEventListener('click', () =>
        {   
            /* parentelement to move on up the division into quantity and select the value in span */
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            /* parent element to move up to quantity, previous element siblings to move to product and select the name */
            currentProduct =  decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);
            /* run a checker to make sure when quantity cannot decrease when quantity is 1 */
            if(cartItems[currentProduct].inCart > 1)
            {
            /* decreasing the value of incart */
            cartItems[currentProduct].inCart -= 1;
            cartNum(cartItems[currentProduct], "decrease");
            totalCost(cartItems[currentProduct], "decrease")
            localStorage.setItem('productsInCart' , JSON.stringify(cartItems));
            displayCart();
            }
        });
    }
    for(let i=0; i < increaseButtons.length; i++)
    {
        increaseButtons[i].addEventListener('click', () =>
        {
            console.log("increase button");
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            /* parent element to move up to quantity, previous element siblings to move to product and select the name */
            currentProduct =  increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);
            /* run a checker to make sure when quantity cannot decrease when quantity is 1 */
           
            /* decreasing the value of incart */
            cartItems[currentProduct].inCart += 1;
            /* if statement at the top checks if there is product inside if there is it will allow addition */
            cartNum(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct])
            localStorage.setItem('productsInCart' , JSON.stringify(cartItems));
            displayCart();
            
        });
    }
}

loadcartNum();
displayCart();