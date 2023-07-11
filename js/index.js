let importe =  prompt ("Ingrese capital a invertir U$S:");
let moneda = prompt ("Que Cripto desea? Bitcoin, Ethereum, Tether o Binance Coin").toLowerCase();
let bitcoin = 30308
let ethereum = 1877
let tether = 1.015
let binanceCoin = 244

if (moneda === "pesos"){
    alert("Disculpe, no vendemos papel pintado.")
 } else if (moneda !== "bitcoin" && moneda !== "ethereum" && moneda !== "tether" && moneda !== "binance coin"){
    alert("No contamos con el activo que usted desea.")
}

function calculador (importe, moneda) {

    switch(moneda){

        case "bitcoin":
        return  importe / bitcoin;
        break;

        case "ethereum":
        return importe / ethereum;
        break;

        case "tether":
        return importe / tether;
        break;

        case "binance coin":
        return importe / binanceCoin;
        break;
        
        default:
        return null;
        break;
    }
    
}

let shortName; 
    if (moneda === "bitcoin") {
        shortName = "BTC";
    } else if (moneda === "ethereum") {
        shortName = "ETH";
    } else if (moneda === "tether") {
        shortName = "USDT";
    } else if (moneda === "binance coin") {
        shortName = "BNB";
    } else {
        shortName = "";
    }

if (calculador(importe, moneda) !== null) {
    console.log("Usted obtendría "+ calculador(importe, moneda).toFixed(8) + " " + shortName);
} else {
    console.log("No ingresó un activo válido")
}

