//findById this function takes an array and an id and returns the first item found that had an .id
// it can return null if no match is found 



export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleStrin('en-US', {
        style: 'curency',
        curency: 'USD'
    });
}

export function calcLineTotal(quantity, price) {
    const ammount = quantity * price;
    return roundCurrency(ammount);

}

function roundCurrency(ammount) {
    return Math.round(ammount * 100) / 100;

}

export function calcOrderTotal(cart, floaties) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const floatie = findById(floaties, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, floatie.price);
        orderTotal += lineTotal;

    }
    return roundCurrency(orderTotal);
}
