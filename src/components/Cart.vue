<template>
  <div id="cart">
    your shopcarts
    <div v-show="!products.length">your shopcarts is null</div>
    <ul>
      <li v-for="p in products">
        {{p.title}} - {{p.price|currency}}*{{p.quantity}}
      </li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button :disabled="!products.length" @click="checkout">checkout</button>
    <p>checkout {{checkoutStatus}}</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkOutStatus',
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: mapActions([
    'checkout'
  ])
}
</script>
<style></style>

