

const nav__link = document.querySelectorAll('.nav__link');

nav__link.forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = link.nextElementSibling;
        const angle_icon = link.querySelector('.fa-angle-down');
        // const isActive = link.classList.contains('active');

        dropdown.classList.toggle('active');
        angle_icon.classList.toggle('active');

        console.log('Working!!');
    });
});