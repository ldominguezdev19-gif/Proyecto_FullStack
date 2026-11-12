function Pagination ({paginaActual, totalPaginas, cambiarPagina}){
  const paginas = []

  for (let i =1; i <= totalPaginas; i++){
    paginas.push(i)
  }
  return(
    <nav className="pagination">
          {paginas.map(pagina => (
            <a key={pagina} href="#" className={pagina === paginaActual ? "active": ""}
            onClick={(evento) => {
              evento.preventDefault()
              cambiarPagina(pagina)
            }}
            >{pagina}</a>
          ))}
    </nav>
  )
}

export default Pagination