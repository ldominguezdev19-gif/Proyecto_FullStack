



fetch('data.json')
  .then(function (respuesta){
    return respuesta.json()
  })
  .then(function (datos){
    console.log(datos)
  })