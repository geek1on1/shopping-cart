<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>
<script>
import store from  '@/store'
import shop from '@/api/shop'
export default {
  computed: {
    products () {
      return store.state.products;
    }
  },

  created () {
    shop.getProducts(products => store.commit('setProducts', products))
  },

  methods: {

  }
}
</script>
<style scoped>

</style>
