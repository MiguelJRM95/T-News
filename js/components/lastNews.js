const template = document.createElement("template");
template.innerHTML = `
    <style>

    h3{
        color:blue;
    }

    img{
        position: absolute;
        border-top-right-radius:50%;
        border-bottom-right-radius:50%;
        height: 250px;
        width: 250px;
    }

    #new-container{
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
    }

    #title-container{
        height:100%;
        position: absolute;
        left:260px;
        text-align: justify;
        padding: 15px;
    }

    </style>
    <div id="new-container">
        <img/>
        <div id="title-container">
            <h3></h3>
            <p></p>
        </div>
    </div>
`;

class lastNews extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('titular');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('texto');
        this.shadowRoot.querySelector('img').src = this.getAttribute('foto');
        
    }

}

window.customElements.define("last-news", lastNews);