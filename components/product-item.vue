<template>
  <nuxt-link class="product-item-wrapper"
  tag="div"
  :to="'/items/' + model.id">
    <div class="img-wrapper">
      <img
      :src="model.thumbnail"
      :alt="model.title">
    </div>

    <div class="info-wrapper">
      <h2 class="price">
        ${{ model.price }}
      </h2>

      <p class="city-name">
        {{ model.address.city_name }}
      </p>

      <p class="title">
        {{ model.title }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    model: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';

  .product-item-wrapper {
    padding: 10px 15px;

    div {
      display: table-cell;
      vertical-align: top;
    }
    .info-wrapper {
      padding: 10px 15px;
      width: 100%;
    }

    &:hover {
      .price {
        margin-left: 15px;
      }
    }
  }

  img {
    height: 150px;
  }

  .title {
    width: 70%;
  }

  .price {
    transition: margin 1s;
    font-weight: $fontWeightTitles;
    margin-bottom: 15px;
  }

  .city-name {
    float: right;
    color: $disable;
  }
</style>
