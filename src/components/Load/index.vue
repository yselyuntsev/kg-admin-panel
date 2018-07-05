<template>
  <transition name="load">
    <div class="r-load" v-if="show">
      <div class="r-load__loader">
      </div>
      <h5>Загрузка...</h5>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
