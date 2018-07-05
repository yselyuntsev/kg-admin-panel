<template>
  <div id="app">
    <r-sidebar v-if="!login"></r-sidebar>

    <div class="main" :class="login">
      <r-content :class="login">
        <router-view :key="$route.fullPath"></router-view>
      </r-content>
    </div>
  </div>
</template>

<script>
import RSidebar from '@/components/Sidebar'
import RContent from '@/components/Content'

export default {
  name: 'App',

  components: {
    RSidebar,
    RContent
  },

  computed: {
    login () {
      return this.$route.path.match('login')
    }
  }
}
</script>

<style lang="less">
@import './assets/styles/normalize.css';
@import './assets/styles/base';
@import './assets/styles/grid';
@import './assets/styles/typography';
</style>
