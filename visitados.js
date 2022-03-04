class MasVisitados extends HTMLElement{
    
    constructor(){
        super();
        this.titulo=null;
        this.imagen=null;
        this.texto=null;
    }
    connectedCallback(){
        this.titulo=this.getAttribute('titulo');
        this.imagen=this.getAttribute('imagen');
        this.texto=this.getAttribute('texto');
        this.innerHTML=`
            <style>
            #contenedor{
                height:150px;
                width:250px;
                text-align:center;
                border: 2px solid black;
            }
            
            #titulo{
                position:relative;
                margin: 0 auto;
                top:-100%;
                width:70%;
                background-color:#d8e2dc;
            }
            #texto{
                position:relative;
                margin: 0 auto;
                top:-80%;
                width:70%;
                background-color:#d8e2dc;
                font-weight:bold;
            }
            </style>
                    <div id="contenedor">
                        <img src="${this.imagen}" height="150px" width="250px">
                        <h2 id="titulo">${this.titulo}</h2>
                        <p id="texto">${this.texto}</p>
                    </div>
                        `;
    }
    
}

window.customElements.define('mas-visitados', MasVisitados);