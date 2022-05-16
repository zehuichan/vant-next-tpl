<template>
  <van-cell-group title="jweixin-1.6.0">
    <van-cell title="scanQRCode" :value="'' + ready" is-link @click="scanQRCode" />
    <van-cell title="previewImage" :value="'' + ready" is-link @click="previewImage" />
  </van-cell-group>
  <van-cell-group title="jweixin-auth">
    <van-cell title="auth" :label="code" is-link @click="auth" />
  </van-cell-group>
  <van-cell-group title="hooks">
    <van-field label="name" v-model="state.name" placeholder="name" />
    <van-field label="color" v-model="state.color" placeholder="color" />
    <van-field label="size" v-model="state.size" placeholder="size" />
  </van-cell-group>
</template>

<script setup>
import { useAuth, useWeixin, useStorage } from '@/hooks'

const [ready, wx] = useWeixin()
const [code, redirectTo] = useAuth()

const scanQRCode = () => {
  wx.value.scanQRCode({
    needResult: 1,
    scanType: ['qrCode', 'barCode'],
    success: (res) => {
      alert(res.resultStr)
    }
  })
}

const previewImage = () => {
  wx.value.previewImage({
    current: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    urls: [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg'
    ]
  })
}

const auth = () => redirectTo()

const state = useStorage('form', {
  name: 'Banana',
  color: 'Yellow',
  size: 'Medium'
})
</script>

<style lang="less">

</style>