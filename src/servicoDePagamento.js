export default class ServicoDePagamento {
  #pagamentos // Propriedade Privada

  constructor() { // Primeiro método a ser executado quando usar a Classe
    this.#pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) { // Método
    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100 ? 'cara' : 'padrao'
    };

    this.#pagamentos.push(pagamento);
  }

  consultarUltimoPagamento() {
    return this.#pagamentos.at(-1);
  }
}

