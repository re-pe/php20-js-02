const logo = document.querySelector('#logo');
const buttons = document.querySelectorAll('button');
const rxImgClasses = new RegExp(/\bimg-.+?\b/, 'g');
buttons.forEach(button => button.addEventListener('click', (event) => {
    logo.className = logo.className.replace(rxImgClasses, '')
    const dataClass = event.target.getAttribute('data-class');
    if (dataClass !== '') {
        logo.classList.add(dataClass);
    }
}));

