<template>
  <div class="r-input r-input--relative">
    <label class="r-label"  v-if="label" :for="id">{{ label }}</label>
    <li @click="toggle()" class="r-select" v-if="currentColor">
      <span class="r-color" :style="'background:' + currentColor"></span>
      {{ currentColor }}
    </li>

    <li @click="toggle()" class="r-select" v-if="!currentColor">
      {{ placeholderText }}
    </li>

    <ul class="r-select__menu" v-if="showMenu" v-click-outside="toggle">
      <li v-for="(color, index) in colors" :key="index">
        <a @click="update(color)">
          <span class="r-color" :style="'background:' + color"></span>
          {{ color }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" src="./style.less"></style>
