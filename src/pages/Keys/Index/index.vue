<template>
  <div id="keys">
    <h2>Ключи</h2>

    <r-card>
      <r-keys :data="keys" @send="openKey($event)">
        <r-button link="/keys/new" icon="add">Добавить ключ</r-button>
      </r-keys>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
