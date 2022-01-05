<template>
  <div>
    <van-cell-group>
      <van-cell title="Mockjs" is-link to="/mockjs"/>
    </van-cell-group>
    <div v-for="i in 20" :key="i" class="box-card">
      <div class="text">placeholder</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less">
.box-card {
  padding: 16px;
}
</style>