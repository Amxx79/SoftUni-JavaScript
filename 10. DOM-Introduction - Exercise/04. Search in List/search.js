function search() {
   const allTowns = document.getElementById('towns');
   const searchTown = document.getElementById('searchText');
   const resultMatches = document.getElementById('result');
   let counter = 0;

   const towns = Array.from(allTowns.children);
   for (const town of towns) {
      if (town.textContent.includes(searchTown.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      }
   }

   resultMatches.textContent = `${counter} matches found`;
}
