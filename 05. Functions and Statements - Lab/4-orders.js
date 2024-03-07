


function solve(product, quantity) {
    let price = calculateTotalPrice(product, quantity);
    let calculatedTotalBill = price * quantity;
    console.log(calculatedTotalBill.toFixed(2));


    function calculateTotalPrice(product, quantity) {
        switch (product) {
            case 'water':
                return 1;
            case 'coffee':
                return 1.50;
            case 'coke':
                return 1.40;
            case 'snacks':
                return 2;
        }
    }
}

solve("water", 5);
solve("coffee", 2);