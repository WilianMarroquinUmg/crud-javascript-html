function vizualizarPelicula(id){

    console.log(id);
    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${id}`)
        .then(response => response.json())
        .then(response => {

            document.getElementById('movieId').value = response.imdbID;
            document.getElementById('movieTitle').value = response.Title;
            document.getElementById('movieYear').value = response.Year;
            document.getElementById('movieType').value = response.Type;
            document.getElementById('moviePoster').value = response.Poster;
            document.getElementById('movieEstado').value = (response.Estado === true) ? 1 : 0;
            document.getElementById('movieDescription').value = response.description;
            document.getElementById('movieUbication').value = response.Ubication;

            abrirModal()

        })
        .catch(error => {

            alertPerzonalizado('error', error)

        });





}
