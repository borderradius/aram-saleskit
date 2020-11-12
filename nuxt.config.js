require('dotenv').config()

module.exports = {
  mode: 'spa',
  srcDir: 'client',
  /*
   ** Headers of the page
   */
  head: {
    title: '아람 세일즈킷',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }]
  },
  env: {
    SERVER_TYPE: process.env.SERVER_TYPE
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  server: {
    host: '0.0.0.0',
    port: '20103'
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
    // purgeCSSInDev: false
  },
  /*
   ** Global CSS
   */
  css: [
    { src: '~assets/scss/index.scss', lang: 'scss' },
    { src: '~assets/css/swiper-bundle.css', lang: 'css' },
    { src: '~assets/css/apexcharts.css', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vee-validate.js', ssr: false },
    { src: '~/plugins/mixins.js', ssr: false },
    { src: '~/plugins/fontawesome.js', ssr: false },
    { src: '~/plugins/GlobalComponents.js', ssr: false },
    { src: '~/plugins/vue-js-modal', ssr: false },
    { src: '~/plugins/lodash', ssr: false },
    { src: '~/plugins/animate', ssr: false },
    { src: '~/plugins/apexcharts', ssr: false },
    // { src: '~/plugins/localStorage', ssr: false }
    { src: '~/plugins/axios', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-mq',
    '@nuxtjs/moment',
    '@nuxtjs/pwa'
  ],
  /**
   * * PWA 설정
   */
  // manifest: {
  //   name: '아람 세일즈킷',
  //   short_name: '아람세일즈킷',
  //   start_url: '/',
  //   display: 'standalone',
  //   background_color: '#000'
  // },
  // workbox: {
  //   offline: false,
  //   runtimeCaching: [
  //     {
  //       urlPattern: '/*',
  //       handler: 'networkFirst',
  //       method: 'GET'
  //     }
  //   ]
  // },
  moment: {
    locales: ['ko']
  },
  mq: {
    defaultBreakpoint: 'desktop',
    breakpoints: {
      mobile: 768,
      // tablet: 768,
      // desktop: 992,
      desktop: 1200
    }
  },
  router: {
    middleware: ['auth', 'router-info']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.SERVER_TYPE === 'dev'
        ? process.env.API_DEV
        : process.env.SERVER_TYPE === 'staging'
        ? process.env.API_QA
        : process.env.API_PROD
  },
  auth: {
    // scopeKey: 'roles',
    redirect: {
      login: '/user/login',
      logout: false,
      home: '/'
    },
    strategies: {
      local: {
        tokenType: 'Bearer',
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'result.orgmToken'
          },
          logout: false,
          user: false
          // user: {
          //   url: '/member/selMemInfo',
          //   method: 'get',
          //   propertyName: 'result'
          // }
        }
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    // transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on saves
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          },
          // {
          //   test: /\.(jpg)$/,
          //   loader: 'file-loader'
          // },
          {
            test: /\.jpeg$/, // jpeg의 모든 파일
            loader: 'file-loader', // 파일 로더를 적용한다.
            options: {
              // publicPath: './', // prefix를 아웃풋 경로로 지정
              name: '[name].[ext]?[hash]' // 파일명 형식
            }
          }
        )
      }
    }
  }
}
