<template>
    <div>
        <h1 class="mt-4 mb-3">Listagem de Produtos</h1>

        <div class="row mb-2">
            <div class="col">
                <button class="btn btn-success" @click.prevent="create">
                    Novo
                </button>

                <vodal 
                    :show="showModal" 
                    animation="zoom" 
                    @hide="hideModal"
                    :width="600"
                    :height="500">
                    <product-form 
                        :product="product"
                        :update="update"
                        @success="success">
                    </product-form>
                    </vodal>
            </div>
            <div class="col">
                <search @search="searchForm"></search>
            </div>
        </div>

        <table class="table table-dark">
            <thead>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th width="200">Ações</th>
            </thead>
            <tbody>
                <tr v-for="product in products.data" :key="product.id">
                    <td>...</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category_id }}</td>
                    <td>
                        <a href="#" @click.prevent="edit(product.id)" class="btn btn-info">Editar</a>
                        <a href="#" @click.prevent="confirmDelete(product)" class="btn btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <pagination
        :pagination="products"
        :offset="6"
        @paginate="loadProducts">
        </pagination>

        <!-- <dataGrid></dataGrid> -->
    </div>
</template>

<script>
import PaginationComponent from '../../../layouts/PaginationComponent'
import dxDataGridComponent from '../products/partials/dxDataGridComponent'
import SearchComponent from '../../layouts/SearchComponent'
import Vodal from 'vodal'
import ProductFormComponent from '../products/partials/ProductFormComponent'

export default {
    created () {
        this.loadProducts(1)
    },
    data () {
        return {
            search: '',
            showModal: false,
            product : {
                id: '',
                name: '',
                description: '',
                category_id: '',
            },
            update: false,
        }
    },
    computed: {
        products () {
            return this.$store.state.products.items
        },
        params () {
            return {
                page: this.products.current_page,
                filter: this.search,
            }
        }
    },
    methods: {

        // ATUALIZA produtos
        loadProducts (page) {
            this.$store.dispatch('loadProducts', {...this.params, page})
        },

        edit (id) {
            this.resetForm()

            this.$store.dispatch('loadProduct', id)
                            .then(response => {
                                this.product = response

                                this.showModal = true

                                this.update = true
                            })
                            .catch(response => {
                                this.$snotify.error('Erro ao carregar o produto')
                            })
        },

        create () {
            this.update = false

            this.showModal = true

            this.resetForm()
        },

        searchForm (filter) {
            this.search = filter

            this.loadProducts(1)
        },

        // FECHA Modal
        hideModal () {
            this.showModal = false

        },

        success () {
            this.hideModal()

            this.loadProducts(1)
        },

        resetForm () {
            this.product = {
                    id: '',
                    name: '',
                    description: '',
                    category_id: '',
            }
        },

        confirmDelete (product) {
            this.$snotify.error(`Deseja realente deletar o produto ${product.name}`, product.name, {
                timout: 10000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                buttons: [
                    {text: 'Não', action: () => console.log('Não...')},
                    {text: 'Sim', action: () => this.destroy(product.id)}
                ]
            })
        },

        destroy (id) {
            this.$store.dispatch('destroyProduct', id)
                            .then(() => {
                                this.$snotify.success('Deletado com sucesso!')

                                this.loadProducts(1)
                            })
                            .catch(() => this.$snotify.error('Error ao Deletar'))
        }
    },
    components: {
        pagination: PaginationComponent,
        dataGrid: dxDataGridComponent,
        search: SearchComponent,
        Vodal,
        productForm: ProductFormComponent,
    }
}
</script>

<style scoped>

</style>