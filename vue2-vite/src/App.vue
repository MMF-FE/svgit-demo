<script setup lang="ts">
import IconArrow from '@icon/arrow.svg?component'
console.log(IconArrow)
function test() {
  console.log('test')
}
</script>

<template>
  <div>
    <icon data="@icon/vue.svg"></icon>
    <IconArrow width="100" height="100" color="red" @click="test" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
