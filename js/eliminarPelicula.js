
function eliminarPelicula(imdbID) {
    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${imdbID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response);

            getPeliculas();

        })
        .catch(error => {
            console.error('Error al eliminar la película:', error);
        });
}
