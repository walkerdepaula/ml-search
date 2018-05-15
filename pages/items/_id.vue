<template>
  <div class="product-detail-wrapper">
    <div class="img-wrapper">
      <img :src="thumbnail" :alt="title">
    </div>

    <div class="info-wrapper">
      <div class="text">
        <h5>{{ itemCondition().value_name }} - {{ sold_quantity }} Vendidos</h5>
        <h3>{{ title }}</h3>
        <h1>$ {{ price }}</h1>
      </div>
      <button type="button" class="btn">Comprar</button>
    </div>

    <div class="description-wrapper">
      <p class="title-description">Descrição do produto</p>
      <span>{{ description.plain_text }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductDetail',
  validate({ params }) {
    return params.id != undefined;
  },
  async asyncData({ params, error }) {
    try {
      const productUrl = `https://api.mercadolibre.com/items/${params.id}`;
      const productResponse = await axios.get(productUrl);

      const descriptionUrl = `https://api.mercadolibre.com/items/${params.id}/description`
      const descriptinResponse = await axios.get(descriptionUrl);

      return {
        ...productResponse.data,
        description: {
          ...descriptinResponse.data
        }
      }

    } catch (e) {
      error({ message: 'Item not found', statusCode: 404 });
    }
  },
  methods: {
    itemCondition() {
      return this.attributes.filter( attribute => attribute.id.toUpperCase() === 'ITEM_CONDITION' )[0]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';

  h5, h3 {
    margin-bottom: 5px;
  }

  h1 {
    margin-bottom: 25px;
  }

  .product-detail-wrapper {
    background: white;
    padding: 10px 15px;
  }

  .img-wrapper {
    width: 70%;

    img {
      width: 100%
    }
  }

  .info-wrapper {
    padding: 0 0 0 15px;
  }

  .info-wrapper, .img-wrapper {
    display: table-cell;
    vertical-align: top;
  }

  .description-wrapper {
    width: 70%;

    .title-description {
      font-size: 22px;
      margin-bottom: 25px;
    }

    span {
      color: $disable
    }
  }

  .btn {
    width: 100%;
    height: 40px;
    background: $blueInfo;
    color: $white;
    font-size: 22px;
    font-weight: 200;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 5px $grayLight;

    &:hover {
      cursor: pointer;
    }
  }
</style>
