function loadComponent(url, elementId, scriptUrl = null) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (scriptUrl) {
                loadScript(scriptUrl);  // Cargar el archivo JS específico del componente
            }
        })
        .catch(error => console.error('Error:', error));
}
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true; // Para cargar el script asíncronamente
    document.body.appendChild(script);
}

loadComponent('components/modal_pelicula.html', 'modal-component', );
loadComponent('components/tabla.html', 'tabla-component', 'js/obtenerPeliculas.js');
