const logo = document.querySelector('#logo');
const buttons = document.querySelectorAll('button');
const rxImgClasses = new RegExp(/\bimg-.+?\b/, 'g');
buttons.forEach(button => button.addEventListener('click', (event) => {
    const dataClass = event.target.getAttribute('data-class');
    logo.className = logo.className.replace(rxImgClasses, '')
    logo.classList.add(dataClass);
}));

