const precoGasolina = 5.79;
const precoEtanol = 3.49;
const tipoCombustivel = 'Etanol';
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosComsumidos = (distanciaEmKm / kmPorLitros);

if (tipoCombustivel === 'Gasolina') {
  console.log(litrosComsumidos * precoGasolina);
} else {
  console.log((litrosComsumidos * precoEtanol).toFixed(2));
}


