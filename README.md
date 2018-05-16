# Teste prático

> Motor de busca ML

## Informações
```
  - Disclaimer
    Optei por utilizar Vuejs, pois não tenho experiência em React.
    Como nunca tinha feito SSR em nenhum outro projeto, pesquisei e estudei bastante antes de começar a desenvolver e me deparei com o Nuxt.js. O Nuxt.js fornece uma estrutura básica para o desenvolvimento da aplicação, e como a minha aplicação só tem 3 telas e poucos components, decidi segui-la.
    Não estou utilizando Vuex, pois tenho poucos componentes.

  - Tecnologias utilizadas:
    - Vuejs
      - NuxtJs (para lidar com SSR)
      - VueRouter
      - Axios
    - SASS
    - AVA (para lidar com os testes)

  - Estrutura:
    - ./assets
      - Imagens e SCSS utilizado.

    - ./components
      - Componentes de lógica simples e isolada

    - ./layouts
      - Estrutura da aplicação, e das páginas de erro. (componente de ponto de entrada)

    - ./pages
      - Urls da aplicação

    - ./test
      - Testes realizados nos componentes.
```

## Desenvolvimento
``` bash
$ npm install
$ npm run dev

# Para buildar e rodar um produção
$ npm run build
$ npm start

# Para rodar os testes
$ npm run test:unit
```