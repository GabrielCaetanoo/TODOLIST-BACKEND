# TODO LIST BACK END

## Descrição

Este é um projeto de backend para um aplicativo de lista de tarefas (TODO List) desenvolvido em TypeScript. A aplicação expõe uma API RESTful que permite a criação, leitura, atualização e exclusão de tarefas. Utiliza um banco de dados relacional para armazenar as informações das tarefas e foi desenvolvida seguindo uma arquitetura em camadas, com controllers, models, repositories, schemas e services.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação utilizada para desenvolver o projeto.
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework web para Node.js, utilizado para criar a API.
- **TypeORM**: ORM (Object-Relational Mapper) para interagir com o banco de dados.
- **PostgreSQL**: Banco de dados relacional utilizado.
- **Postman**: Ferramenta para testes de API.

## Estrutura do Projeto

A estrutura do projeto segue a divisão em camadas para melhor organização e manutenção do código:

- **controllers/**: Contém os controladores que lidam com as requisições HTTP e chamam os serviços apropriados.
- **models/**: Contém as definições das entidades do banco de dados.
- **repositories/**: Contém a lógica de acesso aos dados e manipulação do banco de dados.
- **schemas/**: Contém as validações e esquemas de dados utilizando bibliotecas de validação.
- **services/**: Contém a lógica de negócio da aplicação.

## Instalação

Para instalar e executar este projeto localmente, siga as etapas abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
