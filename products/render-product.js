
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
    button.value = floaties.code;
    p.appendChild(button);



    return li;
}
