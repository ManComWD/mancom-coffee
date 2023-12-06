// Función que aplica el style a la opción seleccionada en el menú, y quita el que fue previamente seleccionado
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // Hacemos desaparecer el Menú, una vez que se ha seleccionado una opción en el modo Responsive
    var x = document.getElementById("nav");
    x.className = "";


}
// Función que muestra el menú responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Detecto el Scrolling para aplicar la animación de las barras de habilidades


// Función que aplica la animación de la barra de habilidades
