// let importe =  prompt ("Ingrese capital a invertir U$S:");
// let moneda = prompt ("Que Cripto desea? Bitcoin, Ethereum, Tether o Binance Coin").toLowerCase();
// // let bitcoin = 30308
// let ethereum = 1877
// let tether = 1.015
// let binanceCoin = 244
let moneda 
let importe
let busqueda

function Monedas (nombre, valor){
    this.nombre = nombre;
    this.valor = valor;
}
let bitcoin = new Monedas ('bitcoin',30308);
let ethereum = new Monedas ('ethereum',1877);
let tether = new Monedas('tether', 1015);
let binanceCoin = new Monedas ('binance Coin', 244);


function calculador (importe, moneda) {

    switch(moneda){

        case "bitcoin":
        return  importe / bitcoin.valor;
        break;

        case "ethereum":
        return importe / ethereum.valor;
        break;

        case "tether":
        return importe / tether.valor;
        break;

        case "binanceCoin":
        return importe / binanceCoin.valor;
        break;
        
        default:
        return null;
        break;
    }
        
}
const verificar = [
    {
        nombre: "bitcoin",
    }, 
    {
        nombre: "tether",
    }, 
    {
        nombre: "ethereum",
    }, 
    {
        nombre: "binanceCoin",
    }, 

];


function obtener(){
    importe = document.getElementById("inversion").value; 
    moneda = document.getElementById("criptomoneda").value;
    

 
    busqueda = verificar.find(
    (si) => si.nombre === moneda
    );
   console.log(busqueda)

   if (moneda === "pesos"){
        alert("Disculpe, no vendemos papel pintado.")
     } else if (moneda !== "bitcoin" && moneda !== "ethereum" && moneda !== "tether" && moneda !== "binanceCoin"){
            alert("No contamos con el activo que usted desea.")
        }
        

      
    let shortName; 
    if (moneda === "bitcoin") {
        shortName = "BTC";
    } else if (moneda === "ethereum") {
        shortName = "ETH";
    } else if (moneda === "tether") {
        shortName = "USDT";
    } else if (moneda === "binanceCoin") {
        shortName = "BNB";
    } else {
        shortName = "";
    }

    

    if (calculador(importe, moneda) !== null) {
        return  calculador(importe, moneda).toFixed(8) + " " + shortName;
    } else {
        return "No ingresó un activo válido"
    }  
    

}




    const boton = document.getElementById("boton");
    


    

    const resultado = document.getElementById("valor");

   boton. addEventListener('click',() => {
    resultado.innerHTML= obtener();
   }
   )

