// Guardo el contenedor donde van a aparecer las tarjetas de empleos
const listaEmpleos = document.querySelector(".jobs-list");


// Recibe una lista de ofertas y las dibuja en la pagina.
// Recibe la lista como parametro para poder usarla tambien con ofertas filtradas
function pintarEmpleos(lista) {
  // Aqui voy a ir acumulando el HTML de todas las tarjetas
  let html = "";

  //Recorro la lista: en cada vuelta y cada empleo es una oferta distinta
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

  //Meto todas las tarjetas de una vez dentro del contenedor
  listaEmpleos.innerHTML = html
}

//Pido el archivo con los datos de las ofertas
fetch("data.json")
  .then(function (respuesta) {
    //Convierto la respuesta en un arreglo que JavaScrip pueda usar
    return respuesta.json();
  })
  .then(function (datos) {
    //Cuando los datos ya llegaron, dibujo las ofertas
    pintarEmpleos(datos);
  });
