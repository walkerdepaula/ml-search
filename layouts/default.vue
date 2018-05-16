<template>
  <div>
    <search-bar/>

    <div class="container">
      <breadcrumb/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import searchBar from '~/components/search-bar.vue'
import breadcrumb from '~/components/breadcrumb.vue'

export default {
  components: {
    searchBar,
    breadcrumb
  },
}
</script>


<style lang="scss">
  @import '~assets/scss/variables';

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  h5, h4, h3, h2, h1 {
    font-weight: 500;
  }

  html, body {
    height: 100%;
    background: $grayLight;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
</style>
