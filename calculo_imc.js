function calculoIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificacaoIMC(imc) {
  if (imc < 18.5) {
    return 'abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'com peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'com sobrepeso';
  } else if (imc >= 30 && imc < 40) {
    return 'com obesidade';
  }
  else {
    return 'com obesidade grave';
  }
}

function main() {
  const pesoKg = 90;
  const altura = 1.90;

  const imc = calculoIMC(pesoKg, altura);
  console.log(classificacaoIMC(imc));
}

main();
