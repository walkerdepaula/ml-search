<template>
  <div class="search-bg">
    <div class="container">
      <div class="img-wrapper">
        <img src="~/assets/images/logo-pt-large-plus.png" alt="Mercado livre logotipo">
      </div>

      <div class="search-wrapper">
        <input type="text"
        @keyup.enter="showItems"
        v-model="searchValue">
        <button type="button"
        @click="showItems()">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    showItems
  },
  created() {
    const querySearchValue = this.$router.history.current.query.search;
    if (this.$router.history.current.query.search) {
      this.searchValue = querySearchValue;
    };
  }
}

function showItems() {
  if (this.searchValue.length) {
    this.$router.push({
      name: 'items',
      query: {
        search: this.searchValue
      }
    });
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';

  .container {
    div {
      display: inline-block;
    }
  }

  .search-bg {
    background: $yellowMl;
    margin-bottom: 15px;
  }

  .img-wrapper {
    padding: 10px 0;
    width: 200px;
  }

  .search-wrapper {
    width: calc(100% - 200px);
    top: -13px;
    position: relative;
    height: 30px;

    input {
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
      height: 100%;
      padding: 7px 60px 9px 15px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      background-color: #fff;
      border: 0 rgba(0,0,0,.2);
      box-sizing: border-box;
      width: 100%;
      outline: none;
    }

    button {
      position: absolute;
      right: 0;
      height: 100%;
      padding: 0 7px;
      background: $grayDarker;
      border: none;
      outline: none;
    }
  }

</style>
