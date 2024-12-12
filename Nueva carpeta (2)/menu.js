let indiceImagen = 1;
mostrarImagen(indiceImagen);

// Controla el cambio de imagen
function cambiarImagen(n) {
    mostrarImagen(indiceImagen += n);
}

// Muestra la imagen seleccionada
function mostrarImagen(n) {
    const imagenes = document.getElementsByClassName("imagenes");
    const puntos = document.getElementsByClassName("punto");

    if (n > imagenes.length) { indiceImagen = 1; }
    if (n < 1) { indiceImagen = imagenes.length; }

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
    }

    for (let i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" activo", "");
    }

    imagenes[indiceImagen - 1].style.display = "block";
    puntos[indiceImagen - 1].className += " activo";
    setTimeout(showSlides, 2);
}
    