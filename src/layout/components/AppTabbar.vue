<template>
  <van-tabbar class="v-tabbar" v-bind="$attrs" route>
    <van-tabbar-item replace to="/home">
      <span>商城</span>
      <template #icon>
        <v-svg-icon name="icon-feed-logo" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/circle">
      <span>逛逛</span>
      <template #icon>
        <v-svg-icon name="icon-dongtai" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/message">
      <span>消息</span>
      <template #icon>
        <v-svg-icon name="icon-comments" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/cart">
      <span>购物车</span>
      <template #icon>
        <v-svg-icon name="icon-cart-Empty" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/center">
      <span>我的</span>
      <template #icon>
        <v-svg-icon name="icon-bussiness-man" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup></script>
