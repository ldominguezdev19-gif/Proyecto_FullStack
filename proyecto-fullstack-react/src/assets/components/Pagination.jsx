function Pagination ({paginaActual, totalPaginas, cambiarPagina}){
  const paginas = []

  for (let i =1; i <= totalPaginas; i++){
    paginas.push(i)
  }
  return(
    <nav className="pagination">
          {paginas.map(pagina => (
            <a key={pagina} href="#">{pagina}</a>
          ))}
    </nav>
  )
}

export default Pagination