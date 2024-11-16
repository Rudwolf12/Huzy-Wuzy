faren = prompt("Escribe los grados Fahrenheit para ser convertidos a Celsius")

var Celsi = (5/9) * (faren - 32)

document.getElementById("resultado").innerHTML = "<p>Grados en Fahrenheit: " + faren + "</p> <p>Grados en Celsius: " + parseInt(Celsi) + "</p>"