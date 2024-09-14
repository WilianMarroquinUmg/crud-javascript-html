
function getPeliculas() {
    data.splice(0, data.length);
    fetch("https://movie.azurewebsites.net/api/cartelera?title=&ubication=")
        .then(response => response.json())
        .then(peliculas => {
            peliculas.forEach(pelicula => {
                data.push({
                    imdbID: pelicula.imdbID,
                    title: pelicula.title,
                    year: pelicula.Year,
                    description: pelicula.description
                });
            });
            renderTable(); // Renderizamos la tabla
        })
        .catch(error => {
            console.error('Error al obtener las películas:', error);
        });
}

function renderTable() {
    // Limpiamos la tabla antes de agregar los datos
    tableBody.innerHTML = "";

    // Iteramos sobre los datos para crear filas en la tabla
    data.forEach(pelicula => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = pelicula.imdbID;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = pelicula.title;
        row.appendChild(titleCell);

        const yearCell = document.createElement("td");
        yearCell.textContent = pelicula.year;
        row.appendChild(yearCell);

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = pelicula.description;
        row.appendChild(descriptionCell);

        const actionsCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.className = "btn btn-primary btn-sm me-2";
        editButton.onclick = () => {
            openEditModal(pelicula);
        };
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.onclick = () => {

            eliminarPelicula(pelicula.imdbID);

        };
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        // Añadimos la fila a la tabla
        tableBody.appendChild(row);
    });

}
