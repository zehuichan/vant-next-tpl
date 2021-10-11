<template>
  <svg :class="[classPrefix, 'iconfont']" :style="{ fontSize: addUnit(size) }" aria-hidden="true">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>

<script setup>
defineProps({
  name: String,
  classPrefix: String,
  size: [String, Number]
})

function addUnit(value) {
  return isNumeric(value) ? `${value}px` : String(value)
}

function isNumeric(val) {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}
</script>

<style>
.iconfont {
  width: 1em;
  height: 1em;
  min-width: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>