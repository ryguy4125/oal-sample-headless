<template>
<div id="app">
  <h1>Hello!!!</h1>
  <SfButton class="button-center">Add to Cart</SfButton>
  <SfBadge class="color-secondary">Limited Offer</SfBadge>

  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
  <p>{{ shop }}</p>
  <p>Base URL: {{ $config.baseURL }}
  <p>ENV: {{ $config.shopifyStorefrontApiKey }}</p>
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
    },
  data() {
      return {
        mountains: [],
        shop: []
      }
    },
  async fetch({$config: { baseURL, ShopifyStorefrontApiKey }}) {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then(res => res.json())
  // },
  // async fetch() {
    try {
      this.shop = await fetch( `${baseURL}/api/graphql.json`, 
    	{ method: 'POST', 
          headers: { 'Content-Type': 'application/graphql', 
                     "Access-Control-Origin": "*", 
                     'X-Shopify-Storefront-Access-Token': `${ShopifyStorefrontApiKey}`
                   },
          "body": '{ shop { name } }'})
          .then(response => response.json());
    } catch (error) {
      this.shop.name = "Error in Storefront API"
    }
    
  }
}

</script>

<style lang="scss">