//Aqui guardo la lista completa de ofertas
let empleos = []

//Guardo el select cde todos los filtros usados
const selectTecnologia = document.querySelector('#technology')
const selectUbicacion = document.querySelector('#location')
const selectContrato = document.querySelector('#contract')
const selectNivel = document.querySelector('#experience')


// Guardo el contenedor donde van a aparecer las tarjetas de empleos
const listaEmpleos = document.querySelector(".jobs-list");
const contenedorFiltros = document.querySelector('.filter')

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
    empleos = datos
    //Cuando los datos ya llegaron, dibujo las ofertas
    pintarEmpleos(datos);
  });


//Revisa que eligio el usuario y pinta solo las ofertas que coinciden
function filtrarEmpleos (){
  const tecnologia = selectTecnologia.value

  const resultado = empleos.filter(function(empleo){
    //Pasa si no eligio nada, o si la tecnologia de la oferta es la que eligio
    return tecnologia === '' || empleo.tecnologia === tecnologia
  })

  pintarEmpleos(resultado)
}

//Cada vez que el usuario elige otra opcion vuelve a filtrar
selectTecnologia.addEventListener('change', filtrarEmpleos)