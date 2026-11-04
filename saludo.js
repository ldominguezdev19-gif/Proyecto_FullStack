class DevSearchAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const usuario = this.getAttribute("usuario");
    const proveedor = this.getAttribute("proveedor") || "github";
    const nombre = this.getAttribute("nombre") || usuario;

    this.shadowRoot.innerHTML = `
    <style>
    img{
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }
    </style>
    <img src = "https://unavatar.io/${proveedor}/${usuario}" alt="Foto de ${nombre}">
    `;
  }
}

customElements.define("devsearch-avatar", DevSearchAvatar);
