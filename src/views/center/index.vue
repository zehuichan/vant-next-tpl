<template>
  <div class="center">
    <div class="user-info">
      <div class="avatar">
        <van-image :src="userStore.avatar" width="100%" height="100%"/>
      </div>
      <div class="user">
        <div class="name">{{ userStore.username }}</div>
        <div class="text">{{ userStore.github }}</div>
      </div>
    </div>
    <van-cell-group title="info" inset>
      <van-field v-model="value" label="昵称" placeholder="昵称"/>
      <van-field v-model="value" label="手机" placeholder="手机"/>
    </van-cell-group>
    <van-cell-group title="setting" inset>
      <van-cell title="模式">
        <template #value>
          <mode-picker/>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group title="about" inset>
      <van-field :value="appInfo.name" label="name" readonly/>
      <van-field :value="appInfo.version" label="version" readonly/>
      <van-field :value="appInfo.lastBuildTime" label="lastBuildTime" readonly/>
    </van-cell-group>
  </div>
</template>

<script setup>
// vue
import { ref } from 'vue'
// store
import { useUserStore } from '@/store/modules/user'
// components
import ModePicker from '@/components/ModePicker'

const userStore = useUserStore()
const appInfo = __APP_INFO__
const value = ref('')
</script>

<style lang="less">
.center {

  .user-info {
    display: flex;
    background-color: #fff;
    padding: 16px;
  }

  .avatar {
    width: 54px;
    height: 54px;

    img {
      border-radius: 4px;
    }
  }

  .user {
    margin-left: 10px;

    .name {
      font-size: @font16;
      font-weight: @fw-600;
    }

    .text {
      color: @text-l;
    }
  }
}
</style>