
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

            alertPerzonalizado('success', 'La película ha sido eliminada correctamente')

        })
        .catch(error => {
            console.error('Error al eliminar la película:', error);
        });
}
