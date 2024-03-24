function sumTable() {
    const tdElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    const sum = document.getElementById('sum');

    const data = Array.from(tdElements)
        .reduce((acc, el) => acc + Number(el.textContent), 0);
        console.log(data);

    sum.textContent = data;
}