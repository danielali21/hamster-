let resultado = document.getElementById("resultado");

function agregarvalor(valor) {
    if (valor === "=") {
        resultado.value = eval(resultado.value); 
    } else {
        resultado.value += valor; 
    }
}
function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch {
        resultado.value = "Error";
    }
}
function borrar() {
    resultado.value = ""; 
}