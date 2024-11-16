fruits = ["Platano", "Naranja", "Manzana", "Mango", "Zanahoria"]

document.getElementById("original").innerHTML = "Arreglo original: <br> Frutas: " + fruits

fruits.pop()
document.getElementById("pop").innerHTML = "Arreglo sin el ultimo elemento: " + fruits

fruits.push("Kiwi", "Sandia")
document.getElementById("push").innerHTML = "Arreglo con 2 nuevos elementos al final: " + fruits

let text = fruits.join(" y también ")
document.getElementById("join").innerHTML = "Arreglo que agrega un separador entre cada elemento: <br> " + text