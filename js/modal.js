function abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

function cerrarModal() {
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.hide();
}
