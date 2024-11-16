let text1 = "Estás programando"
let text2 = "con funciones predefinidas"
let text3 = "para unir cadenas de texto en JavaScript"
let concatena = text1.concat(" ", text2, " ", text3)
document.getElementById("conc").innerHTML = concatena

function Extraer() {
    let text4 = "Técnico en Programación web"
    var val = document.getElementById("sub").value
    let extraer = text4.substring(0, parseInt(val))
    document.getElementById("ext-orig").innerHTML = "Texto original: Técnico en Programación web"
    document.getElementById("ext").innerHTML = extraer
}

let text5 = concatena
arreglo1 = text5.split(" ")
document.getElementById("spli").innerHTML = "Aqui se separa con comas la cadena: " + arreglo1

function seleccion() {
    var val = document.getElementById("selec").value
    let palabra
    if (val <= 10 && val >= 0) {
        palabra = arreglo1[val]
    } else {
        palabra = arreglo1[0]
    }

    document.getElementById("Seleccion").innerHTML = palabra
}

arreglo2 = text5.split(" ", 4)
document.getElementById("prim").innerHTML = arreglo2
