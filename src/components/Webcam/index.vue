<template>
  <div class="r-webcam">
    <div class="grid">
      <div class="r-webcam__camera" id="webcam"></div>
      <img :src="photo" class="r-webcam__result">
    </div>

    <p class="r-webcam__description">Результат фотографирования будет показан правее</p>

    <r-button @click.native="capture()" icon="add_a_photo" type="full">Сфотографировать</r-button>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
