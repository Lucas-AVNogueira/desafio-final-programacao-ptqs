## Trabalho de Conclusão de Disciplina

## Objetivo

Desenvolver uma pipeline de integração contínua utilizando GitHub Actions para um projeto com testes automatizados, contemplando:

- Execução por push.
- Execução manual.
- Execução agendada (schedule).
- Geração de relatório de testes.
- Armazenamento/publicação do relatório na pipeline.

## Objetivo atendido

A pipeline foi implementada para:

- Executar automaticamente por `push`.
- Executar manualmente por `workflow_dispatch`.
- Executar de forma agendada por `schedule` (cron).
- Executar os testes automatizados do projeto.
- Gerar relatório de testes em formato HTML (`index.html`).
- Armazenar/publicar o relatório como artifact da execução.

## Sobre o Projeto

Este projeto implementa um **Serviço de Pagamento** com funcionalidades para registrar e consultar pagamentos com categorização automática.

### Estrutura do Projeto

**Classe: ServicoDePagamento** (`src/servicoDePagamento.js`)

- **Propriedade privada `#pagamentos`**: armazena um array de pagamentos realizados.
- **Método `pagar(codigoBarras, empresa, valor)`**: registra um pagamento e categoriza automaticamente como:
  - `"cara"`: se o valor for maior que 100
  - `"padrao"`: se o valor for menor ou igual a 100
- **Método `consultarUltimoPagamento()`**: retorna o último pagamento registrado.

### Testes Automatizados

O projeto possui 3 testes automatizados em `test/servicoDePagamento.test.js`:

1. **Pagamento com categoria cara**: valida se pagamentos acima de 100 são categorizados como "cara".
2. **Pagamento com categoria padrão**: valida se pagamentos até 100 são categorizados como "padrão".
3. **Consulta do último pagamento**: valida se apenas o último pagamento é retornado quando há múltiplos registros.

Todos os testes utilizam a metodologia **Arrange-Act-Assert** (AAA).

## Estrutura da solução

- Workflow: `.github/workflows/ci.yml`
- Testes: `test/servicoDePagamento.test.js`
- Script de teste local: `npm test`
- Script de teste para CI com relatório: `npm run test:ci`
- Relatório gerado: `reports/mochawesome/`

## Como a pipeline funciona

Arquivo: `.github/workflows/ci.yml`

1. Faz checkout do código.
2. Configura Node.js 20 com cache de dependências npm.
3. Instala dependências com `npm ci`.
4. Executa `npm run test:ci`.
5. Publica o arquivo `reports/mochawesome/index.html` como artifact (`relatorio-testes-html-run-<número da execução>`).

## Gatilhos configurados

- `push`: executa a cada novo push no repositório.
- `workflow_dispatch`: permite executar manualmente na aba Actions.
- `schedule`: executa a cada 5 minutos (UTC) - temporário para validação.

## Relatório de testes

O relatório é gerado em formato HTML com `mochawesome`.

Script configurado no `package.json`:

## Execução local

Instalar dependências:

```bash
npm install
```

Executar testes locais (sem relatório CI):

```bash
npm test
```

Executar modo CI local (com relatório HTML):

```bash
npm run test:ci
```

## Conceitos aplicados

- Integração contínua com GitHub Actions.
- Automação por evento (`push`), manual (`workflow_dispatch`) e cron (`schedule`).
- Qualidade por testes automatizados.
- Rastreamento de resultado via relatório padronizado em HTML.
- Publicação de evidências de execução por artifacts.
