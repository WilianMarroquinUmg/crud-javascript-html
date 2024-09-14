// Función para cargar componentes HTML
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el componente: ' + url);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

loadComponent('components/modal_pelicula.html', 'modal-component');
loadComponent('components/tabla.html', 'tabla-component');
