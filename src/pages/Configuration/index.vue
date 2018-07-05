<template>
  <div id="configuration">
    <h2>Конфигурация</h2>

    <r-card style="padding: 1rem">
      <h4>Настройка конфигурации</h4>
      <div class="grid">
        <div class="grid__column size-3of6">
          <r-input-field id="origin" label="Адрес сервера" v-model="configuration.origin" placeholder="Введите адрес сервера"></r-input-field>
        </div>

        <div class="grid__column size-3of6">
          <r-input-field id="api-url" label="Путь до API" v-model="configuration.apiUrl" placeholder="Введите путь до API на сервере"></r-input-field>
        </div>

        <div class="grid__column">
          <r-button @click.native="saveConfiguration()" icon="check">Сохранить конфигурацию</r-button>
        </div>
      </div>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
