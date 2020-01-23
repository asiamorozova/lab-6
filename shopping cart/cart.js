import cart from './shoppingcart/cart.js';
import floaties from '../data.products.js';




const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const floaties = findById(fruits, lineItem.id);
    const dom = renderLineItem(lineItem, floaties);

    tboady.appendChild(dom);

}

const oderTotal = calcOrderTotal(cart, floaties);
orderTotalCell.textContent = toUSD(orderTotal);
