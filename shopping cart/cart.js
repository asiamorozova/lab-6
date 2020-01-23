import cart from './shoppingcart/cart.js';
import floaties from '../data.products.js';
import { findByIdm calcOrderTotal, toUSD } from '..common/utils.js';




const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const floaties = findById(fruits, lineItem.id);
    const dom = renderLineItem(lineItem, floaties);

    tbody.appendChild(dom);

}

const orderTotal = calcOrderTotal(cart, floaties);
orderTotalCell.textContent = toUSD(orderTotal);
