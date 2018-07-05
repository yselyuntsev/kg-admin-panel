<template>
  <div id="employees-table">
    <div class="r-employee__actions">
      <div class="r-employee__left">
        <input class="r-employee__search" type="text" v-model="search" @keyup.esc="clear()" placeholder="Введите слово или фразу для поиска">
      </div>
      <div class="r-employee__right">
        <slot></slot>
      </div>
    </div>

    <div style="overflow-x: auto">
      <table class="r-employee" v-if="data.length">
        <thead>
          <tr>
            <th>#</th>
            <th>Фото</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Карточка</th>
          </tr>
        </thead>

        <tbody>
          <tr @click="sendData(employee)" v-for="(employee, index) in filtered" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td><img class="r-employee__photo" :src="employee.encoded_photo"></td>
            <td>{{ employee.last_name }}</td>
            <td>{{ employee.first_name }}</td>
            <td>{{ employee.patronym }}</td>
            <td>{{ employee.card }}</td>
          </tr>
        </tbody>
      </table>
      <r-empty title="сотрудников не найдено" v-else></r-empty>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
