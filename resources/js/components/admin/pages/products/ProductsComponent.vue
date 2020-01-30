<template>
    <div>
        <h1 class="mt-4 mb-3">Listagem de Produtos</h1>

        <table class="table table-dark">
            <thead>
                <th>Imagem</th>
                <th>Nome</th>
                <th width="200">Ações</th>
            </thead>
            <tbody>
                <tr v-for="product in products.data" :key="product.id">
                    <td>...</td>
                    <td>{{ product.name }}</td>
                    <td>
                        <a href="#" class="btn btn-info">Editar</a>
                        <a href="#" class="btn btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <pagination
        :pagination="products"
        :offset="6"
        @paginate="loadProducts">
        </pagination>

        <dataGrid></dataGrid>
    </div>
</template>

<script>
import PaginationComponent from '../../../layouts/PaginationComponent'
import dxDataGridComponent from '../products/partials/dxDataGridComponent'

export default {
    created () {
        this.loadProducts(1)
    },
    computed: {
        products () {
            return this.$store.state.products.items
        },
        params () {
            return {
                page: this.products.current_page
            }
        }
    },
    methods: {
        loadProducts (page) {
            this.$store.dispatch('loadProducts', {...this.params, page})
        }
    },
    components: {
        pagination: PaginationComponent,
        dataGrid: dxDataGridComponent
    }
}
</script>

<style scoped>

</style>