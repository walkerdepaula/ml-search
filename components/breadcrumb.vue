<template>
  <div class="breadcrumb-wrapper">
    <ol class="breadcrumb">
      <li>
        <nuxt-link
        :to="'/'">
          Página inicial
        </nuxt-link>
      </li>
      <li class="disable"
      v-for="path in pathFromRoot"
      :key="path.id">
        <span>{{ path.name }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      pathFromRoot: []
    }
  },
  methods: {
    changeBreadcrumb
  },
  created() {
    this.$root.$on('breadcrumb:change', this.changeBreadcrumb)
  }
}

function changeBreadcrumb(category) {
  this.pathFromRoot = category.path_from_root
}

</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';

  .breadcrumb-wrapper {
    margin-bottom: 15px;
  }

  ol {
    list-style: none;

    li {
      display: inline-block;
    }
  }

  .disable {
    color: $disable;
  }

  li+li:before {
    content: "/ ";
    padding: 0 5px;
    color: #7b7c8c;
  }
</style>
