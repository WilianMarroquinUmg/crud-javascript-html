function levanterModalActualizarPelicula(pelicula) {
    console.log(pelicula);

    abrirModal()

    document.getElementById('editModalLabel').innerHTML = 'Editar Pelicula'+ pelicula.Title;

    const boton = document.getElementById('boton');
    boton.innerHTML = 'Actualizar';
    boton.setAttribute('onclick', 'actualizarPelicula()');
    boton.classList.add('btn-warning');

    let id = document.getElementById('movieId');
    id.value = pelicula.imdbID;
    id.setAttribute('readonly', true);

    document.getElementById('movieTitle').value = pelicula.Title;
    document.getElementById('movieYear').value = pelicula.Year;
    document.getElementById('movieType').value = pelicula.Type;
    document.getElementById('moviePoster').value = pelicula.Poster;
    document.getElementById('movieEstado').value = (pelicula.Estado === true) ? 1 : 0;
    document.getElementById('movieDescription').value = pelicula.description;
    document.getElementById('movieUbication').value = pelicula.Ubication;

}

function actualizarPelicula(){

const imdbID = document.getElementById('movieId').value;
    const title = document.getElementById('movieTitle').value;
    const year = document.getElementById('movieYear').value;
    const type = document.getElementById('movieType').value;
    const poster = document.getElementById('moviePoster').value;
    const estado = document.getElementById('movieEstado').value;
    const description = document.getElementById('movieDescription').value;
    const ubication = document.getElementById('movieUbication').value;

    const data = {
        imdbID: imdbID,
        Title: title,
        Year: year,
        Type: type,
        Poster: poster,
        description: description,
        Ubication: ubication,
        Estado: parseInt(estado)
    }

    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${imdbID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log(response);

            getPeliculas();

            alertPerzonalizado('success', 'La película ha sido actualizada correctamente')

            cerrarModal();

        })
        .catch(error => {

            alertPerzonalizado('error', 'Error al actualizar la película')

        });

}
