import JobCard from "./assets/components/JobCard"

function App() {

  return (
    <>
    <header>
        <h2>DevSearch</h2>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="empleos.html">Empleos</a>
        </nav>

        <div>
            <a href="">Publicar un empleo</a>
            <a href="">Iniciar sesión</a>
        </div>
    </header>
    <main>
      <section class="search-section">
        <h1>Encuentra tu proximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnologico.</p>

        <form role="search" class="search-form">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            required
            id="search"
            autocomplete="off"
          />
        </form>

        <div class="filter">
          <select name="technology" id="technology">
            <option value="">Tecnología</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="python">Python</option>
            <option value="node.js">Node.js</option>
            <option value="C#">C#</option>
            <option value="sql">SQL</option>
            <option value="aws">AWS</option>
          </select>

          <select name="Location" id="location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="barranquilla">Barranquilla</option>
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellin</option>
          </select>

          <select name="Contract" id="contract">
            <option value="">Tipo de contrato</option>
            <option value="tiempo-completo">Tiempo Completo</option>
            <option value="medio-tiempo">Medio tiempo</option>
            <option value="freelance">Freelance</option>
            <option value="practicas">Practicas</option>
          </select>

          <select name="Experience" id="experience">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="semi-senior">Semi Senior</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </section>

      <section class="results">
        <h2>Resultados de busqueda</h2>

        <div className="jobs-list">
            <JobCard titulo="Frontend Developer"/>
            <JobCard titulo="Ingenierdo de Datos"/>
        </div>

        <nav class="pagination">
          <a class="active" href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
        </nav>

      </section>

    </main>
    
    

    <footer>
      <small>&copy; 2026 DevSearch. Todos los derechos reservados</small>
    </footer>
    </>
  )
}

export default App
