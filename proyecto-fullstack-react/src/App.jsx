import JobCard from "./assets/components/JobCard"
import Header from "./assets/components/Header"
import Footer from "./assets/components/Footer"
import SearchSection from "./assets/components/SearchSection"
import empleos from "./data.json"
import Pagination from "./assets/components/Pagination"
import { useState } from "react"


function App() {
  const [paginaActual, setPaginaActual] = useState(1)
  const [busqueda, setBusqueda] = useState("")

  const empleosFiltrados = empleos.filter(empleo => {
    return empleo.titulo.toLowerCase().includes(busqueda.toLowerCase())
    })

  const tarjetasPorPagina = 5
  const totalPaginas = Math.ceil(empleosFiltrados.length / tarjetasPorPagina)
  const inicio = (paginaActual - 1) * tarjetasPorPagina
  const fin = inicio + tarjetasPorPagina
  const empleosPagina = empleosFiltrados.slice(inicio, fin)

  function manejarBusqueda(texto){
    setBusqueda(texto)
    setPaginaActual(1)
  }

  return (
    <>
      <Header/>
    <main>
      <SearchSection
        busqueda={busqueda}
        cambiarBusqueda={manejarBusqueda}
      />
      
      <section className="results">
        <h2>Resultados de busqueda</h2>

        <div className="jobs-list">
            {empleosPagina.map(empleo =>(
              <JobCard
                key={empleo.id}
                titulo={empleo.titulo}
                empresa={empleo.empresa}
                ubicacion={empleo.ubicacion}
                descripcion={empleo.descripcion}
              />
            ))}
        </div>

        <Pagination
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          cambiarPagina={setPaginaActual}
        />

      </section>

    </main>
    
    

    <Footer/>
    </>

  
  )
}

export default App
