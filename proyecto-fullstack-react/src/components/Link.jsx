import { navegar } from "../hooks/UseRouter";

function Link({ href, children }) {
  function manejarClic(evento) {
    const esClicNormal =
      evento.button === 0 &&
      !evento.ctrlKey &&
      !evento.metaKey &&
      !evento.shiftKey &&
      !evento.altKey;

    if (!esClicNormal) return;

    evento.preventDefault();
    navegar(href);
  }

  return (
    <a href={href} onClick={manejarClic}>
      {children}
    </a>
  );
}

export default Link;
