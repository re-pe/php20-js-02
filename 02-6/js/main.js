(() => {
    const buttons = document.querySelectorAll('button');
    const img = document.querySelector('img');
    const rxTextClasses = /\btext-.+?\b/g;
    buttons.forEach(button => button.addEventListener('click', (event) => {
        img.className = "";
        const dataClass = event.target.getAttribute('data-class');
        if (dataClass !== "") {
            img.classList.add(dataClass);
        }
    }));
})();
