<template>
  <DxDataGrid
    :data-source="products"
    :columns="columns"
    :show-borders="true"
  />
</template>
<script>

import DxDataGrid from 'devextreme-vue/data-grid';
// import { customers } from './data.js';

export default {
  components: {
    DxDataGrid
  },
  computed: {
        products () {
            return this.$store.state.products.items.data
        }
    },
    data() {
        return {
        // dataSource: this.products,
        columns: ['id', 'category_id', 'description', 'name']
    };
}

};

</script>