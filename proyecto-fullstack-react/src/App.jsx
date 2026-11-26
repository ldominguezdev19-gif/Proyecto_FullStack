import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";

function App() {
  const rutaActual = window.location.pathname
  let pagina = <NotFound/> 

  if (rutaActual === "/"){
    pagina = <Home/>
  } else if (rutaActual === "/Search"){
    pagina = <Search/>
  }

  return (
    <>
      <Header />
      {pagina}
      <Footer />
    </>
  );
}

export default App;
