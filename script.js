let imagenActual = document.getElementById("imagenActual");
let imagenModal = document.getElementById("imagenModal")
let ventanaModal = document.getElementById("ventanaModal");
let fondo = document.querySelector("main");
let flechaAtras = document.getElementById("flechaAtras");
let flechaAdelante = document.getElementById("flechaAdelante");
let indiceActual

const imagenes = [
    "./recursos/azul.jpg",
    "./recursos/rosa-azul.jpg",
    "./recursos/morado-rojo.jpg"
];

// Se establece la primera imagen de forma predeterminada
window.addEventListener('load', function () {
    imagenActual.setAttribute("src", imagenes[0]);
    imagenModal.setAttribute("src", imagenes[0]);
    indiceActual = 0;
    console.log("Recién cargado");
})

function cambiarFoto(indiceActual, accion) {
    let nuevoIndice;
    
    if(accion == "siguiente"){
        nuevoIndice = indiceActual == imagenes.length - 1 ? 0 : indiceActual + 1;
    } else {
        nuevoIndice = indiceActual == 0 ? indiceActual.length - 1 : indiceActual - 1;
    }

    imagenActual.setAttribute("src", imagenes[nuevoIndice]);
    imagenModal.setAttribute("src", imagenes[nuevoIndice]);

    indiceActual = nuevoIndice;
}

flechaAtras.addEventListener('click', function () {
    cambiarFoto(indiceActual, "anterior")
})

flechaAdelante.addEventListener('click', function () {
    cambiarFoto(indiceActual, "siguiente")
})

// Aparece la ventana modal
imagenActual.addEventListener('click', function () {
    ventanaModal.style.top = "25vh";
})

// Desaparece la ventana modal
window.addEventListener('click', function (evento) {
    if (evento.target != ventanaModal && evento.target != imagenActual) {
        ventanaModal.style.top = "-70vh";
    }
});