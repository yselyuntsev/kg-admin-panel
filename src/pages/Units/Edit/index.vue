<template>
  <div id="units-new">
    <div class="grid grid--sb">
      <h2>Подразделения</h2>
      <div class="grid__column grid__column--right">
        <r-button @click.native="back()" icon="chevron_left">Вернуться назад</r-button>
      </div>
    </div>

    <r-card style="padding: 1rem">
      <h4>Изменение подразделения</h4>
      <div class="grid">
        <div class="grid__column size-6of6">
          <r-input-field label="Навзание подразделения" v-model="unit.unit.name" id="unit-name" placeholder="Введите навзание нового подразделения"></r-input-field>
        </div>
        <div class="grid__column">
          <r-button @click.native="updateUnit()" icon="check">Принять изменения</r-button>
          <r-button @click.native="deleteUnit()" icon="delete">Удалить подразделение</r-button>
        </div>
      </div>
    </r-card>

    <r-card half>
      <h5 style="padding: 1rem 1rem 0">Список дочерних подразделений</h5>
      <hr>
      <r-units :data="unit" type="children"></r-units>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
