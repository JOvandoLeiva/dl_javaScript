/*const precio = 1549990;
var numIngresado = document.querySelector('#inputCantidad');
var colorIngresado = document.querySelector('#inputColor');
var cantidad = document.getElementById("inputCantidad");
var color = document.getElementById("inputColor");
total = precio * parseInt(numIngresado);

*/

// document.getElementById("outputColor").style.color = color;
document.querySelector('button').addEventListener('click',function(){

    // let contents = myElement.innerHTML;
    let precio = 1549990;
    var numIngresado = document.querySelector('#inputCantidad');
    var colorIngresado = document.querySelector('#inputColor');
    let total = precio * numIngresado.value;
    document.getElementById("outputTotal").innerHTML = 'Total: '+ total;
    document.getElementById("outputCantidad").innerHTML = 'Cantidad: '+ numIngresado.value;
 
    document.querySelector(".dot").style.backgroundColor = colorIngresado.value;
})
