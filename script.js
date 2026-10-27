const botones = document.querySelectorAll(".job-apply")

botones.forEach(boton => {
  boton.addEventListener('click', function() {
    boton.textContent = '¡Aplicado!'
    boton.classList.add("is-applied")
    boton.disabled = true
  })
})

