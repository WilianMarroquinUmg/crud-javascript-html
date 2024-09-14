function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

loadComponent('components/modal_pelicula.html', 'modal-component', );
loadComponent('components/tabla.html', 'tabla-component');
