const trigger = document.getElementById('menuTrigger');
const menu = document.getElementById('contextMenu');
var selectedProduct = localStorage.getItem('product') || 'kafka';

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('active');
    setProduct();
});

window.addEventListener('click', function(e) {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
    }
    setProduct();
});

function setProduct(force=false) {
    let product = localStorage.getItem('product') || 'kafka';
    if (product == selectedProduct && !force) return;
    selectedProduct = product;
    document.getElementById("productLogo").setAttribute('src', `static/img/${product}.png`);
    document.getElementById("productLogo").setAttribute('alt', product);
    if (typeof productChangedCallback === 'function') productChangedCallback(selectedProduct);
}

function populateProducts() {
    supportedProducts = ["kafka", "postgresql", "airflow"];
    console.log(supportedProducts);
    items = ""
    supportedProducts.forEach((product) =>
        items += `<li><a href="#${product}" onclick="localStorage.setItem('product', '${product}')">${betterTitle(product)}</a></li>`
    );
    console.log(items);
    document.getElementById("contextMenu").innerHTML = items;
}

setProduct(true);
