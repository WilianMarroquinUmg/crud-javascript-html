function abrirModal() {

    document.getElementById('movieId').disabled = false;
    document.getElementById('movieTitle').disabled = false;
    document.getElementById('movieYear').disabled = false;
    document.getElementById('movieType').disabled = false;
    document.getElementById('moviePoster').disabled = false;
    document.getElementById('movieEstado').disabled = false;
    document.getElementById('movieDescription').disabled = false;
    document.getElementById('movieUbication').disabled = false;

    document.getElementById('boton').style.display = 'block';


    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();

}

function cerrarModal() {
    // Obtener la instancia del modal
    const modalElement = document.getElementById('editModal');
    const modal = bootstrap.Modal.getInstance(modalElement); // Verifica si ya existe la instancia

    // Si no hay una instancia, la creamos
    if (!modal) {


        const newModal = new bootstrap.Modal(modalElement);
        newModal.hide();


    } else {

        modal.hide();
    }
}
