
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
            <br></br>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col">

                    <div class="card" style="width: 18rem;">
            
                        <img src="${paquete.imagen}" class="card-img-top" alt="...">
                        <div class="card-body ordenar">
                            <h5 class="card-title">${paquete.nombre}</h5>
                            <p class="card-text">${paquete.descripcion}</p>
                            <p class="card-text"><b>$ ${paquete.precio}</b></p>
                            <a href="#" class="btn btn-primary" onclick=obtenerCantidadPaquetesComprados(${paquete.id})>Comprar</a>
                            
                        </div>   
                    </div>
                </div>
            
                <div class = "col">

                    <div class="card" style="width: 18rem;">
            
                        <img src="${paquete.imagen}" class="card-img-top" alt="...">
                        <div class="card-body ordenar">
                            <h5 class="card-title">${paquete.nombre}</h5>
                            <p class="card-text">${paquete.descripcion}</p>
                            <p class="card-text"><b>$ ${paquete.precio}</b></p>
                            <a href="#" class="btn btn-primary" onclick=obtenerCantidadPaquetesComprados(${paquete.id})>Comprar</a>
                            
                        </div>   
                    </div>
                </div>
            </div>
                    
            
        `
        document.getElementById('fila').appendChild(contenedor);
      
    }
}
const obtenerCantidadPaquetesComprados = (idPaquete) => {
    console.log(idPaquete);
    var elemento = document.getElementsByTagName('span')[0]
    var cantidad = parseFloat(elemento.innerHTML) + 1;
    elemento.innerHTML = cantidad;
    alert("Agregaste un paquete a tu carrito")
    agregarPaqueteAlCarrito(idPaquete);
   
}


// let boton = document.getElementById("btnFiltrar");
// boton.addEventListener("click", filtrarDatos);

$("#btnFiltrar").click((filtrarDatos) => { 
    console.log(filtrarDatos.target);
})

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

$(document).ready(function(){
    alert("¡Encontra el mejor viaje aca!");
    $("#blackBox").hide();
});



let paque = [
    {id:0, nombre:'Mexico', descripcion:'Viaje a Cancun, aereo ida y vuelta mas all inclusive 7 noches', precio:100000, imagen:src="imagenes/cancun.jpg"},
]

  localStorage.setItem('Carrito',JSON.stringify(paque));

  let carrito = JSON.parse(localStorage.getItem('Carrito'));
  
  
  const agregarPaqueteAlCarrito = (idPaquete) => {
      
      let paqueteComprado = paquetes.find(x=>x.id ==idPaquete);
      carrito.push(paqueteComprado);
      localStorage.setItem('carrito',JSON.stringify(carrito));
  }
  
  const verCarrito = () => {
      
      let compras = JSON.parse(localStorage.getItem('carrito'));
      let contenedor = document.createElement("div");
      
      for (const paque of compras){
          let contenedor = document.createElement("div");
          contenedor.innerHTML += 
          `
          <h2>${paque.descripcion}</h2>
          `
          document.body.appendChild(contenedor);
      }
      
  }
  const URLGET = "https://jsonplaceholder.typicode.com/posts"

  $("body").prepend('<button id="btn1">GET</button>');
  
  $("#btn1").click(() => { 
      $.get(URLGET, function (respuesta, estado) {
            if(estado === "success"){
              let datos = respuesta;
              for (const dato of datos) {
                $("body").prepend(`<div>
                                     <h3>${dato.id} - ${dato.title}</h3>
                                     <p> ${dato.body}</p>
                                    </div>`);
              }  
            }
      });
  });
  