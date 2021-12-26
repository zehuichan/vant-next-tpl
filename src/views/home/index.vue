<template>
  <demo-block title="基础用法">
    <van-cell-group>
      <van-cell title="单元格" value="内容"/>
      <van-cell title="单元格" value="内容" label="描述信息"/>
    </van-cell-group>
  </demo-block>
  <demo-block title="卡片风格">
    <van-cell-group inset>
      <van-cell title="单元格" value="内容"/>
      <van-cell title="单元格" value="内容" label="描述信息"/>
    </van-cell-group>
  </demo-block>
  <demo-block title="只设置 value">
    <van-cell value="内容" clickable/>
  </demo-block>
</template>

<script setup>
let a = null
if (a.length > 1) {
  // ...
}
</script>

<style lang="less">

</style>