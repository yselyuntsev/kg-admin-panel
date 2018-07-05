<template>
  <div class="r-employee-units" v-if="data.length">
    <span @click="openUnit(unit.id)" v-for="(unit, index) in data" :key="index" class="r-employee-units__unit">
      {{ unit.title }}
    </span>
  </div>
  <r-empty title="подразделений сотрудника не найдено" v-else></r-empty>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
