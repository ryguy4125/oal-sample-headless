export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'oal-example-headless',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com/",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "style",
        href:
          "https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap",
        media: "print",
        onload: "this.media='all'",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Environment variables
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    shopifyStorefrontApiKey: process.env.SHOPIFY_STOREFRONT_API_KEY
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^@storefront-ui/],
  }
}
