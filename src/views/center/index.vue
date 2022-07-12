<template>
  <div class="center">
    <div class="user-info">
      <div>ABOUT</div>
      <div class="user-info__bottom">
        <div class="user">
          <div class="name">{{ userinfo.username }}</div>
          <div class="text">{{ userinfo.github }}</div>
        </div>
        <div class="avatar">
          <van-image :src="userinfo.avatar" width="100%" height="100%" />
        </div>
      </div>
    </div>
    <van-cell-group title="info" inset>
      <van-field v-model="userinfo.realname" label="姓名" readonly />
      <van-field v-model="userinfo.cellphone" label="手机" readonly />
    </van-cell-group>
    <van-cell-group title="setting" inset>
      <van-cell title="模式">
        <template #value>
          <mode-picker />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group title="about" inset>
      <van-field v-model="appInfo.name" label="name" readonly />
      <van-field v-model="appInfo.version" label="version" readonly />
      <van-field
        v-model="appInfo.lastBuildTime"
        label="lastBuildTime"
        readonly
      />
    </van-cell-group>
  </div>
</template>

<script setup>
// vue
import { ref } from 'vue'
// store
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'

const userStore = useUserStore()
const { userinfo } = storeToRefs(userStore)
const appInfo = __APP_INFO__
const value = ref('')
</script>

<style lang="less">
.center {
  .user-info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    height: 268px;
    background: url('./brand.jpg') 0 0 no-repeat;
    background-size: 100% 268px;
    color: @white;
  }

  .user-info__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    width: 54px;
    height: 54px;
    box-shadow: @shadow-1-down;

    img {
      border-radius: 4px;
    }
  }

  .user {
    .name {
      font-size: @font18;
      font-weight: @fw-600;
    }
  }
}
</style>
