document.addEventListener('DOMContentLoaded' , function(){
 
    const Togglebutton =document.querySelector('.navbar .mobile-menu-toggle')
   
    const MobileMenu = document.querySelector('.navbar .mobile-menu-items')

    Togglebutton.addEventListener('click', function(){
        MobileMenu.classList.toggle('active')
    })

})


// scroll effect on the navbar 


window.addEventListener('scroll', function(){

const navbar =document.querySelector('.navbar')

  if(window.scrollY) {
    navbar.classList.add('navbar-scroll')
  }
 else {
    navbar.classList.remove('navbar-scroll')
 }


})