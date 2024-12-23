const template = document.createElement("template");
template.innerHTML = `
    <h1>
        My Header
    </h1>
`;

class CustomHeader extends HTMLElement {
  constructor() {
    super();

    const clone = template.content.cloneNode(true);
    this.appendChild(clone);
  }
}

window.customElements.define("custom-header", CustomHeader);
