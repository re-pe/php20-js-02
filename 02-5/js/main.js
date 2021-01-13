(() => {
    const showBtn = document.querySelector('.card-header > button');
    const postBtn = document.querySelector('.card-body > button');
    const cardBody = document.querySelector('.card-body');
    const rxTextClasses = /\btext-.+?\b/g;
    showBtn.addEventListener('click', (event) => {
        cardBody.classList.remove('d-none');
    });
    postBtn.addEventListener('click', (event) => {
        alert("Dėkojame už Jūsų nuomonę")
        cardBody.classList.add('d-none');
    });

})();
