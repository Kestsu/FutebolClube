# Boas vindas ao repositório do Trybe Futebol Clube!

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  ![Exemplo app front](assets/front-example.png)

 No time de desenvolvimento do TFC, fiz parte do squad responsável por desenvolver a API utilizando o método TDD e integrar as aplicações por meio do docker-compose. No projeto, construí **um back-end dockerizado utilizando o Sequelize para a modelagem de dados**. Desenvolvi a API com base nas **regras de negócio** fornecidas e assegurei que ela **pudesse ser consumida pelo front-end**. Implementei a lógica necessária para **adicionar partidas**, requerendo **autenticação por token** e estabelecendo um relacionamento entre as tabelas de times e partidas para atualizações. Meu trabalho no back-end garantiu que a tabela disponível no front-end fosse populada corretamente e exibida aos usuários do sistema.

</details>

<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Um container docker MySQL configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`;
  - Pode se conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - Foi garantido que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;

3️⃣ **Front-end:**
  - O Dockerfile foi configurado.
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints construidos.

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;

</details>

<details>
<summary><strong>🕵️ Linter</strong></summary><br />

Para garantir a qualidade do código, usamos o [ESLint](https://eslint.org/) para fazer a análise estática.

</details>



<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.14.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16.14 --lts`
    - `nvm use 16.14`
    - `nvm alias default 16.14`

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
  * Use esse [link de referência para realizar a instalação corretamente no ubuntu](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/b883b81d-21f6-4b60-aa62-8508f6017ea0);
  * Acesse o [link da documentação oficial com passos para desinstalar](https://docs.docker.com/compose/install/#uninstallation) caso necessário.

</details>

<details>
<summary><strong>🐳 Configuração Docker</strong></summary><br />

  ### Docker e Docker-compose

  ⚠ O seu docker-compose precisa estar na versão 1.29 ou superior.  ⚠
[Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/)

</details>


<details id='Criptografia-de-senhas'>
<summary><strong>🔐 Criptografia de senhas </strong></summary><br />

⚠️ A biblioteca utilizada para criptografar a senha no banco de dados é a `bcryptjs` [bcryptjs npm](https://www.npmjs.com/package/bcryptjs). Sendo assim possivel cadastrar um usuário e realizar login ⚠️

</details>

<details id='sequelize'>
  <summary><strong>🎲 Sequelize</strong></summary>
  <br/>

  Para o desenvolvimento, o time de produto disponibilizou um *Diagrama de Entidade-Relacionamento (DER)* para construir a modelagem do banco de dados. Com essa imagem conseguimos saber:
  - Como nomear suas tabelas e colunas;
  - Quais são os tipos de suas colunas;
  - Relações entre tabelas.

    ![Exemplo banco de dados](assets/er-diagram.png)

</details>


<details id='testes-de-cobertura'>
  <summary><strong> Testes de cobertura </strong></summary><br/>

  A construção de testes de cobertura no back-end foram feitas em *TypeScript*, utilizando `mocha`, `chai` e `sinon`, na pasta `app/backend/src/tests/`.


  Os testes cobriram todos os arquivos contidos em `app/backend/src`.

  Para rodar testes de cobertura no back-end, utilize o comando: `npm run test:coverage`.

</details>


# Sobre o projeto

Esse projeto é composto de 4 seções principais:
1. Users e Login
2. Times
3. Partidas
4. Placar

## Execução da aplicação localmente

2. Clone o projeto.

```bash
git clone git@github.com:Kestsu/FutebolClube.git
```

2. Instale as dependências.

```bash
npm install
```

3. Execute a aplicação.

```bash
npm run compose:up:dev
```

