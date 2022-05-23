const altura = document.getElementById("altura");
const peso = document.getElementById("peso");

function imc() {
  var res = peso.value / (altura.value * altura.value);
  var resultado = document.getElementById("resultado");

  if (peso.value == "" || altura.value == "") {
    alert("Insira valores validos !");
    return;
  }

  if (res <= 18.5) {
    resultado.innerHTML = `Seu IMC é ${res.toFixed(
      1
    )}, você está abaixo do peso!`;
  } else if (res == 18.6 || res <= 24.9) {
    resultado.innerHTML = `Seu IMC é ${res.toFixed(
      1
    )}, você está no peso ideal`;
  } else if (res == 25 || res <= 30) {
    resultado.innerHTML = `Seu IMC é ${res.toFixed(
      1
    )}, você está na pré obesidade, cuidado !`;
  } else {
    resultado.innerHTML = `Seu IMC é ${res.toFixed(
      1
    )}, você está acima do peso !`;
  }
}

