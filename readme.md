# React

No dia a dia utilizamos várias bibliotecas para React ou Javascript com o objetivo de facilitar nosso trabalho. 

## Como criar um projeto em React

Nosso primeiro passo para criar um projeto através do npm.

```bash
npm create-react-app <nome_do_projeto>
```

## Precisamos entrar no projeto criado

 1 - Entre na pasta do projeto 
 ```bash
cd <nome_do_projeto>
```

## Rodar a aplicação

 ```bash
npm start
```

### Aqui estão alguns conceitos básicos sobre React:

- Componentes: são blocos de construção de uma aplicação e podem ser reutilizados.
- Class components: é a forma mais antiga de criar componentes. Fornece acesso ao state e ao ciclo de vida do React.
- Funcional components: forma mais atual de criar componentes.
- Props: são propriedades que um componente pai passa para um componente filho e serve para comunicar informações entre componentes (podem ser de qualquer tipo).
- ProtoTypes: é uma biblioteca JS que permite validar props de um componente React.

### Como usar o ProtoTypes

1 - Instale a biblioteca 
```bash
npm install prop-types
```
2 - Importe a biblioteca prop-types
```bash
import PropTypes from 'prop-types'
```
3 - Defina uma propriedade propTypes no componente React
4 - Especifique os tipos de dados esperados para cada propriedade

