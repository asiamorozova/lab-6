//function takes both cart line item and corresponding product and returns dom that matches static html example 


//funciton takes line item and a product from the floaties file and outputs corresponding name in the cell alloted to name 
function renderLineItem(lineItem, floaties) {
    const tr = document.createElement('tr');

    //alignning the output 
    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = floaties.name;
    tr.appendChild(nameCell);

    //putting out a quantity element 
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    //puting out a price element
    const priceCell = document.createElement('td');
    priceCell.textContent = lineItem.price('td');
    tr.appendChild(priceCell);

    //putting out price element 
    const priceCell = docuemnt.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * fruit.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;


}