<template>
  <div>
    <r-logo></r-logo>

    <div class="r-login">
      <h3>Авторизация в систему</h3>
      <form id="auth">
        <r-input-field id="username" v-model="username" label="Логин" placeholder="Введите ваш логин"></r-input-field>
        <r-input-field id="password" v-model="password" label="Пароль" placeholder="Введите ваш пароль" password></r-input-field>
        <r-button @click.native="auth()" type="full" >Войти</r-button>
      </form>
    </div>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
