function ObtenerInformacion() {
    fetch('http://localhost:5205/Api/Informacion')
        .then(respuesta => respuesta.json())
        .then(data => mostrarInformacion(data)) 
        .catch(error => console.error("No se pudo acceder a la API.", error));
}

function mostrarInformacion(data) {
    $.each(data,function(index, item) {
        $("#TextoDescripcion").append(
         "<p class='centrarTexto'>" + item.contenido + "</p>"
        )
    })
}