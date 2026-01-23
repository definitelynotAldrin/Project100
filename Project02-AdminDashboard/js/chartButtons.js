
// const monthButton = document.querySelector('.monthly__button');
// const monthButtonP = monthButton.parentElement;

// const annualButton = document.querySelector('.annual__button');
// const dropdown = document.querySelector('.chart__header__date');
// const arrowUp = monthButtonP.querySelector('.fa-angle-down');

// monthButtonP.addEventListener('click', function() {
//     monthButtonP.nextElementSibling.classList.toggle('active');
//     monthButtonP.children[1].classList.add('active');
// });

// annualButton.addEventListener('click', function() {
//     annualButton.nextElementSibling.classList.toggle('active');
// });


const chartButtons = document.querySelectorAll('.chart__button');

chartButtons.forEach(button => {
    button.addEventListener('click', () => {

        const wrapper = button.closest('.chart__header__button');
        const dropdown = wrapper.querySelector('.chart__header__date');
        const arrowIcon = button.querySelector('.fa-arrow-down');

        dropdown.classList.toggle('active');
        arrowIcon.classList.toggle('active');

    });
});
