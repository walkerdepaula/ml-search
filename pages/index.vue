<template>
  <div>
  </div>
</template>

<script>
export default {
  created() {
    this.$root.$emit('breadcrumb:change', []);
  }
}
</script>

<style>

</style>
