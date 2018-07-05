<template>
  <div id="units-new">
    <div class="grid grid--sb">
      <h2>Подразделения</h2>

      <div class="grid__column grid__column--right">
        <r-button link="/units" icon="chevron_left">Вернуться назад</r-button>
      </div>
    </div>

    <r-card style="padding: 1rem">
      <h4>Добавления нового подразделения</h4>

      <div class="grid">
        <div class="grid__column size-6of6">
          <r-input-field label="Навзание подразделения" v-model="unit.name" id="unit-name" placeholder="Введите навзание нового подразделения"></r-input-field>
        </div>
        <div class="grid__column">
          <r-button @click.native="createUnit()" icon="check">Добавить новое подразделение</r-button>
        </div>
      </div>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
