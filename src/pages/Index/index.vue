<template>
  <div id="index">
    <h1>Главная страница</h1>

    <div class="grid">
      <div class="grid__column size-6of6">
        <h5>Настройка конфигурации системы</h5>
        <p>Для конфигурирования системы необходимо перейти в раздел <router-link to="/configuration">"Настройки"</router-link>, после чего заполнить необходимые поля и подтвердить изменения.</p>
        <p class="r-index__description">
          Описание настроек:
          <ul class="r-index__list">
            <li><b>Адрес сервера</b> | Путь до локального сервера СКУД "Выдача ключей"</li>
            <li><b>Путь до API</b> | Путь до внешнего API СКУД "Выдача ключей"</li>
          </ul>
        </p>
      </div>

      <div class="grid__column size-6of6">
        <h5 style="r-index__subtitle">Выберите что хотите сделать</h5>
      </div>
      <div class="grid__column size-2of6">
        <r-card>
          <h6 style="padding: 1rem 1rem 0">Подраделения</h6>
          <hr>
          <div style="padding: 1rem">
            <p>В разделе "Подразделения" вы можете создавать, удалять, изменять подразделения, в виде вложенного дерева. А также привязывать ключи и сотрудников к подраделению.</p>
            <r-button type="full" icon="arrow_forward">Перейти в "Подразделения"</r-button>
          </div>
        </r-card>
      </div>

      <div class="grid__column size-2of6">
        <r-card>
          <h6 style="padding: 1rem 1rem 0">Сотрудники</h6>
          <hr>
          <div style="padding: 1rem">
            <p>В разделе "Сотрудники" вы можете создавать, удалять, изменять сотрудников, добавлять или удалять индивидуальные параметры доступа к ключам.</p>
            <r-button type="full" icon="arrow_forward">Перейти в "Сотрудники"</r-button>
          </div>
        </r-card>
      </div>
      <div class="grid__column size-2of6">
        <r-card>
          <h6 style="padding: 1rem 1rem 0">Ключи</h6>
          <hr>
          <div style="padding: 1rem">
            <p>В разделе "Ключи" вы можете создавать, удалять, изменять ключи задавая им индивидуальные описания и цветовую маркировку.</p>
            <r-button type="full" icon="arrow_forward">Перейти в "Подразделения"</r-button>
          </div>
        </r-card>
      </div>

      <div class="grid__column size-6of6">
        <p class="r-index__about">СКУД "Выдача ключей"</p>
        <p class="r-index__about">Разработано специально для МИП БГПУ "Интеллектуальные технологии"</p>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
