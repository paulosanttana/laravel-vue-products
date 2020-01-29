<template>
    <div>
        <h1 class="mt-4 mb-3">
            Adicionar nova Categoria
        </h1>

        <form-cat></form-cat>   <!-- Adiciona tag do formulário -->
    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent'

export default {
     components: {
        formCat: FormCategoryComponent
    }
}
</script>


<style scoped>

</style>