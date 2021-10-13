<template>
  <van-cell-group>
    <van-cell title="Mode">
      <template #value>
        <mode-picker/>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script setup>
import ModePicker from '@/components/ModePicker'
</script>

<style lang="less">

</style>