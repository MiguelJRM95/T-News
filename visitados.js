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
                max-width:100%;
                max-height:100%;
                text-align:center;
                word-break: break-all;
                border: 2px solid black;
            }
            
            #titulo{
                
                margin: 0 auto;
                top:-100%;
                width:70%;
                background-color:#d8e2dc;
            }
            #texto{
                
                margin: 0 auto;
                top:-80%;
                width:70%;
                background-color:#d8e2dc;
                font-weight:bold;
            }
            img{
                height:100%;
                width:20px;
            }
            </style>
                    <div id="contenedor" style="background-image: url(${this.imagen})">
                        <h2 id="titulo">${this.titulo}</h2>
                        <p id="texto">${this.texto}</p>
                    </div>
                        `;
    }
    
}

window.customElements.define('mas-visitados', MasVisitados);