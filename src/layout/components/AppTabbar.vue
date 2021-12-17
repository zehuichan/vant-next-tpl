<template>
  <van-tabbar route placeholder>
    <van-tabbar-item replace to="/home">
      <span>商城</span>
      <template #icon="props">
        <v-svg-icon name="icon-feed-logo"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/circle">
      <span>逛逛</span>
      <template #icon="props">
        <v-svg-icon name="icon-dongtai"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/message">
      <span>消息</span>
      <template #icon="props">
        <v-svg-icon name="icon-comments"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/cart">
      <span>购物车</span>
      <template #icon="props">
        <v-svg-icon name="icon-cart-Empty"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/center">
      <span>我的</span>
      <template #icon="props">
        <v-svg-icon name="icon-bussiness-man"/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import VSvgIcon from '@/components/VSvgIcon'
export default {
  name: 'AppTabbar'
}
</script>