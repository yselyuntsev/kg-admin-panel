<template>
  <div id="employees-new">
    <div class="grid grid--sb">
      <h2>Сотрудники</h2>
      <div class="grid__column grid__column--right">
        <r-button link="/employees" icon="chevron_left">Вернуться назад</r-button>
      </div>
    </div>

    <r-card style="padding: 1rem">
      <h4>Добавление нового сотрудника</h4>

      <div class="grid">
        <div class="grid__column size-6of6">
          <r-webcam v-model="employee.encoded_photo"></r-webcam>
        </div>

        <div class="grid__column size-3of6">
          <r-input-field v-model="employee.last_name" label="Фамилия" id="employee-lastname" placeholder="Введите фамилию сотрудника"></r-input-field>
        </div>
        <div class="grid__column size-3of6">
          <r-input-field v-model="employee.first_name" label="Имя" id="employee-name" placeholder="Введите имя сотрудника"></r-input-field>
        </div>
        <div class="grid__column size-3of6">
          <r-input-field v-model="employee.patronym" label="Отчество" id="employee-patronymic" placeholder="Введите отчество сотрудника"></r-input-field>
        </div>
        <div class="grid__column size-3of6">
          <r-input-field v-model="employee.card" label="ID карточки" id="employee-card" placeholder="Введите номер идентификационной карточки сотрудника"></r-input-field>
        </div>

        <div class="grid__column">
          <r-button @click.native="createEmployee()" icon="check">Добавить сотрудника</r-button>
        </div>
      </div>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
