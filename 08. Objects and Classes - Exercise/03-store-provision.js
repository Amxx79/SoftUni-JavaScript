function solve(currentStock, deliveryStock) {
    let store = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        let currentProductQuantity = Number(currentStock[i + 1]);
        store[currentProduct] = currentProductQuantity;
    }

    for (let i = 0; i < deliveryStock.length; i += 2) {
        let currentProduct = deliveryStock[i];
        let currentProductQuantity = Number(deliveryStock[i + 1]);

        if (!store[currentProduct]) {
            store[currentProduct] = 0;
        }
        store[currentProduct] += currentProductQuantity;
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);

    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);