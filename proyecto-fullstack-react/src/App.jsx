import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import useRouter from "./hooks/UseRouter";

function App() {
  const rutaActual = useRouter()
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
