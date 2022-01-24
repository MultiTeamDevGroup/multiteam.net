export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MultiTeam.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./static/global.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],
  firebase: {
    // options
    config: {
      apiKey: "AIzaSyDSOiEkWcX2LQTviXgpLmtY5oYn1FYa0O0",
      authDomain: "multiteam-c8300.firebaseapp.com",
      projectId: "multiteam-c8300",
      storageBucket: "multiteam-c8300.appspot.com",
      messagingSenderId: "289949024452",
      appId: "1:289949024452:web:b36ce76e7de30c37e84991",
      measurementId: "G-4VJQ6VWWKL"
    },
    services: {
      firestore: true,
      auth: {
        ssr: false, 
      },
      analytics: {
        collectionEnabled: process.env.NODE_ENV !== 'development'
      },
      performance: process.env.NODE_ENV !== 'development',
      /*
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: 'randomName',
            url: 'randomUrl'
          }
        ],
        fcmPublicVapidKey: 'BMDdhtw3TO9hMBBNiy87azPCdJyS9tDbgpog4DhoC0wIyeB_p3-tt8D-0A1JVH_-JHkJwxXpUgwWCtoW_VIsd3c' 
      },
      */
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
