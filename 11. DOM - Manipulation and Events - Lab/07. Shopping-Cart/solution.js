function solve() {
   const allAddButtons = document.querySelectorAll('.add-product');
   const textArea = document.querySelector('textarea');
   const checkout = document.querySelector('.checkout');

   let totalSum = 0;
   const allProducts = {};

   for (const button of allAddButtons) {
      const fullElement = button.parentElement.parentElement;


      button.addEventListener('click', () => {
         const productName = fullElement.querySelector('.product-title').textContent;
         const productPrice = Number(fullElement.querySelector('.product-line-price').textContent);
         totalSum += productPrice;
         allProducts[productName] = true;
         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;   
      })
   }

   const boughtProcuts = textArea.textContent;

   checkout.addEventListener('click', () => {
      const productsNames = Object.keys(allProducts).join(', ');
      Array.from(allAddButtons).forEach(button => button.setAttribute('disabled', 'disabled'));
      checkout.setAttribute('disabled', 'disabled');
      textArea.textContent += `You bought ${productsNames} for ${totalSum.toFixed(2)}.`;
   })
}