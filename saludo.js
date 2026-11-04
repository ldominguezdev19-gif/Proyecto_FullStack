class DevSearchAvatar extends HTMLElement {
  connectedCallback(){
    const usuario = this.getAttribute('usuario')
    const proveedor = this.getAttribute('proveedor') ||'github'

    const img = document.createElement('img')
    img.src = 'https://unavatar.io/' + proveedor + '/' + usuario
    img.alt = 'foto de' + usuario

    this.appendChild(img)
  }
}

customElements.define('devsearch-avatar', DevSearchAvatar)