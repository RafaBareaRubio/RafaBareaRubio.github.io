// Selecciona el botón
const botonVolverArriba = document.getElementById('btnVolverArriba');

// Escucha el evento scroll
window.onscroll = function() {
    mostrarBoton();
};

function mostrarBoton() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botonVolverArriba.style.display = "block"; // Mostrar el botón
    } else {
        botonVolverArriba.style.display = "none"; // Ocultar el botón
    }
}
