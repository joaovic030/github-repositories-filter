# Aplicação - github-repositories-filter
## Uma aplicação React e Node para exibir e filtrar repositórios do github


Nesta aplicação foram implementadas as seguintes fucionalidades: Listar repositórios, Listar linguagens e buscar repositórios por linguagem. Foi feito em Node usando a arquitetura REST, consumindo a API do **Github**, da qual consumia-se os items retornadados em repositórios, tanto para listar e buscar os repositórios, tanto para listar as linguagens. E usado Reactjs para o frontend para exibir os dados de repositórios e filtro de repositórios por linguagem e paginação.

## Tecnologias 
- Node.js
- Reactjs
- Postman

## Dependências
- Express
- Axios
- React
- react-bootstrap
- react-horizontal-scrolling-menu
- pagination-component
- react-fontawesome

## Guia
1.  É necessário clonar o repositório com o comando `git clone https://github.com/joaovic030/github-repositories-filter.git`
2.  Entrar no diretório do projeto `github-repositories-filter`
3.  Para instalar as dependências do projeto deverá rodar o comando `npm install` na pasta `github-repositories-filter`, na pasta `github-repositories-filter/client` e na pasta `github-repositories-filter/server`
4.  Após isso, é só rodar a aplicação com o comando: `npm run dev` o qual iniciará tanto a aplicação React, quanto levantar nossa REST API.

## Arquitetura REST
A seguir, detalhes da configuração da API a qual foi setada para rodar em localhost na porta 4000, enquanto a aplicação React pode ser acessada na porta 3000.

- Listagem de repositórios com/sem query param de páginação - GET: http://localhost:4000/repositories ou http://localhost:4000/repositories?page=3
	Se acessar com sucesso, retorna repositórios do github com todos os dados fornecidos pela API do Github.
	
- Busca de repositórios por Linguagem - GET: http://localhost:4000/repositories/:lang
Se acessar com sucesso, retorna os repositórios com a linguagem que foi escrito de acordo com a linguagem fornecida no parametro `:lang`.
- Listagem de linguagens - GET: http://localhost:4000/languages
Se acessar com sucesso, retorna as linguagens em formato JSON contendo o nome representado pelo atributo `name`.

## Testes
Os testes foram realizados no ambiente da ferramenta Postman, onde foi criado uma coleção de request com 3 testes, comprovando o sucesso das funcionalidades. Os testes podem ser vistos nas figuras abaixo.

### Listando repositórios
![Repositories](https://user-images.githubusercontent.com/20564326/82248469-32460000-9916-11ea-8b50-b2e4364b6500.png)

### Listando repositórios por página
![RepositoriesPage](https://user-images.githubusercontent.com/20564326/82248513-4427a300-9916-11ea-8b19-de8c3a2328c3.png)

### Listando repositórios por linguagem
![RepositoriesByLang](https://user-images.githubusercontent.com/20564326/82248528-4be74780-9916-11ea-8084-38ff4fe8ffe5.png)

### Listando linguagens dos repositórios
![Languages](https://user-images.githubusercontent.com/20564326/82248544-54d81900-9916-11ea-861b-e71672914f49.png)
