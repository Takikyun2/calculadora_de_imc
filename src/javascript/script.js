function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  } else {

  }

  //Calculo do IMC

  let imc = peso / (altura * altura);
  // classificação do IMC

  let classificação = ""

  if (imc < 18.5) {
    classificação = "Abaixo do peso"
  } else if (imc < 25) {
    classificação = "Peso normal"
  } else if (imc < 30) {
    classificação = "Sobrepeso"
  } else if (imc < 35) {
    classificação = "Obesidade grau 1"
  } else if (imc < 40) {
    classificação = "Obesidade grau 2"
  } else {
    classificação = "Obesidade grau 3"
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, e a sua classificação é de ${classificação}!`;
}