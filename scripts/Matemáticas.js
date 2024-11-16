let a = Math.abs(7.25)
let b = Math.abs(-7.25)
let c = Math.abs(null)
let d = Math.abs("Hello")
let e = Math.abs(2-3)

document.getElementById("valor1").innerHTML = "<h3>Uso de la función de valor absoluto</h3>" + "<p>" + a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "</p>";

let text1 = "<h3>Uso de la función de valor máximo de una lista</h3>"
let x = Math.max(5, 10)
let text2 = "<p>El valor máximo de x es: " + x + "</p>"

let y = Math.max(0, 150, 30, 20, 38)
let text3 = "<p>El valor máximo de y es: " + y + "</p>"

let z = Math.max(-5, 4)
let text4 = "<p>El valor máximo de z es: " + z + "</p>"

let concatena = text1.concat(" ", text2, " ", text3, " ", text4)
document.getElementById("valor2").innerHTML = concatena

let numero = parseInt(Math.random() * 100)
document.getElementById("valor3").innerHTML = "<h2>Uso de la función que devuelve un número al azar en un rango de 0 a 99</h2> <p>El número al azar es: " + numero + "</p>"

var num1, num2, resultado
function actu() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    resultado = Math.pow(num1, num2)
    document.getElementById("valor4").innerHTML = "El número elevado a la potencia indicada es: " + resultado + "<br>" + num1 + "^" + num2 + "=" + resultado
}