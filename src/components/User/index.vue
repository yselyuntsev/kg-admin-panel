<template>
  <div class="r-user">
    <p class="r-user__description">Вы вошли как: {{ username }}</p>
    <p class="r-user__name" v-if="username !== 'configuration'">Администратор</p>
    <p class="r-user__name" v-else>Пользователь</p>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
