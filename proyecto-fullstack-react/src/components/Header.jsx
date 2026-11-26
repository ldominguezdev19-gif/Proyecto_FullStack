import Link from "./Link"

function Header () {
  return (
    <header className="site-header">
      <h2>DevSearch</h2>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/Search">Empleos</Link>
      </nav>

      <div>
        <a href="">Publicar un empleo</a>
        <a href="">Iniciar sesión</a>
        <devsearch-avatar proveedor="github" usuario="ldominguezdev19-gif"></devsearch-avatar>
      </div>
    </header>
  )
}

export default Header