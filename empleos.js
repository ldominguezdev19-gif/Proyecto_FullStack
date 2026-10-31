const listaEmpleos = document.querySelector(".jobs-list");

function pintarEmpleos(lista) {
  let html = "";

  lista.forEach(function (empleo) {
    html =
      html +
      '<article class="job-card">' +
      '<div class="job-info">' +
      '<h3 class="job-title"><a href="job-detail.html?id=' +
      empleo.id +
      '">' +
      empleo.titulo +
      "</a></h3>" +
      '<p class="job-meta">' +
      '<span class="job-company">' +
      empleo.empresa +
      "</span>" +
      '<span class="job-location">' +
      empleo.ubicacion +
      "</span>" +
      "</p>" +
      '<p class="job-description">' +
      empleo.descripcion +
      "</p>" +
      "</div>" +
      '<button class="job-apply">Aplicar</button>' +
      "</article>";
  });

  listaEmpleos.innerHTML = html
}

fetch("data.json")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    pintarEmpleos(datos);
  });
