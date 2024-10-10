document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navLinks = document.querySelectorAll('.nav__links'); // Todos los enlaces del menú

    if (openButton && menu && closeMenu) {
        // Abrir el menú cuando se hace clic en el botón del menú
        openButton.addEventListener('click', () => {
            menu.classList.add('nav__link--show');
        });

        // Cerrar el menú cuando se hace clic en el botón de cerrar
        closeMenu.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });

        // Cerrar el menú al hacer clic en cualquiera de los enlaces
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.stopPropagation(); // Evitar cualquier evento extraño que interfiera
                menu.classList.remove('nav__link--show'); // Cierra el menú
            });
        });
    } else {
        console.error('No se encontraron los elementos del menú.');
    }
});
