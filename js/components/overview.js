class Overview extends HTMLElement {
  static css = `
    :host {
        display: block;
        width: 300px;
        height: 120px;
        background: #eeeeee;
    }
  `;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    const overviewContainer = document.createElement("div");

    style.innerHTML = Overview.css;
    overviewContainer.classList.add("overview-container");

    this.shadowRoot.append(style, overviewContainer);
  }
}

customElements.define("t-overview", Overview);
