<template>
<div id="app">
  <h1>Hello!!!</h1>
  <SfButton class="button-center">Add to Cart</SfButton>
  <SfBadge class="color-secondary">Limited Offer</SfBadge>

  <!-- <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else> -->
  <p v-if="error">Error: {{ error.message }}</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <button @click="$axios">Refresh</button>
  </div>
  <p>Name:{{ shop.name }}</p>
  <p>Shop: {{ shop }}</p>
  <p>Base URL: {{ $config.baseURL }}
  <p>ENV: {{ $config.shopifyStorefrontApiKey }}</p>
</div>
</template>

<script>
import {SfButton, SfBadge } from "@storefront-ui/vue";
import "@storefront-ui/vue/styles.scss";
import axios from 'axios';
export default {
  name: "Home",
  components: {
    SfButton,
    SfBadge
    },
  data() {
      return {
        // mountains: [],
        shop: [],
        error: ''
      }
    },
  // async asyncData({ $axios, $config }) {
  //   const mountains = await $axios.$get(`https://api.nuxtjs.dev/mountains`)
  //   return { mountains }
  // }

  async asyncData({ $axios, $config: { baseURL, shopifyStorefrontApiKe} }) {
    try {
      const mountains = await $axios.$get(`https://api.nuxtjs.dev/mountains`)
      return { mountains }
    } catch (error) {
      return { error }
    }
  },

  // async asyncData( { $axios, $config: { baseURL, shopifyStorefrontApiKey} }){
  //   try {
  //     const shop = await $axios.$post(`${baseURL}`, {
  //       headers: { 'Content-Type': 'application/graphql', 
  //                    "Access-Control-Origin": "*", 
  //                    'X-Shopify-Storefront-Access-Token': `${shopifyStorefrontApiKey}`
  //                  },
  //         body: '{ shop { name } }'
  //     })
  //     return { shop }
  //   } catch (error) {
  //     return {error}
  //   }
  // }

}

</script>

<style lang="scss">