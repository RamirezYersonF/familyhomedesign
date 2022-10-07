const menuMostrar = document.querySelector(".contenedor__desplegable--mobile");
const menuAbierto = document.querySelector(".nav__mobile");
const menuCerrar = document.querySelector(".nav__mobile");
function toggleMenu() {
    menuMostrar.classList.toggle("contenedor__desplegableabierto--mobile");
};
menuAbierto.addEventListener("click",  toggleMenu);
menuCerrar.addEventListener("click",  toggleMenu);

const menuLinks = document.querySelectorAll('.contenedor__mobile--menu a[href^="#"]');

menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click", function(){
        menuMostrar.classList.remove(".nav__responsive--abierto")
    })
});