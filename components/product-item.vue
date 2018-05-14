<template>
  <div class="product-item-wrapper">
    <div class="img-wrapper">
      <img src="~/assets/images/logo-pt-large-plus.png" alt="">
    </div>

    <div class="info-wrapper">
      <h3 class="title">
        Preço
      </h3>

      <p>Texto lado direito</p>

      <p class="description">
        Descrição do produto resumida
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem'

}
</script>

<style lang="scss" scoped>
  .product-item-wrapper {
    div {
      display: inline-block;
    }
  }
</style>
