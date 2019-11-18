<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">
        nuxt-circle-ci
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/gladsy/nuxt-circle-ci"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
      </div>

      <div>
        <p>store: {{ this.$store.state.hogeFormStore }}</p>
        <p>increment: {{ this.$store.state.increment.count }}</p>
        <button
          @click="$store.dispatch('writeHoge', 'templateから書き換えます')"
        >
          store-01
        </button>
        <button @click="increment">
          store-02
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapMutations, mapActions } from 'vuex'

export default {
  components: {
    AppLogo,
  },
  methods: {
    ...mapMutations({
      _writeHoge: 'setHogeFormState',
    }),
    ...mapActions({
      count: 'increment/writeHoge',
    }),
    increment() {
      this._writeHoge('incrementも書き換え')
      this.count()
    },
  },
}
</script>

<style>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.title {
  color: #35495e;
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */

  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
