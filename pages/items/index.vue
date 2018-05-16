<template>
  <div>
    <product-list
    :items="results"/>
  </div>
</template>

<script>
import axios from 'axios'
import productList from '~/components/product-list.vue'

export default {
  head () {
    return {
      title: 'Produtos',
      meta: [
        { hid: 'description', name: 'description', content: 'listagem de produtos' }
      ]
    }
  },
  components: {
    productList
  },
  watchQuery: [
    'search'
  ],
  key: to => to.fullPath,
  validate,
  asyncData,
  methods: {
    changeBreadcrumb
  },
  created() {
    this.changeBreadcrumb();
  }
}

function validate({ query }) {
  return query.search != undefined;
}

async function asyncData({ query, error }) {
  try {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${query.search}`;
    const {data} = await axios.get(url);

    return data;

  } catch (e) {
    error({ message: 'No search to do', statusCode: 404 });
  }
}

function changeBreadcrumb() {
  const categorys = this.filters.length
    ? this.filters
      .filter( filter => filter.id.toUpperCase() === 'CATEGORY' )[0].values[0]
    : []

  this.$root.$emit('breadcrumb:change', categorys);
}
</script>

<style>

</style>
