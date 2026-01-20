

const nav__link = document.querySelectorAll('.nav__link');

nav__link.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const dropdown = link.nextElementSibling;
        const angle_icon = link.querySelector('.fa-angle-down');
        const isActive = dropdown.classList.contains('active');


        // dropdown.classList.toggle('active');
        // angle_icon.classList.toggle('active');

        nav__link.forEach(item => {
            const otherDropdown = item.nextElementSibling;
            const otherIcon = item.querySelector('.fa-angle-down');

            if(otherDropdown){
                otherDropdown.classList.remove('active')
            }

            if(otherIcon){
                otherIcon.classList.remove('active')
            }
        });

        console.log('Working!!');

        if(!isActive){
            dropdown.classList.add('active');
            angle_icon.classList.add('active');
        }

    });
});


//---------------------enhance code--------------------

const profileImage = document.querySelector('.profile__image__container');
const profileInfo = document.querySelector('.profile__information');

function showProfile(){
    profileInfo.classList.add('active');
}

function hideProfile() {
    profileInfo.classList.remove('active');
}

profileImage.addEventListener('mouseenter', showProfile);
profileInfo.addEventListener('mouseenter', showProfile);

profileImage.addEventListener('mouseleave', hideProfile);
profileInfo.addEventListener('mouseleave', hideProfile);



// ----------Own code------------------

// profileImage.addEventListener('mouseenter', function() {
//     profileInfo.classList.add('active');

// });

// profileInfo.addEventListener('mouseenter', function() {
//     profileInfo.classList.add('active');

// });

// profileImage.addEventListener('mouseleave', function() {
//     profileInfo.classList.remove('active');
// });

// profileInfo.addEventListener('mouseleave', function() {
//     profileInfo.classList.remove('active');
// });




// ------------Pro Technique------------

// const profileWrapper = document.querySelector('.profile-wrapper');
// const profileInfo = document.querySelector('.profile__information');

// profileWrapper.addEventListener('mouseenter', () => {
//   profileInfo.classList.add('active');
// });

// profileWrapper.addEventListener('mouseleave', () => {
//   profileInfo.classList.remove('active');
// });
