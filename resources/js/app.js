
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import Snotify from 'vue-snotify'   //Importado pacote

import router from './routes/routers'
import store from './vuex/store'

Vue.use(Snotify, {toast: {showProgressBar: false}}) // Usa no Vue o pacote e passa parametro de false para a ação de barra progressiva 'showProgressBar'.

//Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCoffee, faSpinner, faCompactDisc, faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCoffee, faSpinner, faCompactDisc,faAngleRight, faAngleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/** 
 * DevExtreme
*/
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';


/***
 * Components globais
 */
Vue.component('admin-component', require('./components/admin/AdminComponent').default)
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default)

const app = new Vue({
    router,
    store,
    el: '#app'
});


store.dispatch('loadCategories')