<template>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
  </van-submit-bar>
</template>

<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'

const checked = ref(false)
const onSubmit = () => Toast('点击按钮')
</script>

<style lang="less">
.van-submit-bar {
  bottom: 50px;
}
</style>