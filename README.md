This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

First, you need to copy the .env.example into .env file.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Arquitetura

Visando escalabilidade e uma maior ergonomia de desenvolvimento, foi adotado uma arquitetura modular. A abordagem feita aqui tem como a principal diretriz o conceito de organizar as classes e funções pelo seu domínio, como demonstra Martin Fowler:

[bliki: PresentationDomainDataLayering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)

> Cited benefits include higher cohesion, lower coupling, and related code is easier to find.

### 📁 core

Contém os recursos comuns de uma aplicação qualquer. Esta pasta pode ser reutilizada como um pacote por outros projetos que compartilham dessa estrutura.

### 📁 modules

Contém as *features* da aplicação separados por seu domínio de negócio no formato de módulos. Pense que todos os diretórios aqui deverão ser passíveis de se tornar até mesmo pacotes do NPM auto-contidos, podendo ter dependências somente entre a interface publica de outros módulos ou ao ***core*** da aplicação. Além disso, a separação aqui pode se dar a partir dos micro-serviços análogos aos quais a aplicação se comunica.

O nome deve sempre representar o domínio que ela exerce.

### 📁 pages

As páginas são componentes utilizados na navegação do produto. Cada página é divida entre suas responsabilidades no modelo *View* e *Controller*. Essa separação facilita o aplicação de testes unitários, de integração ou *snapshot.*

Além disso, as páginas utilizam de uma arquitetura similar à MVP, desse modo:

#### 📄example.controller.ts

É definido por um [React hook](https://pt-br.reactjs.org/docs/hooks-custom.html) que implementa a lógica de negócio dessa página. Nessa camada é injetado *Providers*, realizando *fetch* de dados, controle o ciclo de vida **etc.

Aliás, é preferível que os casos de uso dessa página sejam dividos em react-hooks, para aumentar a testabilidade e o reuso.

**Nenhum JSX é utilizado nessa camada!**

#### 📄example.template.tsx

É o layout da página em si. Um componente React **puro**, que apenas consome as informações e as renderiza. 

Aqui nenhum *fetch* ou interação direta com o estado da aplicação deve ser feito - Isso é papel da camada da ***Controller*** 😉.

#### 📄example.style.scss

Define o estilo SCSS desta página.

#### 📄example.page.ts

É onde a página é implementada e exportada como componente, integrando a *Controller* com a  *View*.

### 📁 providers

Utilizados para fornecer acesso às APIs deste módulo, realizando comunicação com algum BFF ou microserviço específico. Além disso, pode ser utilizado para comunicar-se com o estado raiz.

### 📁 components

Aqui ficam os componentes que são utilizados como peças de construção reutilizáveis em páginas. São definidos por componentes React **puros** e não conhecem a lógica de negócio.

