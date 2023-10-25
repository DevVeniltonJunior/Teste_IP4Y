# Teste_Ip4y/API

CRUD de usuarios.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js
- TypeScript
- Express.js
- Prisma
- MySQL
- Jest (para testes)

## Configuração

1. Clone o repositório.

  ```bash
   git clone https://github.com/DevVeniltonJunior/Teste_IP4Y_backend.git
   cd Teste_IP4Y_backend
  ```

2. Instale as dependências.

  ```bash
   npm install
  ```

3. Configure as variável de ambiente. Crie um arquivo .env na raiz do projeto conforme o exemplo abaixo:

 ```bash
   DATABASE_URL="mysql://<user>:<senha>@<host>:<port>/<database>"
  ```

4.Execute as migrações do Prisma para criar as tabelas no banco de dados.

  ```bash
    npm run prisma:resolve
  ```

  4.1 Sera necessario truncar a tabela de migrations no banco de dados, apos execute o comando:

   ```bash
    npm run prisma:apply
  ```

## Uso
  1. Inicie o servidor de desenvolvimento.

  ```bash
    npm run dev
  ```

  2. Acesse a API na rota: 

  ```bash
    http://localhost:3000/users
  ```

## Testes

  Execute os testes automatizados usando o Jest.
   ```bash
    npm test
  ```

## Contribuindo

  Sinta-se à vontade para contribuir para o projeto. Basta criar um fork e enviar um pull request.
