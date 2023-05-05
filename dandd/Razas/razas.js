let botonM=document.getElementById("monster").addEventListener("click",re);

const linkGeneral = "https://api.open5e.com";
const linkrazas = "https://api.open5e.com/races/";   
document.write(razasImg[0]);
const peticion = () => {
    try {
        fetch(linkrazas)
            .then((response) => response.json())
            .then(razas =>
                razas.results.forEach(raza => {
                    const caja = document.createElement('div');
                    caja.classList.add('caja', 'card', 'col-12','col-lg-5');
                    
                    const cuerpoCaja = document.createElement('div');
                    cuerpoCaja.classList.add('cajaCuerpo', 'card-body')
                
                    const titulo = document.createElement('h3');
                    titulo.classList.add('card-title', 'titulo');
                    titulo.textContent = `${raza.name} `;

                    const desc = document.createElement('p');
                    desc.classList.add('card-text', 'desc');
                    desc.textContent = `${raza.desc} `;
                    
                    const imagen = document.createElement('img');
                    imagen.classList.add('img-fluid', 'imagen');
                    for( let i=0; i<razasImg.length;i++){
                        if(razasImg[i].nombre===raza.name){
                            imagen.setAttribute('src',razasImg[i].imagen);
                        }
                    }
                    //insercion de elementos de cada card 
                    cuerpoCaja.appendChild(titulo);
                    cuerpoCaja.appendChild(imagen);
                    cuerpoCaja.appendChild(desc);
                    caja.appendChild(cuerpoCaja);
                    contenedor.appendChild(caja);
                 
                }));
           
    } catch (error) {
        console.log(error)
    }

}

 function re(){
    window.location.href="../mounstruos/mounstruos.html";
}

peticion();


