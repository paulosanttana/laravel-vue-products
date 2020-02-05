
<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<br>

**Projeto Laravel + VueJs para CRUD Products**

Consumindo API Laravel com VueJs. Esse projeto utiliza Laravel 5.7, VueJs, Bootstrap e Mysql.




**Contents**

- [Preparar component e Vuex](#Preparar-component-e-Vuex)




## Preparar component e Vuex

1. Criar diretório `products` dentro de `pages` e adicione component `ProductsComponent.vue`
```vue
<script>
// resources\js\compoents\admin\pages\products\ProductsComponent

<template>
    <div>
        <h1>Listagem de Produtos</h1>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

```

1.1 importar component e adicionar no arquivo de rotas `routers.js`
```javascript
// routes\routers.js

...

import ProductsComponent from '../components/admin/pages/products/ProductsComponent'    // Adicionado!

Vue.use(VueRouter)

const routes = [
    {
        path: '/admin', 
        component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'},
            {path: 'categories/create', component: AddCategoryComponent, name: 'admin.categories.create'},
            {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true},

            {path: 'products', component: ProductsComponent, name: 'admin.products'}    // Adicionado!
        ]
    },

]

...

```

1.2 registrar rotas em `AdminComponent` (menu do layout).
```vue
<script>
// ../pages/AdminComponent.vue



```

2. Adicionar no Vuex as ações para `products`, será criado arquivos `actions, getters, mutations, products e state` separado.
```bash
# hierarquia dos diretórios
resources
        |__js
            |__vuex
                   |__modules
                         |__products            
                                |__actions.js
                                |__getters.js
                                |__mutations.js 
                                |__products.js
                                |__state.js

```

2.1 Arquivo `products` 
```vue
<script>

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

export default {
    state,
    actions,
    mutations,
    getters,
} 
```


2.2 Arquivo `getters`
```vue
<script> //Tag somente para apresentação desse código

export default {
    
}
```

2.3 Arquivo `mutations`
```vue
<script> //Tag somente para apresentação desse código

export default {
    
}
```

2.4 Arquivo `actions.js`
```vue
<script> //Tag somente para apresentação desse código

export default {
    
}
```

2.5 Arquivo `state`
```vue
<script> //Tag somente para apresentação desse código

export default {
    itemn: {}
}
```

2.6 Adicione vinculo no `store.js`.
```javascript

import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'
import preloader from './modules/preloader/preloader'
import products from './modules/products/products'  // Adicionado import

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        categories: Categories,
        preloader: preloader,
        products,   // Registrado import
    }
})

export default store

```

## buscar produtos da API

**Armazenar os produtos na state**
3. 
```javascript
// ../vuex/modules/products/actions.js


```

## Listar Products com Vuex
4.

## Paginação Simple de Itens Laravel com Vue

5.

6. Instalação `vue-fontawesome`. Link Official [Fontawesome](https://github.com/FortAwesome/vue-fontawesome)

```bash
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/vue-fontawesome
```

6.1 Inporta os pacotes

```javascript
// resources/js/app.js

import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'     //ADICONADO
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'    //ADICONADO
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  //ADICONADO

library.add(faUserSecret)  //ADICONADO

Vue.component('font-awesome-icon', FontAwesomeIcon)  //ADICONADO

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

Exemplo: `<font-awesome-icon :icon="['fas', 'user-secret']" />`

## Filtro de Produtos

7. 

# Instalação Vodal (modal)

8. Execute no terminal para fazer a instalação do [Vodal](https://github.com/chenjiahan/vodal)
```bash
npm install --save-dev vodal
```

8.1 Registrar `css`, inserir acento til '~' antes do `vodal/` para que o os pacotes estão dentro do `nodemodules`.
```scss
// ..\resources\sass\app.scss 

// Vodal
@import "~vodal/common.css";
@import "~vodal/rotate.css";
```

8.2 Adicione botão no  component `ProductsComponent`
```vue
<template>
    ...

    <div class="row">
        <div class="col">
            <button class="btn btn-success">
                Adicionar
            </button>
        </div>
        <div class="col">
            <search @search="searchForm"></search>
        </div>
    </div>

    ...

</template>
```

8.3 Importar o component `Vodal`
```vue

```

## Cadastro de Produto Modal Laravel com Vue

9. 

## Fechar Modal e Listar Produtos Laravel com Vue JS

10.

## Resetar Formulário de Erros

11.

##  Carregar Categorias Automaticamente

12. 

## Preparar Edição de Produto

13. 

## Editar Produto

14. 

## Reset Form Edit 

15.

## Deletar Produto com Confirmação

16.