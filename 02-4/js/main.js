(() => {
    const button = document.querySelector('button');
    const h3 = document.querySelector('h3');
    const rxTextClasses = /\btext-.+?\b/g;
    button.addEventListener('click', (event) => {
        h3.classList.toggle('d-none');
    });
})();
