const numero = 7

for (let i = 1; i <= 10; i++) {
  console.log(i * numero)
}

console.log('-------------------')

const numeros = [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero % 2 === 0) {
    console.log(numero)
  }
}
