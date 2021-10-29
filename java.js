
const paquetes = [
    {id:0, nombre:'Mexico', descripcion:'Viaje a Cancun, aereo ida y vuelta mas all inclusive 7 noches', precio:100000},
    {id:1, nombre:'Europa', descripcion:'Viaje a Italia Roma hotel 3 estrellas 5 noches aereo ida y vuelta', precio:380000},
    {id:2, nombre:'EEUU', descripcion: 'Viaje a miami ida y vuelta hotel all inclusive 10 noches', precio:150000},
    {id:3, nombre:'Argentina', descripcion:'Viaje a Bariloche ida y vuelta traslados incluidos hotel holiday inn 6 noches', precio:85000}
]
const mostrarPaquetes = () => {
    for (const paquete of paquetes){
        let contenedor = document.createElement("div");
        contenedor.innerHTML = 
        `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${paquete.nombre}</h5>
                    <p class="card-text">${paquete.descripcion}</p>
                    <p class="card-text"><b>$ ${paquete.precio}</b></p>
                    <a href="#" class="btn btn-primary" onclick=obtenerCantidadProductosComprados(${paquete.id})>Comprar</a>
                </div>
            </div>
            
               
        `
        document.getElementById('fila').appendChild(contenedor);
      
    }
}
const obtenerCantidadPaquetesComprados = () => {
    var cantidad = parseFloat(document.getElementsByTagName('span')[0].innerHTML);
    cantidad = cantidad + 1;
    document.getElementsByTagName('span')[0].innerHTML = cantidad;
}