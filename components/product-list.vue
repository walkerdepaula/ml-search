<template>
  <div>
    <ul>
      <li class="item"
      v-for="item in items.slice(0, 4)"
      :key="item.id">
        <product-item
        :model="item"/>
      </li>

      <li v-if="!items.length">
        <div class="alert-info">
          <p>Nenhum item encontrado.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import productItem from "./product-item.vue";

export default {
  name: 'ProductList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    productItem
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';

  ul {
    list-style: none;

    li {
      background: white;
      margin-bottom: 2px;
      cursor: pointer;
    }
  }

  .alert-info {
    text-align: center;
    padding: 10px 15px;
    color: $disable;
    box-shadow: 1px 2px 5px rgba(191, 191, 191, 0.65);
    cursor: default;
  }
</style>
