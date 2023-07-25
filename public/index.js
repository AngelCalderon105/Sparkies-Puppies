const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('header');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        navbar.classList.add('bg-black');
       
    } else {
        menu.classList.add('hidden');
        navbar.classList.remove('bg-black');
       
    }
});

window.addEventListener('scroll', function() {
   
    const offsetHeight = document.querySelector('header').offsetHeight;

    if (window.pageYOffset > offsetHeight) {
       
        navbar.classList.add('bg-white');
        navbar.classList.remove('text-primary-white');
        navbar.classList.add('text-primary-black');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.remove('text-primary-black');
        navbar.classList.add('text-primary-white');


       
    }
});
