function solve() {
    const textArea = document.querySelector('#exercise textarea:first-of-type');
    const textOutput = document.querySelector('#exercise textarea:last-of-type');
    const generateButton = document.querySelector('#exercise button:first-of-type');
    const buyButton = document.querySelector('#exercise button:last-of-type');
    const tBodyElement = document.querySelector('.table tbody');

    generateButton.addEventListener('click', () => {
        const objects = JSON.parse(textArea.value);

        for (const object of objects) {
            const newImgElement = document.createElement('img');
            newImgElement.src = object.img;
            const imgTdElement = document.createElement('td');
            imgTdElement.appendChild(newImgElement);

            const namePElement = document.createElement('p');
            namePElement.textContent = object.name;
            const nameTdElement = document.createElement('td');
            nameTdElement.appendChild(namePElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = object.price;
            const priceTdElement = document.createElement('td');
            priceTdElement.appendChild(priceElement);

            const decFactorElement = document.createElement('p');
            decFactorElement.textContent = object.decFactor;
            const decFactorTdElement = document.createElement('td');
            decFactorTdElement.appendChild(decFactorElement);

            const markElement = document.createElement('input');
            markElement.setAttribute('type', 'checkbox');
            const markTdElement = document.createElement('td');
            markTdElement.appendChild(markElement);

            const furnitureTrElement = document.createElement('tr');
            furnitureTrElement.appendChild(imgTdElement);
            furnitureTrElement.appendChild(nameTdElement);
            furnitureTrElement.appendChild(priceTdElement);
            furnitureTrElement.appendChild(decFactorTdElement);
            furnitureTrElement.appendChild(markTdElement);

            tBodyElement.appendChild(furnitureTrElement);
        }

    })

    buyButton.addEventListener('click', () => {
        const arrayFurnitures = Array.from(tBodyElement.children);
        const allBoughtFurnituresNames = [];
        let totalPrice = 0;
        let counterFurnitures = 0;
        let sumOfAllFactors = 0;
        let boughtOutput = '';

        for (const furniture of arrayFurnitures) {
            const markElement = furniture.querySelector('td input');
            if (markElement.checked) {
                allBoughtFurnituresNames.push(furniture.querySelector('td:nth-child(2) p').textContent);
                const currentPrice = furniture.querySelector('td:nth-child(3) p').textContent;
                sumOfAllFactors += Number(furniture.querySelector('td:nth-child(4) p').textContent);
                totalPrice += Number(currentPrice);
                counterFurnitures++;
            }
        }
        boughtOutput += `Bought furniture: ${allBoughtFurnituresNames.join(', ')}\n`;
        boughtOutput += `Total price: ${totalPrice.toFixed(2)}\n`;
        boughtOutput += `Average decoration factor: ${sumOfAllFactors / counterFurnitures}`;
        textOutput.textContent = boughtOutput;
    })

    //TODO...
}