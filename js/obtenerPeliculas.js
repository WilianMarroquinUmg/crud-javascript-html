let data = [];
function getPeliculas() {

    data = [];

    fetch("https://movie.azurewebsites.net/api/cartelera?title=&ubication=")
        .then(response => response.json())
        .then(peliculas => {
            peliculas.forEach(pelicula => {
                data.push({
                    imdbID: pelicula.imdbID,
                    Title: pelicula.Title,
                    Year: pelicula.Year,
                    Type: pelicula.Type,
                    Poster: pelicula.Poster,
                    description: pelicula.description,
                    Ubication: pelicula.Ubication,
                    Estado: pelicula.Estado,
                });
            });
            renderTable(); // Renderizamos la tabla
        })
        .catch(error => {
            console.error('Error al obtener las películas:', error);
        });
}

function renderTable() {

    const tableBody = document.querySelector("#table tbody");

    // Limpiar el tbody antes de renderizar
    tableBody.innerHTML = "";

    // Iteramos sobre los datos para crear filas en la tabla
    data.forEach(pelicula => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = pelicula.imdbID;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = pelicula.Title;
        row.appendChild(titleCell);

        const yearCell = document.createElement("td");
        yearCell.textContent = pelicula.Year;
        row.appendChild(yearCell);

        const typeCell = document.createElement("td");
        typeCell.textContent = pelicula.Type;
        row.appendChild(typeCell);

        const posterCell = document.createElement("td");
        const posterImg = document.createElement("img");
        posterImg.src = pelicula.Poster;
        posterImg.style.width = "80px";

        posterCell.appendChild(posterImg);
        row.appendChild(posterCell);

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = pelicula.description;
        row.appendChild(descriptionCell);

        const ubicationCell = document.createElement("td");
        ubicationCell.textContent = pelicula.Ubication;
        row.appendChild(ubicationCell);

        const estadoCell = document.createElement("td");
        estadoCell.textContent = pelicula.Estado;
        row.appendChild(estadoCell);


        const actionsCell = document.createElement("td");

        const vizualizarButton = document.createElement("button");
        vizualizarButton.textContent = "Vizualizar";
        vizualizarButton.className = "btn btn-info btn-sm me-2";
        vizualizarButton.onclick = () => {
            vizualizarPelicula(pelicula.imdbID);
        };
        actionsCell.appendChild(vizualizarButton);


        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.className = "btn btn-primary btn-sm me-2";
        editButton.onclick = () => {
            levanterModalActualizarPelicula(pelicula);
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

        // Añadimos la fila al tbody de la tabla
        tableBody.appendChild(row);
    });

}

getPeliculas();
