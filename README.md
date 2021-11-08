Breve documentação:

Projeto base criado com potencial de ser continuado por alguem que desejar fazer...

Por gentileza seguir os padroes do GitFlow para continuação...

branch develop - Todas features estáveis

release - Verificações da features
features - feature/nova modificaçao
hotfix - Colocar direto pra master e develop

Possiveis atualizações futuras...

- Colocar restante das versões do homem aranha
- Colocar opção para pesquisar ou filtrar
- Pagina inicial pode ser mais elaborada, colocando outras opções de acesso e frases mais bonitas e mais customizadas

Para se conectar com a API é bem simples...
- Faça cadastro no site (https://developer.marvel.com)
- Ao concluir o cadastro vc recebera suas informações de acesso que são: chave publica e chave privada, utilizaremos elas para gerar um hash de acesso a API
- Para continuarmos precisa-se entender como funcionam as rotas de acesso...
	- Ao final de cada endpoint será solicitado um ts(TimesTemp), a sua chave publica(apiKey) mais um hash, que é um md5 gerado a partir de um ts+chavePublica+ChavePrivada

Exemplo:
https://gateway.marvel.com:443/v1/public/characters?ts=[TIMES_TAMP]&apikey=[CHAVE_PUBLICA]&hash=[MD5_DE_timesTemp+chavePublica+chavePrivada]

- Se desejar pode fazer um pequeno método para gerar essa hash, pegandos dados informados e gerando a md5 e aplicando direto no serviço do componente. Como nesse pequeno projeto precisei acessar somente 3 rotas, gerei um hash e so coloquei na chamada.

Se ficar com mais alguma dúvida ou quiser algo mais detalhado, ler direto na documentação (https://developer.marvel.com/documentation/getting_started)

# TesteBtg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
