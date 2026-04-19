let apiKey = "87a9e1cb1854130a0fa7c08d48685122";
let latitud = 0;
let longitud = 0;

$(document).ready(function () {
    obtenerUbicacion();
});

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            latitud = pos.coords.latitude;
            longitud = pos.coords.longitude;

            obtenerClima();
        }, function () {
            alert("No se pudo obtener la ubicación");
        });
    }
}

function obtenerClima() {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`;

    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function (data) {
            mostrarClima(data);
        },
        error: function () {
            alert("Error al obtener el clima");
        }
    });
}

function mostrarClima(data) {

    $("#lug").text(data.name);
    $("#tem").text(data.main.temp + " °C");
    $("#hum").text(data.main.humidity + " %");
    $("#vie").text(data.wind.speed);

    let icono = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    $("#tiempoIcon").attr("src", icono);
}
