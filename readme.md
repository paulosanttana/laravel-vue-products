
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
        |-- js
            |-- vuex
                   |-- modules
                         |-- products            
                                |-- actions.js
                                |-- getters.js
                                |-- mutations.js 
                                |-- products.js
                                |-- state.js

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

## 
3. 