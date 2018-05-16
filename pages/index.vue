<template>
  <div>
  </div>
</template>

<script>
export default {
  created() {
    this.$root.$emit('breadcrumb:change', []);
  },
  head () {
    return {
      title: 'Motor de busca',
      meta: [
        { hid: 'description', name: 'description', content: 'Motor de busca' }
      ]
    }
  }
}
</script>

<style>

</style>
