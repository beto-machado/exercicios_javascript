function aplicarDesconto(valor, desconto) {
  return valor - (valor * desconto);
}

function aplicarJuros(valor, juros) {
  return valor + (valor * juros);
}


const precoProduto = 60;

const condicaoPagamento = 'Débito';

if (condicaoPagamento === 'Débito') {
  console.log(aplicarDesconto(precoProduto, 0.1));
} else if (condicaoPagamento === 'Dinheiro') {
  console.log(aplicarDesconto(precoProduto, 0.15));
} else if (condicaoPagamento === 'Cartão Crédito em 2x') {
  console.log(precoProduto);
} else {
  console.log(aplicarJuros(precoProduto, 0.1));
}

