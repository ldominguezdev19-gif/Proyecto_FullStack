import { useId } from "react";

const FILTROS = [
  {
    campo: "tecnologia",
    id: "technology",
    titulo: "Tecnología",
    opciones: [
      { valor: "javascript", texto: "JavaScript" },
      { valor: "react", texto: "React" },
      { valor: "python", texto: "Python" },
      { valor: "node.js", texto: "Node.js" },
      { valor: "C#", texto: "C#" },
      { valor: "sql", texto: "SQL" },
      { valor: "aws", texto: "AWS" },
    ],
  },
  {
    campo: "ubicacion",
    id: "location",
    titulo: "Ubicación",
    opciones: [
      { valor: "remoto", texto: "Remoto" },
      { valor: "barranquilla", texto: "Barranquilla" },
      { valor: "bogota", texto: "Bogotá" },
      { valor: "medellin", texto: "Medellin" },
    ],
  },
  {
    campo: "contrato",
    id: "contract",
    titulo: "Tipo de contrato",
    opciones: [
      { valor: "tiempo-completo", texto: "Tiempo Completo" },
      { valor: "medio-tiempo", texto: "Medio tiempo" },
      { valor: "freelance", texto: "Freelance" },
      { valor: "practicas", texto: "Practicas" },
    ],
  },
  {
    campo: "nivel",
    id: "experience",
    titulo: "Nivel de experiencia",
    opciones: [
      { valor: "junior", texto: "Junior" },
      { valor: "semi-senior", texto: "Semi Senior" },
      { valor: "senior", texto: "Senior" },
    ],
  },
];

function SearchSection({ busqueda, cambiarBusqueda, filtros, cambiarFiltro }) {
  const idBusqueda = useId();
  return (
    <section className="search-section">
      <h1>Encuentra tu proximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnologico.</p>

      <form
        role="search"
        className="search-form"
        onSubmit={(evento) => evento.preventDefault()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <label htmlFor={idBusqueda} className="visually-hidden">
          Buscar empleos
        </label>
        <input
          type="text"
          placeholder="Buscar trabajos, empresas o habilidades"
          required
          id={idBusqueda}
          autoComplete="off"
          value={busqueda}
          onChange={(evento) => cambiarBusqueda(evento.target.value)}
        />
      </form>

      <div className="filter">
        <div className="filter">
          {FILTROS.map((filtro) => (
            <select
              key={filtro.campo}
              id={filtro.id}
              value={filtros[filtro.campo]}
              onChange={(evento) =>
                cambiarFiltro(filtro.campo, evento.target.value)
              }
            >
              <option value="">{filtro.titulo}</option>
              {filtro.opciones.map((opcion) => (
                <option key={opcion.valor} value={opcion.valor}>
                  {opcion.texto}
                </option>
              ))}
            </select>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
