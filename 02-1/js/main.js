(() => {
    const buttons = document.querySelectorAll('button');
    const rxTextClasses = /\btext-.+?\b/g;
    buttons.forEach((button) => button.addEventListener('click', (event) => {
        const target = event.target;
        const p = target.parentNode.querySelector('p');
        p.className = p.className.replace(rxTextClasses, '');
        const dataStyle = target.getAttribute('data-style');
        p.classList.add(`text-${dataStyle}`);
    }));
})();
