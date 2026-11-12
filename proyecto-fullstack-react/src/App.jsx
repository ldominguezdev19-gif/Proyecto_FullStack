import JobCard from "./assets/components/JobCard"
import Header from "./assets/components/Header"
import Footer from "./assets/components/Footer"
import SearchSection from "./assets/components/SearchSection"
import empleos from "./data.json"
import Pagination from "./assets/components/pagination"
function App() {

  return (
    <>
      <Header/>
    <main>
      <SearchSection/>
      <section class="results">
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
