document.write("<h2>Uso de la función de valor absoluto</h2>")
let a = Math.abs(7.25)
let b = Math.abs(-7.25)
let c = Math.abs(null)
let d = Math.abs("Hello")
let e = Math.abs(2-3)

document.write("<p>" + a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "</p>")

document.write("<h2>Uso de la función de valor máximo de una lista</h2>")
let x = Math.max(5, 10)
document.write("<p>El valor máximo de x es: " + x + "</p>")

let y = Math.max(0, 150, 30, 20, 38)
document.write("<p>El valor máximo de y es: " + y + "</p>")

let z = Math.max(-5, 4)
document.write("<p>El valor máximo de z es: " + z + "</p>")

document.write("<h2>Uso de la función que devuelve un número al azar en un rango de 0 a 99</h2>")
let numero = parseInt(Math.random() * 100)
document.write("<p>El número al azar es: " + numero + "</p>")

document.write("<h2>Uso de la función que genera una potencia</h2>")
document.write('<label for="num1">Primer número: </label><input type="number" placeholder="4" name="num1" id="num1"><br><label for="num1">Segundo número: </label><input type="number" placeholder="2" name="num2" id="num2"><br><br>')

function potencia() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    return Math.pow(num1, num2)
}

document.write("<p>El número elevado a la potencia indicada es: " + potencia() + "</p>")