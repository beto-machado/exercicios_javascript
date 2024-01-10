const nota1 = 7.8;
const nota2 = 5.1;
const nota3 = 8.5;

const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if (media < 5) {
  console.log('Sua média foi ' + media + ', e você foi Reprovado');
} else if (media >= 5 && media < 7) {
  console.log('Sua média foi ' + media + ', e você está de Recuperação');
} else {
  console.log('Sua média foi ' + media + ', e você foi Aprovado');
}
