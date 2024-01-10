class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calculoIMC() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificacaoIMC() {
    const imc = this.calculoIMC();
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
}

const pessoa = new Pessoa('João', 90, 1.90);
console.log(pessoa);
console.log(pessoa.classificacaoIMC());

