let botonR=document.getElementById("razas").addEventListener("click",redireccion);

const linkrazas = "https://api.open5e.com/monsters/";

const peticion = () => {
    

    try {
        fetch(linkrazas)
            .then((response) => response.json())
            .then(razas =>
                razas.results.forEach(raza => {
                    const caja = document.createElement('div');
                    caja.classList.add('caja', 'card','col-12','col-lg-5' );
                    

                    const cuerpoCaja = document.createElement('div');
                    cuerpoCaja.classList.add( 'card-body','cajaCuerpo')
                
                    const titulo = document.createElement('h3');
                    titulo.classList.add('card-title', 'titulo');
                    titulo.textContent = `${raza.name} `;

                    const parrafos=document.createElement('div')
                    parrafos.classList.add('parrafos')
                    const descs = document.createElement('p');
                    descs.classList.add('card-text', 'desc');
                    descs.textContent = `${raza.size} `;

                    const desct = document.createElement('p');
                    desct.classList.add('card-text', 'desc');
                    desct.textContent = `${raza.type} `;

                    const descar = document.createElement('p');
                    descar.classList.add('card-text', 'desc');
                    descar.textContent = `${raza.armor_class} `;

                    const desch = document.createElement('p');
                    desch.classList.add('card-text', 'desc');
                    desch.textContent = `${raza.hit_points} `;

                    const descd = document.createElement('p');
                    descd.classList.add('card-text', 'desc');
                    descd.textContent = `${raza.hit_dice} `;
                    
                    const divImagen=document.createElement('div');
                    divImagen.classList.add('divImagen')
                    const imagen = document.createElement('img');
                    imagen.setAttribute("src", "imgmon/monustruoimagen.jpg");
                    imagen.classList.add( 'fluid-image','imagen');
                    //pruebas
                    //prueba titu
                
                    
                    //insercion de elementos de cada card 
                    cuerpoCaja.appendChild(titulo);
                    parrafos.appendChild(descs);
                    parrafos.appendChild(desct);
                    parrafos.appendChild(descar);
                    parrafos.appendChild(desch);
                    parrafos.appendChild(descd);
                    

                    divImagen.appendChild(imagen);
                    cuerpoCaja.appendChild(divImagen)
                    cuerpoCaja.appendChild(parrafos)
                    
                    caja.appendChild(cuerpoCaja);
                    contenedor.appendChild(caja);
                 
                }));
           
    } catch (error) {
        console.log(error)
    }

}

function redireccion(){
    window.location.href="../razas/razas.html";
}


peticion();


