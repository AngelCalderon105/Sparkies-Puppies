const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('header');
const logo = document.querySelector('#logo');
const offsetHeight = document.querySelector('header').offsetHeight;

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        navbar.classList.add('bg-white');
        logo.classList.remove('hidden');
        logo.classList.add('inline-block'); 
        navbar.classList.remove('text-primary-white');
        navbar.classList.add('text-primary-black');


       
    } else {
        if (window.pageYOffset > offsetHeight) {
            navbar.classList.add('bg-white');
            navbar.classList.remove('text-primary-white');
            navbar.classList.add('text-primary-black');
            
        } else {
            navbar.classList.remove('bg-white');
            navbar.classList.remove('text-primary-black');
            navbar.classList.add('text-primary-white');
            logo.classList.remove('inline-block');
            logo.classList.add('hidden');
            
            
        }
        menu.classList.add('hidden');
         
              
        
        
    }
    
    
});

window.addEventListener('scroll', function() {

    if (window.pageYOffset > offsetHeight) {
        logo.classList.remove('hidden');
        logo.classList.add('inline-block');

        navbar.classList.add('bg-white');
        navbar.classList.remove('text-primary-white');
        navbar.classList.add('text-primary-black');
    } 
    else{
        
        if (menu.classList.contains('hidden')){ 
            navbar.classList.remove('bg-white');
            navbar.classList.remove('text-primary-black');
            navbar.classList.add('text-primary-white');
            logo.classList.remove('inline-block');
            logo.classList.add('hidden');
        }
    }
    
});
