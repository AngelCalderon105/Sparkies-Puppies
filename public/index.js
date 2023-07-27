const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('header');
const logo = document.querySelector('#logo');
const offsetHeight = document.querySelector('header').offsetHeight;

// burger.addEventListener('click', () => {
//     if (menu.classList.contains('hidden')) {
//         menu.classList.remove('hidden');
//         navbar.classList.add('bg-white');
//         logo.classList.remove('hidden');
//         logo.classList.add('inline-block'); 
//         navbar.classList.remove('text-primary-white');
//         navbar.classList.add('text-primary-black');


       
//     } else {
//         if (window.scrollY > offsetHeight) {
//             navbar.classList.add('bg-white');
//             navbar.classList.remove('text-primary-white');
//             navbar.classList.add('text-primary-black');
            
//         } else {
//             navbar.classList.remove('bg-white');
//             navbar.classList.remove('text-primary-black');
//             navbar.classList.add('text-primary-white');
//             logo.classList.remove('inline-block');
//             logo.classList.add('hidden');
            
            
//         }
//         menu.classList.add('hidden');
         
              
        
        
//     }
    
    
// });

window.addEventListener('scroll', function() {

    if (window.scrollY > offsetHeight) {
        logo.classList.remove('hidden');
        logo.classList.add('inline-block');
        navbar.classList.add('bg-white');
        navbar.classList.remove('text-primary-white');
        navbar.classList.add('text-primary-black');
        navbar.classList.remove('transition', 'delay-800');
    } 
    else{
         if(menu.classList.contains('max-h-0')) {
            navbar.classList.remove('bg-white');
            navbar.classList.remove('text-primary-black');
            navbar.classList.add('text-primary-white');
            logo.classList.remove('inline-block');
            logo.classList.add('hidden');
         }
    }
    
});
// absolute top-full w-full overflow-hidden max-h-0


burger.addEventListener('click', () => {
    if (menu.classList.contains('max-h-0')) {
        menu.classList.remove('max-h-0');
        menu.classList.add('max-h-96');
        navbar.classList.add('bg-white'); 
        navbar.classList.add('text-primary-black');
        navbar.classList.remove('text-primary-white');
        navbar.classList.remove('transition', 'delay-800');
        logo.classList.remove('hidden');
        logo.classList.add('inline-block');
        
        
    } else {
        menu.classList.remove('max-h-96');
        menu.classList.add('max-h-0');
        if (window.scrollY <= offsetHeight) { // Add this condition
            navbar.classList.remove('bg-white');
            navbar.classList.remove('text-primary-black');
            navbar.classList.add('text-primary-white');
            navbar.classList.add('transition', 'delay-800');
            logo.classList.add('hidden');
            logo.classList.remove('inline-block');

        }
        
    }
});
