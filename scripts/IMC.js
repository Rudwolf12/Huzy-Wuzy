function calcularIMC() {
    var peso = document.getElementById("Peso").value
    var altura = document.getElementById("Altura").value

    var IMC = Math.round(peso / Math.pow(altura, 2))

    document.getElementById("resultado").innerHTML = "Tu indice de masa corporal es: " + IMC

    if (IMC >= 16.1 && IMC < 18.4) {
        document.getElementById("cometario").innerHTML = "Puedes tener una desnutricion moderada"
    } else if (IMC >= 18.5 && IMC < 22) {
        document.getElementById("cometario").innerHTML = "Tienes un peso bajo"
    } else if (IMC >= 22.1 && IMC < 24.9) {
        document.getElementById("cometario").innerHTML = "Tienes un peso normal"
    } else if (IMC >= 25 && IMC < 29.9) {
        document.getElementById("cometario").innerHTML = "Tienes sobrepeso"
    } else if (IMC >= 30 && IMC < 34.99) {
        document.getElementById("cometario").innerHTML = "Tienes obesidad moderada"
    } else if (IMC >= 35 && IMC < 39.9) {
        document.getElementById("cometario").innerHTML = "Tienes obesidad severa"
    } else {
        document.getElementById("cometario").innerHTML = "No aplica con ese peso o estatura"
    }
}
