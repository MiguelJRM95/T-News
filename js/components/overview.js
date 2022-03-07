class Overview extends HTMLElement {
  static css = `
    :host {
        width: 400px;
        height: 120px;
        background: #cee5f1;
        overflow: hidden;
    }

    .overview-container{
      position: relative;
      width: 400px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 15px;
      padding-left: 60px;
    }

    img {
      position: absolute;
      left: -180px;
      top: -90px;
      height: 300px;
      width: 300px;
      border-radius: 50%
    }

    #title-container {
      word-wrap: break-word;
      width: 50%;
    }
  `;

  static get observedAttributes() {
    return ["title", "image"];
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    const overviewContainer = document.createElement("div");

    overviewContainer.innerHTML = `
      <img alt='${this.image}' src='${this.image}' />
      <div id='title-container'>
        <h4>${this.title}</h4>
      </div>
    `;

    style.innerHTML = Overview.css;
    overviewContainer.classList.add("overview-container");

    this.shadowRoot.append(style, overviewContainer);
  }

  get title() {
    const value = this.getAttribute("title");

    if (/^\d+$/.test(value)) {
      throw `${value} => title can't be a number`;
    }

    if (value.length < 4) {
      throw `${value} => title too short`;
    }

    return value;
  }

  set title(value) {
    if (/^\d+$/.test(value)) {
      throw `${value} => title can't be a number`;
    }

    if (value.length < 4) {
      throw `${value} => title too short`;
    }

    this.setAttribute("title", value);
  }

  get image() {
    const img = this.getAttribute("image");

    if (img === "") {
      return "";
    }

    if (img.split(".").length <= 1) {
      throw `${img} => not a valid path`;
    }

    return img;
  }

  set image(img) {
    if (img.split(".").length <= 1) {
      throw `${img} => not a valid path`;
    }

    this.setAttribute("image", img);
  }

  attributeChangedCallback(attrs) {
    if (attrs === "title") {
      if (this.title.length > 117) {
        this.shadowRoot.querySelector("h4").innerText = `${this.title.substring(
          0,
          114
        )}...`;
      } else {
        this.shadowRoot.querySelector("h4").innerText = `${this.title}`;
      }
    }

    if (attrs === "image") {
      this.shadowRoot.querySelector("img").src = `${this.image}`;
    }
  }
}

customElements.define("t-overview", Overview);
