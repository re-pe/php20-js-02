(() => {
    const buttons = document.querySelectorAll('button');
    const img = document.querySelector('img');
    const cardBody = img.parentElement;
    const cardBodyClasses = cardBody.className;
    const flexClassNames = "d-flex flex-column";

    btnClickHandler = (event) => {
        img.className = "";
        cardBody.className = cardBodyClasses;
        const dataClass = event.target.getAttribute('data-class');
        if (dataClass !== "") {
            img.classList.add(dataClass);
        }
        if (dataClass === "order-12") {
            cardBody.className += ` ${flexClassNames}`;
        }
    };

    buttons.forEach(button => button.addEventListener('click', btnClickHandler));
})();
