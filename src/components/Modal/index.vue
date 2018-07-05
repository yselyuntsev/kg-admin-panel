<template>
  <div class="r-modal" v-if="show">
    <div class="splash" @click="toggle()"></div>
    <div class="r-modal__body">
      <span class="r-modal__close" @click="toggle()"></span>
      <h3 style="padding: 1rem 1rem 0;">Добавление {{ title }} в подразделение</h3>
      <hr class="r-modal__hr">

      <r-card style="overflow-y: auto">
        <r-keys v-if="type === 'keys'" :data="keys" @send="add($event)"></r-keys>
        <r-employees v-if="type === 'employees'" :data="employees" @send="add($event)"></r-employees>
      </r-card>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
