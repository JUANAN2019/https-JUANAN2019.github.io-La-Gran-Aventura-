const listaMenu=document.querySelector(".manual");
const url="https://open5e.com/races";
const cabecera={ 
    //method: 'GET',
    //headers: misCabeceras,
    mode: 'no-cors', // <---
    //cache: 'default'
}

const recibirDatos=async()=>{
    const respuesta=await fetch(url,cabecera)
   
    .then(resp=>resp.json())
    .then(data=>)
    

}

  recibirDatos()