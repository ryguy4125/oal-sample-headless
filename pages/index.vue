<template>
<div id="app">
  <h1>Hello!!!</h1>
  <SfButton class="button-center">Add to Cart</SfButton>
  <SfBadge class="color-primary">Limited Offer</SfBadge>
</div>
</template>

<script>
import {SfButton, SfBadge } from "@storefront-ui/vue";
import "@storefront-ui/vue/styles.scss";
export default {
  name: "Home",
  components: {
    SfButton,
    SfBadge
    }
}
</script>

<style lang="scss">