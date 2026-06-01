import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Servico de Pagamento', () => {
    it('deve realizar pagamento com categoria cara quando valor for maior que 100', function() {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 156.87);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('deve realizar pagamento com categoria padrao quando valor for menor ou igual a 100', function() {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'Sabesp', 100.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '1111-2222-3333');
        assert.equal(ultimoPagamento.empresa, 'Sabesp');
        assert.equal(ultimoPagamento.valor, 100.00);
        assert.equal(ultimoPagamento.categoria, 'padrao');
    });

    it('deve consultar apenas o ultimo pagamento realizado', function() {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0000-0000-0001', 'Copel', 10.00);
        servicoDePagamento.pagar('0000-0000-0002', 'Londrinet', 250.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '0000-0000-0002');
        assert.equal(ultimoPagamento.empresa, 'Londrinet');
        assert.equal(ultimoPagamento.valor, 250.00);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });
});