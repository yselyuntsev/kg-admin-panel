<template>
  <div class="r-404" v-if="show">
    <img class="r-404__image" src="../../assets/images/error.svg">
    <h2>То, что вы искали уже не существует.</h2>
    <h5>Извините.</h5>
    <r-button @click.native="back()" icon="chevron_left">Вернуться назад</r-button>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
