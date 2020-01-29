import { findById } from '../common/utils.js';

export default function renderFloaties(floaties) {
    const li = document.createElement('li');

    const h3 = document.createElement('h3');
    h3.textContent = floaties.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = floaties.image;
    img.alt = floaties.name + 'image';
    img.height = 300;
    img.width = 400;
    li.appendChild(img);

    const p = document.createElement('p');

    const description = document.createElement('description');
    description.textContent = floaties.description;
    li.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = '$' + floaties.price;
    li.appendChild(price);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = floaties.id;
    button.addEventListener('click', () => {
        let json = localStorage.getItem('cart');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }
        let lineItem = findById(cart, floaties.id);
        if (!lineItem) {
            lineItem = {
                id: floaties.id,
                quantity: 1
            };
            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;

        }
        json = JSON.stringify(cart);
        localStorage.setItem('cart', json);

        alert('1' + floaties.name + 'added to cart');
    });




    li.appendChild(button);

    return li;
}


