function create(words) {
   const divContent = document.getElementById('content');
   const fragment = document.createDocumentFragment();
   
   const divWords = words.map(word => {
      const pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';

      const divElement = document.createElement('div');
      divElement.appendChild(pElement);
      console.log(divElement);
      return divElement;
   })
   divWords.forEach(div => fragment.appendChild(div));
   divContent.appendChild(fragment);

   divContent.addEventListener('click', (e) => {
      const p = e.target.querySelector('p');
      p.style.display = 'block';
   })
}