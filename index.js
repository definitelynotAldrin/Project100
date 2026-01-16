
// const toggle = document.querySelector(".accordion__toggle");
// const faq_answer = document.querySelector(".accordion__answer");


// document.addEventListener("click", function(){
//     const accordion_question = document.querySelectorAll(".accordion__question");
    
// });


// const accordion = document.querySelector(".accordion__question");
// const answer = document.querySelector(".accordion__answer");

// function handleClick(){
//     answer.classList.toggle('active');
// }

// accordion.addEventListener('click', handleClick);

const accordion = document.querySelectorAll('.accordion__question');

accordion.forEach(question =>{
    question.addEventListener("click", () =>{
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.accordion__toggle');

        answer.classList.toggle('active');
        question.classList.toggle('active');
        icon.classList.toggle('active');
    });
});


const openMenu = document.querySelector('.toggle__menu');
const closeMenu = document.querySelector('.icon__close');
const nav = document.querySelector('.nav__links');

openMenu.addEventListener('click', () => {
    nav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
});

