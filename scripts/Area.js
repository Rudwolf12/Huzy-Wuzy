function calcularArea() {
    var radio = document.getElementById("Radio").value;
    var area = Math.PI * Math.pow(radio, 2)
    var area2 = area.toFixed(2);
    
    document.getElementById("resultado").innerHTML = "Area: " + area2;
}