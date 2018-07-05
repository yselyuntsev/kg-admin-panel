<template>
  <div id="units">
    <div class="grid grid--sb">
      <h2>Подразделения</h2>
    </div>

    <r-card>
      <r-units :data="unit" type="children">
        <r-button :link="newLink" icon="add">Добавить подразделение</r-button>
      </r-units>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
