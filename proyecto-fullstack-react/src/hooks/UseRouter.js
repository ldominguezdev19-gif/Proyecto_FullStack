import { useState, useEffect } from "react"; 

export function navegar(href){
  window.history.pushState({}, "", href)
  window.dispatchEvent(new Event("pushstate"))
}

function useRouter(){
  const [rutaActual, setRutaActual] = useState(window.location.pathname)

  useEffect(() => {
    function actualizarRuta(){
      setRutaActual(window.location.pathname)
    }

    window.addEventListener("popstate", actualizarRuta)
    window.addEventListener("pushstate", actualizarRuta)

    return() => {
      window.removeEventListener("popstate", actualizarRuta)
      window.addEventListener("pushstate", actualizarRuta)
    }
  }, [])

  return rutaActual
}

export default useRouter
