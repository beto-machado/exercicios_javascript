class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm.toFixed(2);
  }

  gastoEmReais(distanciaKm, precoCombustivel) {
    return (distanciaKm * this.gastoMedioPorKm) * precoCombustivel;
  }

}

const carro1 = new Carro('Fiat', 'Vermelho', (1/8));

console.log(carro1);
console.log(carro1.gastoEmReais(30, 3.29).toFixed(2));
