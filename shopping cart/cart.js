// import cart from '../data/cart.js';
import floaties from '../data/product.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';



const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

const placeOrderButton = document.getElementById('place-order-button');

const json = localStorage.getItem('cart');
let shoppingCart;
if (json) {
    shoppingCart = JSON.parse(json);
}
else {
    shoppingCart = [];
}
for (let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const floatie = findById(floaties, lineItem.id);
    const dom = renderLineItem(lineItem, floatie);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(shoppingCart, floaties);
orderTotalCell.textContent = orderTotal;

if (shoppingCart.lenght === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        alert('Order place:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';

    });

}


