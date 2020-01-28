import axios from 'axios'
import { URL_BASE } from '../../../config/configs'

const RESOURCE = 'products'

export default {
    loadProducts (context, params) {
        context.commit('PRELOADER', true)

        axios.get(`${URL_BASE}${RESOURCE}`, {params})
                .then(response => context.commit('LOAD_PRODUCTS', response.data))
                .catch(error => console.log(error))
                .finally(() => context.commit('PRELOADER', false))
    }
}