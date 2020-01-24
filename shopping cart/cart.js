import cart from '../data/cart.js';
import floaties from '../data/product.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';



const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const floatie = findById(floaties, lineItem.id);
    const dom = renderLineItem(lineItem, floatie);

    tbody.appendChild(dom);

}

const orderTotal = calcOrderTotal(cart, floaties);
orderTotalCell.textContent = (orderTotal);
