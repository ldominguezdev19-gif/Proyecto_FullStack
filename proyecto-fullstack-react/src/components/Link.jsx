import { navegar } from "../hooks/UseRouter"

function Link({ href, children }) {
  function manejarClic(evento) {
    evento.preventDefault()
    navegar(href)
  }

  return (
    <a href={href} onClick={manejarClic}>
      {children}
    </a>
  )
}

export default Link