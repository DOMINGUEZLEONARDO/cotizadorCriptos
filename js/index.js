

Swal.fire({
    title: '¿Eres mayor de edad?',
    text: "Solo los adultos pueden comprar cripto.",
    icon: 'warning',
    showDenyButton: true,
    denyButtonText: 'No',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí'
  }).then((result) => {
    if (result.isDenied) {
      
        Swal.fire({
           
            icon: 'error',
            title: 'No puedes acceder.',
            showConfirmButton: false,
        })
    } else if (result.isConfirmed) {
        Swal.fire(
            'Bienvenido!',
            '',
            'success'
        )
    }
})


let setMoneda
let moneda 
let importe
let busqueda
let bitcoin 
let tether 
let binanceCoin 
let ethereum



class Monedas {
    constructor (nombre, valores){
        this.nombre = nombre;
        this.valores = valores;
    }
}



const consulta = async () => {
    const respuesta = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,BNB&tsyms=USD,EUR`)
   
    // const respuesta = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=${setMoneda}`)
    const valores = await respuesta.json()
    console.log(valores)
    bitcoin = new Monedas(`BTC`,parseFloat(valores.DISPLAY.BTC.USD.PRICE.replace('$','').replace(',','').trim()))
    ethereum = new Monedas ('ETH',parseFloat(valores.DISPLAY.ETH.USD.PRICE.replace('$','').replace(',','').trim()));
    tether = new Monedas('USDT', parseFloat(valores.DISPLAY.USDT.USD.PRICE.replace('$','').replace(',','').trim()));
    binanceCoin = new Monedas ('BNB',parseFloat(valores.DISPLAY.BNB.USD.PRICE.replace('$','').replace(',','').trim()));

}


function calculador (importe, moneda) {

    switch(moneda){
        case "BTC":
        return  importe / bitcoin.valores;
        break;
        
        case "ETH":
        return importe / ethereum.valores;
        break;
            
        case "USDT":
        return importe / tether.valores;
        break;
                
        case "BNB":
        return importe / binanceCoin.valores;
        break;
                    
        default:
        return null;
        break;
    }
    
}


const verificar = [
    {
        nombre: "BTC",
    }, 
    {
        nombre: "USDT",
    }, 
    {
        nombre: "ETH",
    }, 
    {
        nombre: "BNB",
    }, 

];


function obtener(){
    importe = document.getElementById("inversion").value; 
    moneda = document.getElementById("criptomoneda").value;
    setMoneda = document.getElementById('fiat').value;
  
    busqueda = verificar.find(
    (si) => si.nombre === moneda
    );

    if (moneda === "pesos"){
        alert("Disculpe, no vendemos papel pintado.")
    } else if (moneda !== "BTC" && moneda !== "ETH" && moneda !== "USDT" && moneda !== "BNB"){
            alert("No contamos con el activo que usted desea.")
    };

    let shortName; 
    if (moneda === "BTC") {
        shortName = "BTC";
    } else if (moneda === "ETH") {
        shortName = "ETH";
    } else if (moneda === "USDT") {
        shortName = "USDT";
    } else if (moneda === "BNB") {
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
const cotiDelDia = document.getElementById("cotizacionDia")

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    const userDatos = JSON.parse(value)
    console.log(userDatos)
    const p = document.createElement("p");
    p.textContent=`El usuario ${userDatos.persona} cotizó ${userDatos.cotizo}.`
    cotiDelDia.appendChild(p)
}




boton.addEventListener('click', async () => {
    console.log(await consulta())
    resultado.innerHTML = obtener();
    let usuario = document.getElementById("usuario").value
    setMoneda = document.getElementById('fiat').value
    let compra = {
        persona: usuario,
        cotizo: obtener(),
        inversion: importe,
        monSelec: setMoneda,

    }
   
    if( (usuario) === '' ) {
        alert('El campo Nombre y Apellido es obligatorio')
    }else{

        localStorage.setItem(usuario, JSON.stringify(compra));
        cotiDelDia.innerHTML = "";

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            const userDatos = JSON.parse(value)
            console.log(userDatos)
            const p = document.createElement("p");
            p.textContent=`El usuario ${userDatos.persona} cotizó ${userDatos.cotizo}. `
            cotiDelDia.appendChild(p)
        }
}


}

)


const diaDeHoy = new Date();
let fecha = document.getElementById("fecha");
fecha.innerHTML = diaDeHoy.toLocaleString()+ "  Buenos Aires, Argentina";


