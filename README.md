# Trabalho Final - Pipeline CI/CD com GitHub Actions

Este repositório implementa uma pipeline de Integracao Continua para o projeto de testes automatizados da disciplina.

## Repositorio da entrega

- URL: https://github.com/Lucas-AVNogueira/desafio-final-programacao-ptqs

## Objetivo atendido

A pipeline foi implementada para:

- Executar automaticamente por `push`.
- Executar manualmente por `workflow_dispatch`.
- Executar de forma agendada por `schedule` (cron).
- Executar os testes automatizados do projeto.
- Gerar relatorio de testes em formato JUnit (`results.xml`).
- Armazenar/publicar o relatorio como artifact da execucao.

## Estrutura da solucao

- Workflow: `.github/workflows/ci.yml`
- Testes: `test/servicoDePagamento.test.js`
- Script de teste local: `npm test`
- Script de teste para CI com relatorio: `npm run test:ci`
- Relatorio gerado: `reports/junit/results.xml`

## Como a pipeline funciona

Arquivo: `.github/workflows/ci.yml`

1. Faz checkout do codigo.
2. Configura Node.js 20 com cache de dependencias npm.
3. Instala dependencias com `npm ci`.
4. Executa `npm run test:ci`.
5. Publica o arquivo `reports/junit/results.xml` como artifact (`relatorio-testes-junit`).

## Gatilhos configurados

- `push`: executa a cada novo push no repositorio.
- `workflow_dispatch`: permite executar manualmente na aba Actions.
- `schedule`: executa toda segunda-feira as 03:00 UTC.

## Relatorio de testes

O relatorio eh gerado no padrao JUnit usando `mocha-junit-reporter`.

Script configurado no `package.json`:

```json
"test:ci": "node -e \"require('fs').mkdirSync('reports/junit',{recursive:true})\" && mocha \"test/**/*.test.js\" --reporter mocha-junit-reporter --reporter-options mochaFile=reports/junit/results.xml,toConsole=true"
```

## Evidencia de execucao bem-sucedida

Para atender ao requisito de entrega, inclua no envio:

- Link de uma execucao com status **Success** na aba Actions.
- Captura de tela (ou URL da execucao) mostrando:
  - Workflow executado com sucesso.
  - Artifact `relatorio-testes-junit` disponivel para download.

Exemplo de onde obter:

1. Acesse a aba **Actions** do repositorio.
2. Abra uma execucao verde (sucesso).
3. Copie a URL da execucao e anexe na entrega.

## Execucao local

Instalar dependencias:

```bash
npm install
```

Executar testes locais (sem relatorio JUnit):

```bash
npm test
```

Executar modo CI local (com relatorio JUnit):

```bash
npm run test:ci
```

## Conceitos aplicados

- Integracao continua com GitHub Actions.
- Automacao por evento (`push`), manual (`workflow_dispatch`) e cron (`schedule`).
- Qualidade por testes automatizados.
- Rastreamento de resultado via relatorio padronizado (JUnit XML).
- Publicacao de evidencias de execucao por artifacts.
