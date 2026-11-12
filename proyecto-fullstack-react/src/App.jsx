import JobCard from "./assets/components/JobCard"
import Header from "./assets/components/Header"
import Footer from "./assets/components/Footer"
import SearchSection from "./assets/components/SearchSection"
import empleos from "./data.json"
import Pagination from "./assets/components/pagination"
import { useState } from "react"


function App() {
  const [paginaActual, setPaginaActual] = useState(1)
  const tarjetasPorPagina = 5
  const totalPaginas = Math.ceil(empleos.length / tarjetasPorPagina)
  const inicio = (paginaActual - 1) * tarjetasPorPagina
  const fin = inicio + tarjetasPorPagina
  const empleosPagina = empleos.slice(inicio, fin)
  return (
    <>
      <Header/>
    <main>
      <SearchSection/>
      <section className="results">
        <h2>Resultados de busqueda</h2>

        <div className="jobs-list">
            {empleos.map(empleo =>(
              <JobCard
                key={empleo.id}
                titulo={empleo.titulo}
                empresa={empleo.empresa}
                ubicacion={empleo.ubicacion}
                descripcion={empleo.descripcion}
              />
            ))}
        </div>

        <Pagination/>

      </section>

    </main>
    
    

    <Footer/>
    </>

  
  )
}

export default App
