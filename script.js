/*
const botones = document.querySelectorAll(".job-apply")

botones.forEach(boton => {
  boton.addEventListener('click', function() {
    boton.textContent = '¡Aplicado!'
    boton.classList.add("is-applied")
    boton.disabled = true
  })
})
*/

const jobsListingSection = document.querySelector('.jobs-list')
jobsListingSection.addEventListener('click', function(event){
  const element = event.target

  if(element.classList.contains('job-apply')){
    element.textContent = '¡Aplicado!'
    element.classList.add("is-applied")
    element.disabled = true
  }

})