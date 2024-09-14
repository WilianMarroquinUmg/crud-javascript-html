function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true; // Para cargar el script asíncronamente
    document.body.appendChild(script);
}

let scripts = [
    '../js/actualizarPelicula.js',
    '../js/cargarComponents.js',
    '../js/eliminarPelicula.js',
    '../js/guardarPelicula.js',
    '../js/modal.js',
    '../js/obtenerPeliculas.js',
    '../js/vizualizarPelicula.js',
    ]

scripts.forEach(script => {

    loadScript(script);

});
