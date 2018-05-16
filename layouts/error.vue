<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Página não encontrada
    </h1>
    <h1 v-else>
      Oops ocorreu um erro...
    </h1>

    <nuxt-link to="/">Voltar para página inicial</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>
