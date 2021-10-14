<template>
  <van-cell-group>
    <van-cell title="模式">
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