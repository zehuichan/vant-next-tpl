<template>
  <div class="mockjs">
    <van-cell-group>
      <van-cell title="mock 400" is-link @click="fetchData('mock400')"/>
      <van-cell title="mock 401" is-link @click="fetchData('mock401')"/>
      <van-cell title="mock 404" is-link @click="fetchData('mock404')"/>
      <van-cell title="mock 500" is-link @click="fetchData('mock500')"/>
    </van-cell-group>
    <v-tool-bar>
      <van-badge :content="logs.length">
        <van-button size="small" type="default">
          <v-svg-icon slot="icon" name="icon-bug"/>
        </van-button>
      </van-badge>
    </v-tool-bar>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
// api
import { mockData } from '@/api/test'
// store
import { useErrorLogStore } from '@/store/modules/errorLog'

const errorLogStore = useErrorLogStore()
const { logs } = storeToRefs(errorLogStore)

const fetchData = async (url) => {
  await mockData(url)
}
</script>

<style lang="less">

</style>