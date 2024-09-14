function vizualizarPelicula(id){

    abrirModal()

    document.getElementById('movieId').disabled = true;
    document.getElementById('movieTitle').disabled = true;
    document.getElementById('movieYear').disabled = true;
    document.getElementById('movieType').disabled = true;
    document.getElementById('moviePoster').disabled = true;
    document.getElementById('movieEstado').disabled = true;
    document.getElementById('movieDescription').disabled = true;
    document.getElementById('movieUbication').disabled = true;

    document.getElementById('boton').style.display = 'none';

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


        })
        .catch(error => {

            alertPerzonalizado('error', error)

        });





}
