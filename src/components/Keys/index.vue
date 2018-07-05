<template>
  <div id="keys-table">
    <div class="r-keys__actions">
      <div class="r-keys__left">
        <input class="r-keys__search" type="text" v-model="search" @keyup.esc="clear()" placeholder="Введите слово или фразу для поиска">
      </div>
      <div class="r-keys__right">
        <slot></slot>
      </div>
    </div>

    <div style="overflow-x: auto">
      <table class="r-keys" v-if="data.length">
        <thead>
          <tr>
            <th>#</th>
            <th>Номер</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Цвет</th>
          </tr>
        </thead>

        <tbody>
          <tr
            @click="sendData({id, name, extra, color})"
            v-for="({id, name, extra, color}, index) in filtered"
            v-bind:key="index"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ extra }}</td>
            <td><span class="r-color" :style="'background:' + color"></span></td>
          </tr>
        </tbody>
      </table>
      <r-empty title="ключей не найдено" v-else></r-empty>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
