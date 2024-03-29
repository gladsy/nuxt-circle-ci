var baseRoute = (env) => (env === 'GH_PAGES' ? '/nuxt-circle-ci/' : '/')

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-circle-ci',
    titleTemplate: '%s | Nuxt.js tag items viewer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: baseRoute(process.env.DEPLOY_ENV) + '/favicon.ico',
      },
    ],
  },
  router: {
    base: baseRoute(process.env.DEPLOY_ENV),
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  // add axios module
  modules: ['@nuxtjs/axios'],
  axios: {},
  plugins: ['~/plugins/axios.js'],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev }) {
      if (isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true },
        })
      }
    },
  },
}
