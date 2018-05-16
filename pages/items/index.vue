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
  components: {
    productList
  },
  watchQuery: [
    'search'
  ],
  key(to) {
    return to.fullPath
  },
  validate({ query }) {
    return query.search != undefined;
  },
  async asyncData({ query, error }) {
    try {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${query.search}`;
      const {data} = await axios.get(url);

      return data;

    } catch (e) {
      error({ message: 'No search to do', statusCode: 404 });
    }
  },
  methods: {
    changeBreadcrumb() {
      const categorys = this.filters.length
        ? this.filters
          .filter( filter => filter.id.toUpperCase() === 'CATEGORY' )[0].values[0]
        : []

      this.$root.$emit('breadcrumb:change', categorys);
    }
  },
  created() {
    this.changeBreadcrumb();
  }
}
</script>

<style>

</style>
