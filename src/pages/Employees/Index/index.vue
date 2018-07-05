<template>
  <div id="employees">
    <h2>Сотрудники</h2>

    <r-card>
      <r-employees :data="employees" @send="openEmployee($event)">
        <r-button link="/employees/new" icon="add">Добавить сотрудника</r-button>
      </r-employees>
    </r-card>

    <r-alert ref="alert"></r-alert>
  </div>
</template>

<script src="./script.js"></script>
