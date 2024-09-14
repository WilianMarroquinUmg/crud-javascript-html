
function leventarModalGuardar(){

    console.log('ejecutando metodo leventarModalGuardar')
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();

    const boton = document.getElementById('boton');
    boton.innerHTML = 'Guardar';
    boton.setAttribute('onclick', 'guardarPelicula()');
    boton.classList.add('btn-primary');
    boton.classList.add('btn');

    document.getElementById('editModalLabel').innerHTML = 'Agregar Pelicula';

    document.getElementById('movieId').value = '';
    document.getElementById('movieTitle').value = '';
    document.getElementById('movieYear').value = '';
    document.getElementById('movieType').value = '';
    document.getElementById('moviePoster').value = '';
    document.getElementById('movieEstado').value = '';
    document.getElementById('movieDescription').value = '';
    document.getElementById('movieUbication').value = '';
}

function guardarPelicula() {

        const data = {
            imdbID: document.getElementById('movieId').value  ,
            Title: document.getElementById('movieTitle').value ,
            Year: document.getElementById('movieYear').value ,
            Type: document.getElementById('movieType').value ,
            Poster: document.getElementById('moviePoster').value ,
            description: document.getElementById('movieDescription').value,
            Ubication: document.getElementById('movieUbication').value ,
            Estado: parseInt(document.getElementById('movieEstado').value) ,
        }

        fetch('https://movie.azurewebsites.net/api/cartelera', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert(data.message)
            const modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.hide();

        })
        .catch((error) => {
            console.error('Error:', error.Message)
        });

}
