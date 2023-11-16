function ObtenerInfoIntegrante() {
    fetch('http://localhost:5205/Api/InfoIntegrantes')
        .then(respuesta => respuesta.json())
        .then(data => infoIntegrantes(data))
        .catch(error => console.error("No se pudo acceder a la API.", error));
}


function infoIntegrantes(data) {
    $.each(data, function (index, item) {
        $("#QuienesSomos").append(
            "<div class='div2 wow animate__animated animate__fadeIn animate__delay-1s'>" +
            "<img src='bv25mayo.jpg'>" +
            "<h3>" + item.nombre + "</h3>" +
            "<p><b>" + item.cargo + "</b></p>" +
            "</div>"
        )
    })
}

