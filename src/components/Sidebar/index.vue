<template>
  <aside class="r-sidebar">

    <r-logo></r-logo>

    <r-nav>
      <r-nav-label>Основное</r-nav-label>
      <r-nav-link path="/" exact>Главная</r-nav-link>
      <r-nav-link path="/units">Подразделения</r-nav-link>
      <r-nav-link path="/employees">Сотрудники</r-nav-link>
      <r-nav-link path="/keys">Ключи</r-nav-link>

      <r-nav-label>Настройки</r-nav-label>
      <r-nav-link path="/configuration">Настройки</r-nav-link>
      <r-nav-link @click.native="logout()" v-if="user">Выход</r-nav-link>
      <r-nav-link path="/login" v-else>Вход</r-nav-link>
    </r-nav>

    <r-user></r-user>

  </aside>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
