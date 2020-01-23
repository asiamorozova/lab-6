// importing product data to populate for the renderFloaties 
import floaties from '../data/product.js'
// importing function that will populate HTML
import renderFloaties from '../products/render-product.js'


//setting a variable list from the DOM
const list = document.getElementById('floaties');

//this loops though the number of floaties 
for (let i = 0; i < floaties.length; i++) {
    const floatie = floaties[i];
    const dom = renderFloaties(floatie);
    list.appendChild(dom);

}