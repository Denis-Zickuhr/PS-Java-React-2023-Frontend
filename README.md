# Documentação do Projeto de Visualização de Transferências Bancárias

## Introdução

Este projeto consiste em uma aplicação web desenvolvida em React, que possibilita a visualização e filtragem de transferências bancárias. A aplicação se comunica com uma API desenvolvida em Spring, que fornece os dados das transferências a serem exibidas.

## Instalação e Configuração

Para executar este projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js em https://nodejs.org/.

2. Clone este repositório em seu ambiente local:

```git clone https://github.com/seu-usuario/visualizacao-transferencias-bancarias.git```

3. Acesse a pasta do projeto:

```cd visualizacao-transferencias-bancarias```

4. Instale as dependências do projeto:

```npm install```

## Executando o Projeto

Após a instalação das dependências, você pode executar a aplicação da seguinte forma:

```npm start```

Isso iniciará a aplicação em modo de desenvolvimento. Acesse a URL http://localhost:3000 no seu navegador para visualizar a página inicial.

## Funcionalidades

### Tela Principal

A tela principal do projeto permite a visualização e filtragem das transferências bancárias. Nesta tela, você encontrará os seguintes elementos:

- Três filtros: um para definir a data limite inferior, outro para a data limite superior e um terceiro para o número da conta bancária.

- Um botão "Pesquisar" que, ao ser acionado, trará os resultados da consulta de acordo com os filtros aplicados.

- Uma tabela que exibe os resultados da consulta, mostrando os seguintes dados para cada transferência:
  - Data de Transferência
  - Valor
  - Tipo (SAQUE, TRANSFERÊNCIA ou DEPÓSITO)
  - Nome do Operador da Transação

### Funcionamento

Ao acessar a tela principal, a aplicação automaticamente busca e exibe as transferências disponíveis. Os filtros podem ser preenchidos para refinar a pesquisa. Basta inserir os valores desejados nos campos de data e número da conta e, em seguida, clicar no botão "Pesquisar". A tabela será atualizada para exibir apenas as transferências que atendem aos critérios de filtragem.

## Integração com a API

A aplicação se integra com uma API desenvolvida em Spring, que fornece os dados das transferências bancárias. A API deve estar em execução na porta 8080 para que a aplicação possa acessá-la e buscar os dados.

## Autor

Denis Zickuhr