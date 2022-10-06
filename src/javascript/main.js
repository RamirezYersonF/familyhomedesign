const menuMostrar = document.querySelector(".contenedor__fondo--responsive");
const menuAbierto = document.querySelector(".icono__menu--responsive");
const menuCerrar = document.querySelector(".icono__menu--responsive");
function toggleMenu() {
    menuMostrar.classList.toggle("nav__responsive--abierto");
};
menuAbierto.addEventListener("click",  toggleMenu);
menuCerrar.addEventListener("click",  toggleMenu);

const menuLinks = document.querySelectorAll('.contenedor__mobile--menu a[href^="#"]');

menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click", function(){
        menuMostrar.classList.remove(".nav__responsive--abierto")
    })
});