<template>
  <div id="employees-edit">
    <r-load ref="load"></r-load>

    <div class="grid grid--sb">
      <h2>Сотрудники</h2>
      <div class="grid__column grid__column--right">
        <r-button link="/employees" icon="chevron_left">Вернуться назад</r-button>
      </div>
    </div>

    <div class="grid">
      <div class="grid__column size-3of6">
        <r-card>
          <h5 style="padding: 1rem 1rem 0">Информация о сотруднике</h5>
          <hr>
          <div class="grid" style="padding: 1rem">
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
              <r-button @click.native="updateEmployee()" icon="check">Сохранить изменения</r-button>
              <r-button @click.native="deleteEmployee()" icon="delete">Удалить сотрудника</r-button>
            </div>

            <r-alert ref="alert"></r-alert>
          </div>
        </r-card>
      </div>

      <div class="grid__column size-3of6">
        <r-card>
          <h5 style="padding: 1rem 1rem 0">Список подразделений сотрудника</h5>
          <hr>
          <r-employee-units :data="units"></r-employee-units>
        </r-card>

        <r-card>
          <h5 style="padding: 1rem 1rem 0">Индивидуальный доступ к ключам</h5>
          <hr>
          <r-employee-keys :data="keys" @change="changeAccessType($event)" @remove="removeKeyAccess($event)">
            <r-button icon="add" @click.native="$refs.keyAccess.toggle()">Добавить</r-button>
          </r-employee-keys>
        </r-card>
      </div>
    </div>

    <r-modal ref="keyAccess" type="keys" title="ключа" @add="addKeyToKeyAccess($event)"></r-modal>
  </div>
</template>

<script src="./script.js"></script>
