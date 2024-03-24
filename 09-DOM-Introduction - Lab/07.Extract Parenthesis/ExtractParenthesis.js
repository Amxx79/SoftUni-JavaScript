function extract(content) {
    const contentGetting = document.getElementById(content);

    const matches = contentGetting.textContent.matchAll(/\([a-zA-Z ]+\)/g);
    console.log(matches);

    const arrayFromMatches = Array.from(matches)
        .join('; ');

        return arrayFromMatches;
}