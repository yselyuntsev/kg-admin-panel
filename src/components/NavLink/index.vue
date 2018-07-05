<template>
  <router-link
    v-if="path"
    :to="path"
    class="r-nav__link"
    active-class="r-nav__link--active"
    exact-active-class="r-nav__link--active"
    :exact="exact"
  >
    <slot></slot>
  </router-link>

  <a v-else class="r-nav__link"><slot></slot></a>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
