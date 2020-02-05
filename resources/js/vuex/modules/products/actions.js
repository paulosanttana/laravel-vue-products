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
    },

    // Carrega form edit()
    loadProduct (context, id) {
        context.commit('PRELOADER', true)

        return new Promise ((resolve, reject) => {
            axios.get(`${URL_BASE}${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))            
        })
    },

    // CREATE Product
    storeProduct (context, params) {
        context.commit('PRELOADER', true)

        // Retorno Promise
            return new Promise ((resolve, reject) => {
                axios.post(`${URL_BASE}${RESOURCE}`, params)
                    .then(response => resolve())
                    .catch(error => {
                        context.commit('PRELOADER', false)

                        reject(error.response)
                    })
                    // .finally(() => context.commit('PRELOADER', false))            
            })
    },

    // UPDATE Product
    updateProduct (context, params) {
        context.commit('PRELOADER', true)

        // Retorno Promise
            return new Promise ((resolve, reject) => {
                axios.put(`${URL_BASE}${RESOURCE}/${params.id}`, params)
                    .then(response => resolve())
                    .catch(error => {
                        context.commit('PRELOADER', false)

                        reject(error.response)
                    })
                    // .finally(() => context.commit('PRELOADER', false))            
            })
    },

    destroyProduct (context, id) {
        context.commit('PRELOADER', true)

        // Retorno Promise
            return new Promise ((resolve, reject) => {
                axios.delete(`${URL_BASE}${RESOURCE}/${id}`)
                    .then(response => resolve())
                    .catch(error => {
                        reject()

                        context.commit('PRELOADER', false)
                    })
                    // .finally(() => context.commit('PRELOADER', false))            
            })
    }
}