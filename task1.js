function createProduct(obj, callback) {
    const id = Math.floor(Math.random() * 10000);
    const product = { ...obj, id };
    callback(product);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice(product) {
    console.log(`Загальна вартість товару: ${product.price * product.quantity}`);
}

const product = { name: 'БігМак', price: 100, quantity: 5 };
createProduct(product, logProduct); 
createProduct(product, logTotalPrice);  