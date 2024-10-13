# CRUD-With-Validation
Um repositório para criação de CRUD com validaçãp, utilizando JavaScript e Express, MongoDB para banco de dados e JWT (JSON Web Token) para validação do acesso de um usuário.

## Obtendo o programa
Clique no botão verde escrito <> Code.

Se você quiser instalar o arquivo .zip, clique na opção Download ZIP. Após isso, descompacte o arquivo .zip baixado no lugar de sua escolha.

Caso tenha optado por baixar via `git clone`, copie o link https do programa --> `https://github.com/Pedrohenr1qq/CRUD-With-Validation.git`.

Abra um terminal ou prompt de comando.

Vá para o diretório onde deseja baixar o programa e digite o seguinte comando:

```
git clone https://github.com/Pedrohenr1qq/CRUD-Simple.git 
```

Verifique se o programa foi baixado corretamente. Caso sim, você pode seguir com a explicação abaixo.

## Utilizando o programa
Para utilizar o programa, é necessário que esteja instalado as seguintes depedências:
 - Node.js e NPM 
 - Express
 - MongoDB e Mongoose
 - Json Web Token
 - Thunder Client
 - Nodemon
 - Jest
 - Supertest

## Instalando Dependências:
### Node Js
Você pode realizar a instalação do Node.Js, de acordo com seu Sistema Operacional (Windows, Linux ou MacOS) no site abaixo:
[Instalar Node.Js (Alura)](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos)

### Express 
Após instalar o Node.Js, abra um terminal no mesmo diretório de onde está o código e digite o comando abaixo:
```
npm i express
```

### MongoDB e Mongoose
MongoDB é um sistema de gerenciamento de bancos de dados não relacional. Para baixa-lo, você pode utilizar este link: [Instalar MongoDB](https://www.mongodb.com/pt-br/docs/manual/administration/install-community/)

Mongoose é uma biblioteca JavaScript que serve para que a aplicação consiga se comunicar com o banco de dados no MongoDB. Você pode instala-lo de forma semelhante à instalação do Express, digitando o seguinte comando no terminal:
```
npm i mongoose
```

### Json Web Token
O Json Web Token é uma forma de gerar tokens baseado em alguma chave repassada pelo programa. Para instalar essa ferramenta, utilize o comando:
```
npm i jsonwebtoken
```


### Thunder Client
Abra o editor de código que você tem baixado e, na aba de extensões, pesquise pela extensão `Thunder Client`. 

Instale ela.


### Ferramentas para teste do programa:

### Nodemon
Para instalar o nodemon, utilize o comando:
```
npm i -D nodemon
```

### Jest
Para instalar o jest, utilize o comando:
```
npm i -D jest
```

### Supertest
Para instalar o supertest, utilize o comando:
```
npm i -D supertest
```
## Iniciar o programa
Abra o terminal no mesmo diretório do programa. <br>
Há duas maneiras de iniciar o projeto.
Você pode digitar os comandos abaixo no terminal para iniciar o programa:
```
  npm start
```

ou 
```
  npm run dev
```
Feito isso, aparecerá um link que o direcionará para o servidor onde irá rodar o projeto. O link é: `http://localhost:3000`

## User
O usuário possui os seguintes dados que o definem:
- id (banco de dados)
- name
- email
- password
- token


## Rotas
Para fazer um <i>request</i> das rotas, utilizaremos a extensão instalada anteriormente: `Thunder Client` e os protocolos HTTP (GET, POST, PUT e DELETE). 

Acesse a extensão e clique na opção `New Request` (se o seu editor não estiver em inglês, talvez apareça outro nome).

Mude a url presente para a url do projeto: `http://localhost:3000` e adicione `/user/` ao final, ficando:`http://localhost:3000/user/;` .

### GET
As rotas GET permitem obter os dados referente à nossa aplicação. Nesse cado, é possível obter os dados dos usuários cadastrados.

Há dois <i>endpoints</i> para essa rota. O primeiro é `/find/<id>`, no qual é possível acessar um usuário específico pelo seu id.

Outro <i>endpoint</i> é o `/findAll`, que retorna todos os usuários cadastrados. 

### POST
A rota POST permite que um novo usuário seja criado, desde que sejam passados todos os dados necessários. 

Para acessar essa rota, utilize o <i>endpoint</i> `/create`, passando no <i>body</i> da requisição os dados para criação de um novo usuário.

### PUT
A rota PUT permite que os dados de um usuário sejam atualizados. Isso é feito escolhendo um usuário com base no seu id e pasando os novos dados.

Para acessar essa rota, utilize o <i>endpoint</i> `/update/<id>`, selecionando o id do usuário que deseja alterar e passando no <i>body</i> da requisição os novos dados a alteração de um usuário cadastrado.

### DELETE 
A rota DELETE permite a exclusão de um usuário cadastrado pelo seu id. 

Para acessar essa rota, utilize o <i>endpoint</i> `/delete/<id>` selecionando o id do usuário que deseja excluir

### Login 
A rota login serve para que um usuário, ja criado (cadastrado), consiga ter acesso ao sistema.
Ao acessar essa rota, passando o email e a senha no corpo da requisição,
é gerado um token a esse usuário, através da biblioteca Json Web Token, autenticando o usuário.

Para acessar essa rota, utilize o <i>endpoint</i> `/login`, passando o email e a senha um usuário ja cadastrado


### Validar
A rota validar serve para validar o token gerado após uma tentativa válida de login.

Para acessar essa rota, utilize o <i>endpoint</i> `/validate`, passando o token gerado na area de autorização,
 no campo Bearer.

## Testar código
Abra o terminal no mesmo diretório do programa. <br>
Digite o comando:
```
  npm run test
```
