
const paquetes = [
    {id:0, nombre:'Mexico', descripcion:'Viaje a Cancun, aereo ida y vuelta mas all inclusive 7 noches', precio:100000, imagen:src="imagenes/cancun.jpg"},
    {id:1, nombre:'Europa', descripcion:'Viaje a Italia Roma hotel 3 estrellas 5 noches aereo ida y vuelta', precio:380000, imagen:src="imagenes/roma.jpg"},
    {id:2, nombre:'EEUU', descripcion: 'Viaje a miami ida y vuelta hotel all inclusive 10 noches', precio:150000, imagen:src="imagenes/miami.jpg"},
    {id:3, nombre:'Argentina', descripcion:'Viaje a Bariloche ida y vuelta traslados incluidos hotel holiday inn 6 noches', precio:85000, imagen:src="imagenes/bariloche.jpg"}
]
const mostrarPaquetes = () => {
    for (const paquete of paquetesFiltrados){
        let contenedor = document.createElement("div");
        contenedor.innerHTML = 
        `
          <div class="card" style="width: 18rem;">
           
                    <img src="${paquete.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${paquete.nombre}</h5>
                        <p class="card-text">${paquete.descripcion}</p>
                        <p class="card-text"><b>$ ${paquete.precio}</b></p>
                        <a href="#" class="btn btn-primary" onclick=obtenerCantidadPaquetesComprados(${paquete.id})>Comprar</a>
                   </div>   
          </div>
          <br></br>
            
               
        `
        document.getElementById('fila').appendChild(contenedor);
      
    }
}
const obtenerCantidadPaquetesComprados = (idPaquete) => {
    console.log(idPaquete);
    var elemento = document.getElementsByTagName('span')[0]
    var cantidad = parseFloat(elemento.innerHTML) + 1;
    elemento.innerHTML = cantidad;
    agregarPaqueteAlCarrito(idPaquete);
}


let boton = document.getElementById("btnFiltrar");
boton.addEventListener("click", filtrarDatos);

let inputBusqueda = document.getElementById("busqueda");
inputBusqueda.addEventListener("keyup", busquedaPorTeclado);

function busquedaPorTeclado(){
    console.log(inputBusqueda.value);
    if (inputBusqueda.value.length > 3){
        filtrarDatos();
    }
}

let paquetesFiltrados = paquetes;

function filtrarDatos(){
    let palabraClave = document.getElementById("busqueda");
    paquetesFiltrados = paquetes.filter(elemento => elemento.descripcion.includes(palabraClave.value) || elemento.nombre.includes(palabraClave.value));
    limpiarHTML();
    mostrarPaquetes();
    console.log(paquetesFiltrados);

}

const limpiarHTML = () =>{
    let fila = document.getElementById('fila');
    document.body.removeChild(fila);

    
    fila = document.createElement("div");
    let a = document.createAttribute("id");
    a.value='fila';
    fila.setAttributeNode(a);
    document.body.appendChild(fila);
}