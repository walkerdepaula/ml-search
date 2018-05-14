<template>
  <div>
    <ul>
      <li>
        <product-item/>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductItem from "~/components/product-item.vue";

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  created() {
    const searchValue = this.$route.query.search;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${searchValue}`;

    fetch(url)
      .then( result => result.json() )
      .then( (response) => {
        console.log(response.results)
      });
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;

    li {
      background: white;
      padding: 10px 15px;
    }
  }
</style>
