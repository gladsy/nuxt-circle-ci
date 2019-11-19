<template>
  <section class="container">
    <div>
      <h3>
        <app-logo />
        <span>Nuxt.js のタグが付けられた投稿の一覧</span>
      </h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{ item.title }}</span>
            <small>
              <span>by </span>
              <nuxt-link :to="`/users/${item.user.id}`">
                {{ item.user.id }}
              </nuxt-link>
            </small>
          </h4>
          <div>{{ item.body.slice(0, 130) }}......</div>
          <p>
            <a :href="item.url">{{ item.url }}</a>
          </p>
        </li>
      </ul>
      <hr />
      <div class="footer">
        <small>
          <a href="https://github.com/gladsy/nuxt-circle-ci" target="_blank"
            >GitHub
          </a>
        </small>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    AppLogo,
  },
  async asyncData({ store }) {
    if (store.getters['items'].length) {
      return
    }
    await store.dispatch('fetchItems')
  },
  computed: {
    ...mapGetters(['items']),
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  padding: 16px;
}

h3 {
  border-bottom: solid 1px #e5e5e5;
  margin: 16px 0;
  padding: 8px 0;
}

li + li {
  margin: 16px 0;
}

p {
  margin: 8px 0;
}
</style>

<style scoped>
.VueToNuxtLogo {
  height: 100px;
}

hr {
  border-top: solid 1px #e5e5e5;
}

.footer {
  text-align: center;
}
</style>
