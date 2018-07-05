<template>
  <div id="units-table">
    <div class="r-units__actions">
      <div class="r-units__left">
        <input class="r-units__search" type="text" v-model="search" @keyup.esc="clear()" placeholder="Введите слово или фразу для поиска">
      </div>
      <div class="r-units__right">
        <slot></slot>
      </div>
    </div>

    <div style="overflow-x: auto">
      <table class="r-units" v-if="data[type].length">
        <thead v-if="type === 'children'">
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Родительское подразделение</th>
            <th style="text-align: right">Действия</th>
          </tr>
        </thead>

        <thead v-if="type === 'keys'">
          <tr>
            <th>Номер</th>
            <th>Название</th>
            <th>Цвет</th>
            <th></th>
          </tr>
        </thead>

        <thead v-if="type === 'employees'">
          <tr>
            <th>#</th>
            <th>Фото</th>
            <th>Персональные данные</th>
            <th></th>
          </tr>
        </thead>

        <tbody v-if="type === 'children'">
          <tr style="cursor: default" v-for="(unit, index) in filtered" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td class="r-units__link" @click="openUnit(unit.id)">{{ unit.name }}</td>
            <td v-if="!unit.parent_id">Нет родительского подразделения</td>
            <td v-else>{{ data.unit.name }}</td>
            <td class="r-units__link" @click="editUnit(unit.id)" style="text-align: right">Изменить</td>
          </tr>
        </tbody>

        <tbody v-if="type === 'keys'">
          <tr style="cursor: default" v-for="(key, index) in filtered" v-bind:key="index">
            <td>{{ key.id }}</td>
            <td>{{ key.name }}</td>
            <td><span class="r-color" :style="'background:' + key.color"></span></td>
            <td class="r-units__link" @click="$emit('remove', {index, id: key.id})" style="text-align: right"><i class="material-icons">delete</i></td>
          </tr>
        </tbody>

        <tbody v-if="type === 'employees'">
          <tr style="cursor: default" v-for="(employee, index) in filtered" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td><img class="r-units__photo" :src="employee.encoded_photo"></td>
            <td>{{ `${employee.last_name} ${employee.first_name} ${employee.patronym}` }}</td>
            <td class="r-units__link" @click="$emit('remove', {index, id: employee.id})" style="text-align: right"><i class="material-icons">delete</i></td>
          </tr>
        </tbody>
      </table>
      <r-empty title="данные не найдены" v-else></r-empty>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
