
function abrirModal() {
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
