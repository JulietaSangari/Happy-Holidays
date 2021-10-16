
//function precioDeLaCuota(){
  //  let precioTotal = 21000;
   // let cuotaSeleccionada = parseFloat(prompt("ingrese en cuantas cuotas desea abonar el viaje (3,6,12)"));
   // let resultado =  precioTotal / cuotaSeleccionada;
    //alert ("Con la cuota seleccionada abonara mensualmente " + resultado);

//}

//precioDeLaCuota();

class paquete{
    constructor(destino, precio, stockInicial){
        this.destino = destino;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stockInicial);
   
    }
    Vender(cantidad){
        if(this.verificarStock(cantidad)){
            this.stock = this.stock - cantidad;
            console.log("se vendieron "+ cantidad + " viajes a " + this.destino);
            console.log("El stock actual es: " + this.stock);
        }
        else{
            console.log("No hay suficiente stock para vender a " + this.destino + ". Cantidad diponible para vender: " + this.stock);
        }
       
    }
    verificarStock(cantidad){
        if( this.stock >= cantidad){
            return true;
        }
    }
}
const paquete1 = new paquete("Mexico", 1300, 20);
const paquete2 = new paquete("Miami", 1600, 30);
const paquete3 = new paquete("Cuba", 1000, 15);
const paquete4 = new paquete("Europa", 3000, 5);

paquete1.Vender(7);
paquete2.Vender(15);
paquete3.Vender(3);
paquete4.Vender(10);