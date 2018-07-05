<template>
  <div id="keys-new">
    <div class="grid grid--sb">
      <h2>Ключи</h2>
      <div class="grid__column grid__column--right">
        <r-button link="/keys" icon="chevron_left">Вернуться назад</r-button>
      </div>
    </div>

    <r-card style="padding: 1rem">
      <h4>Редактирование ключа #{{$route.params.id}}</h4>

      <div class="grid">
        <div class="grid__column size-3of6">
          <r-input-field label="# ключа" id="keys-id" v-model="key.id" placeholder="Введите номер ключа" disabled/>
        </div>
        <div class="grid__column size-3of6">
          <r-input-field label="Навзание ключа" id="keys-name" v-model="key.name" placeholder="Введите навзание ключа" />
        </div>
        <div class="grid__column size-3of6">
          <r-input-field label="Описание ключа" id="keys-extra" v-model="key.extra" placeholder="Введите описание ключа" />
        </div>
        <div class="grid__column size-3of6">
          <r-color label="Цвет ключа" v-model="key.color" :selected="key.color" placeholder="Введите цвет ключа"></r-color>
        </div>

        <div class="grid__column size-6of6">
          <r-button @click.native="updateKey()" icon="check">Сохранить изменения</r-button>
          <r-button @click.native="deleteKey()" icon="delete">Удалить ключ</r-button>
        </div>
      </div>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
