<template>
  <div class="breadcrumb-wrapper">
    <ol class="breadcrumb">
      <li ng-repeat="breadcrumb in $ctrl.defaultBreadcrumbs">
        <a href="" ui-sref="home">
          Página inicial
        </a>
      </li>
      <li class="active"
      ng-repeat="breadcrumb in $ctrl.breadcrumbs"
      ng-class="{ active: $last }">
        <span ng-if="breadcrumb.state == null || $last">
          Borderôs
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang="scss" scoped>
  .breadcrumb-wrapper {
    margin-bottom: 15px;
  }

  ol {
    list-style: none;

    li {
      display: inline-block;
    }
  }

  .active {
    color: red;
  }

  li+li:before {
    content: "/ ";
    padding: 0 5px;
    color: #7b7c8c;
  }
</style>
