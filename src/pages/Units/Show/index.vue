<template>
  <div id="units">
    <div class="grid grid--sb">
      <div class="grid__column grid__column--left">
        <h2>Подразделения</h2>
        <h6>| {{ unit.unit.name }}</h6>
      </div>
      <div class="grid__column grid__column--right">
        <r-button @click.native="back()" icon="chevron_left">Вернуться назад</r-button>
      </div>
    </div>

    <div class="grid grid--sb">
      <div class="grid__column size-6of6">
        <r-card half>
          <h5 style="padding: 1rem 1rem 0">Список дочерних подразделений</h5>
          <hr>
          <r-units :data="unit" type="children">
            <r-button :link="newLink" icon="add">Добавить подразделение</r-button>
          </r-units>
        </r-card>
      </div>

      <div class="grid__column size-3of6">
        <r-card half>
          <h6 style="padding: 1rem 1rem 0">Список ключей</h6>
          <hr>
          <r-units :data="unit" type="keys" @remove="removeKeyFromUnit($event)">
            <r-button @click.native="$refs.unitKeys.toggle()" icon="add">Добавить</r-button>
          </r-units>
        </r-card>
      </div>

      <div class="grid__column size-3of6">
        <r-card half>
          <h6 style="padding: 1rem 1rem 0">Список сотрудников</h6>
          <hr>
          <r-units :data="unit" type="employees" @remove="removeEmployeeFromUnit($event)">
            <r-button @click.native="$refs.unitEmployees.toggle()" icon="add">Добавить</r-button>
          </r-units>
        </r-card>
      </div>

      <r-modal ref="unitKeys" @add="addKeyToUnit($event)" title="ключа" type="keys"></r-modal>
      <r-modal ref="unitEmployees" @add="addEmployeeToUnit($event)" title="сотрудника" type="employees"></r-modal>
    </div>

    <r-404 ref="e404"></r-404>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
