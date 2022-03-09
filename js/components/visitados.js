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
        console.log(this.titulo);
        console.log(this.imagen);
        console.log(this.texto);
        this.innerHTML=`
            <style>
            #contenedor{
                min-height:180px;
                max-width:100%;
                max-height:100%;
                text-align:center;
                word-break: break-all;
                background-size: 264px 180px;
            }
            #contenedor-contraste{
                background:rgba(0, 0, 0, 0.459);
                padding-bottom:5px;
                display:flex;
                height:180px;
                flex-direction:column;
                justify-content:space-between;
                align-items:center;
            }
            #titulo{
                margin-bottom: 6px;
                margin-top: 5px;
                padding: 2px;
                top:-100%;
                width:70%;
                color:white;
                background-color:#2c367dc1;
                word-break: keep-all;
            }
            #texto{
                
                margin: 0 auto;
                padding: 10px;
                top:-80%;
                width:70%;
                color:white;
                background-color:#7c98b3C1;
                font-weight:bold;
            }

            </style>
            <div id="contenedor" style="background-image: url(${this.imagen})">
                <div id="contenedor-contraste">
                    <h2 id="titulo">${this.titulo}</h2>
                    <p id="texto">${this.texto}</p>
                </div>
            </div>
                `;
    }
    
}

window.customElements.define('mas-visitados', MasVisitados);