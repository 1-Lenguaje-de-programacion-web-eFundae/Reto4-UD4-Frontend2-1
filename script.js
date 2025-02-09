window.onload = function () {
    console.log("Cargado");
    // Variables
    let imagenActual = document.getElementById("imagenActual");
    let imagenModal = document.getElementById("imagenModal")
    let ventanaModal = document.getElementById("ventanaModal");
    let flechaAtras = document.getElementById("flechaAtras");
    let flechaAdelante = document.getElementById("flechaAdelante");
    let main = document.querySelector("main");
    let indiceActual = 0;

    // Imágenes
    const imagenes = [
        "./recursos/azul.jpg",
        "./recursos/rosa-azul.jpg",
        "./recursos/morado-rojo.jpg"
    ];

    function pasarFoto(indiceActual) {
        let nuevoIndice;

        if (indiceActual == imagenes.length - 1) {
            nuevoIndice = 0;
        } else {
            nuevoIndice = indiceActual + 1;
        }
        establecerNuevaFoto(nuevoIndice)
    }

    function retrocederFoto(indiceActual) {
        let nuevoIndice;

        if (indiceActual == 0) {
            nuevoIndice = imagenes.length - 1;
        } else {
            nuevoIndice = indiceActual - 1;
        }

        establecerNuevaFoto(nuevoIndice);
    }

    function establecerNuevaFoto(nuevoIndice) {
        imagenActual.setAttribute("src", imagenes[nuevoIndice]);
        imagenModal.setAttribute("src", imagenes[nuevoIndice]);
        indiceActual = nuevoIndice;
    }

    function mostrarVentanaModal() {
        ventanaModal.className = "animacionMostrarVentanaModal";
        ventanaModal.style.top = "25vh";
        main.style.opacity = "0.5";
    }

    flechaAtras.addEventListener('click', function () {
        retrocederFoto(indiceActual);
    })

    flechaAdelante.addEventListener('click', function () {
        pasarFoto(indiceActual);
    })

    // Aparece la ventana modal
    imagenActual.addEventListener('click', mostrarVentanaModal)

    // Desaparece la ventana modal
    window.addEventListener('click', function (evento) {
        if (evento.target != ventanaModal && evento.target != imagenActual &&
            evento.target != flechaAtras && evento.target != flechaAdelante) {
            ventanaModal.className = "animacionQuitarVentanaModal";
            ventanaModal.style.top = "-70vh";
            main.style.opacity = "1";
        }
    });
};
