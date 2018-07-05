<template>
  <div id="employee-keys">
    <div class="r-employee-keys__actions">
      <div class="r-employee-keys__left">
        <input class="r-employee-keys__search" type="text" v-model="search" @keyup.esc="clear()" placeholder="Введите слово или фразу для поиска">
      </div>
      <div class="r-employee-keys__right">
        <slot></slot>
      </div>
    </div>

    <div style="overflow-x: auto">
      <table class="r-employee-keys" v-if="data.length">
        <thead>
          <tr>
            <th>Номер</th>
            <th>Название</th>
            <th>Цвет</th>
            <th>Доступ</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr style="cursor: default" v-for="(key, index) in filtered" v-bind:key="index">
            <td>{{ key.id }}</td>
            <td>{{ key.name }}</td>
            <td><span class="r-color" :style="'background:' + key.color"></span></td>
            <td @click="$emit('change', key.id)" class="r-employee-keys__access" :class="key.access">{{ getAccess(key.access) }}</td>
            <td class="r-employee-keys__link" @click="$emit('remove', {index, id: key.id})" style="text-align: right"><i class="material-icons">delete</i></td>
          </tr>
        </tbody>
      </table>
      <r-empty title="правил доступа не найдено" v-else></r-empty>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
