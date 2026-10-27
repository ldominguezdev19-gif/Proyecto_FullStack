const boton = document.querySelector("#btn-aplicar")

boton.addEventListener('click', function() {
  boton.textContent = '¡Aplicado!'
  boton.classList.add("is-applied")
  boton.disabled = true
})