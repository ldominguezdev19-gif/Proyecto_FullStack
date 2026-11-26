import { useState } from "react";
import JobCard from "../components/JobCard";
import SearchSection from "../components/SearchSection";
import Pagination from "../components/Pagination";
import empleos from "../data.json";

function Search() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({
    tecnologia: "",
    ubicacion: "",
    contrato: "",
    nivel: "",
  });

  const empleosFiltrados = empleos.filter((empleo) => {
    const coincideTexto = empleo.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideFiltros = Object.entries(filtros).every(([campo, valor]) => {
      return valor === "" || empleo[campo] === valor;
    });

    return coincideTexto && coincideFiltros;
  });

  const tarjetasPorPagina = 5;
  const totalPaginas = Math.ceil(empleosFiltrados.length / tarjetasPorPagina);
  const inicio = (paginaActual - 1) * tarjetasPorPagina;
  const fin = inicio + tarjetasPorPagina;
  const empleosPagina = empleosFiltrados.slice(inicio, fin);

  function manejarBusqueda(texto) {
    setBusqueda(texto);
    setPaginaActual(1);
  }

  function manejarFiltro(campo, valor) {
    setFiltros({ ...filtros, [campo]: valor });
    setPaginaActual(1);
  }
  return (
    <main>
      <SearchSection
        busqueda={busqueda}
        cambiarBusqueda={manejarBusqueda}
        filtros={filtros}
        cambiarFiltro={manejarFiltro}
      />

      <section className="results">
        <h2>Resultados de busqueda</h2>
        {empleosFiltrados.length === 0 && (
          <p className="sin-resultados"> No se encontraron empleos.</p>
        )}
        <div className="jobs-list">
          {empleosPagina.map((empleo) => (
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
  );
}

export default Search;
