# Documentação
## API para gerenciamento de carregamento de veículos espaciais não tripulados com propulsão de íons



## Baixando o repositório

- `git clone https://github.com/ronaldomribeiro1/voltbras2118.git`



## Dependências

- Instale o prisma `npm install -g prisma`
- instale o [docker](https://www.docker.com/products/container-runtime)
- instale o [Docker Compose](https://docs.docker.com/compose/install/)
- Use o comando `npm install` para instalar as dependências do projeto



## Criando uma imagem do projeto

- Antes de iniciar o servidor você deve gerar uma imagem docker usando o comando 

  `docker build -t voltbras2118:latest .`



## Iniciando o servidor

- Use o comando `sudo docker-compose up -d`



## Rodando os testes

- npm run test



## Fazendo uma requisição GraphQL

- Todas as requisições devem ser feitas como um POST para http://localhost:8383/, veja a [documentação oficial do GraphQL](https://graphql.org/learn/queries/)
- Você pode acessar o [playground](http://localhost:8383/) em seu navegador consultar as querys e mutations disponíveis.