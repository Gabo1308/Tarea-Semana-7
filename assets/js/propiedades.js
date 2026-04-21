let apiURL = "https://Gabo1308.github.io/Tarea-Semana-7/datos/propiedades.json";

$(document).ready(function () {
    cargarPropiedades();
});

function cargarPropiedades() {
    $.ajax({
        url: apiURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            mostrarPropiedades(data);
        },
        error: onError
    });
}

function mostrarPropiedades(datos) {
    let contenedor = document.getElementById("datosPropiedades");
    let cards = "";

    contenedor.innerHTML = "";

    datos.propiedades.forEach(function (propiedad) {

        let precioFormateado = Number(propiedad.precio).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        cards += `
        <div class="col-md-4">
            <div class="card-box-a card-shadow">

                <div class="img-box-a">
                    <img src="${propiedad.imagen}" class="img-a img-fluid">
                </div>

                <div class="card-overlay">
                    <div class="card-overlay-a-content">

                        <div class="card-header-a">
                            <h2 class="card-title-a">
                                <a href="#">${propiedad.clasificacion}</a>
                            </h2>
                            <p class="link-a">${propiedad.descripcion}</p>
                        </div>

                        <div class="card-body-a">
                            <div class="price-box d-flex">
                                <span class="price-a">
                                    ${propiedad.tipo} | $${precioFormateado}
                                </span>
                            </div>
                        </div>

                        <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                                <li>
                                    <h4>Area</h4>
                                    <span>${propiedad.detalle.area} m²</span>
                                </li>
                                <li>
                                    <h4>Rooms</h4>
                                    <span>${propiedad.detalle.rooms}</span>
                                </li>
                                <li>
                                    <h4>Floors</h4>
                                    <span>${propiedad.detalle.floors}</span>
                                </li>
                                <li>
                                    <h4>Garages</h4>
                                    <span>${propiedad.detalle.garages}</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        `;
    });

    contenedor.innerHTML = cards;
}

function onError(jqXHR, textStatus, errorThrown) {
    alert("Error al cargar las propiedades: " + errorThrown);
}