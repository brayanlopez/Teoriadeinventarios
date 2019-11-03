var button = document.getElementById('button');

var onButtonClick = function (e) {
    var resultado = document.getElementById("test");
    var demanda = document.getElementById("demanda");
    var costoCompra = document.getElementById("costoCompra");
    var costoConservacion = document.getElementById("costoConservacion");
    console.log(resultado);
    resultado.textContent = "Q="+Math.sqrt((2*demanda.value*costoCompra.value)/costoConservacion.value);
};


button.addEventListener("click", onButtonClick);