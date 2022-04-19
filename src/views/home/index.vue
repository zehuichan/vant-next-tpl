<template>
  <van-cell-group>
    <van-cell title="scanQRCode" is-link @click="scanQRCode"/>
    <van-cell title="previewImage" is-link @click="previewImage"/>
  </van-cell-group>
  {{ ready }}
</template>

<script setup>
import { useWeixin } from '@/hooks'

const [ready, wx] = useWeixin()

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
</script>

<style lang="less">

</style>