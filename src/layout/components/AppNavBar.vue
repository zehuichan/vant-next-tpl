<template>
  <van-nav-bar
    :class="['v-nav-bar', classname]"
    v-bind="attrs"
    :fixed="false"
    @click-left="onClickLeft"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// settings
import defaultSettings from '@/settings'

const router = useRouter()
const route = useRoute()

const attrs = computed(() => Object.assign(
  {},
  { ...defaultSettings.navbar },
  route.meta.navbar?.showTitle && { title: route.meta.title },
  !route.meta.navbar?.showTitle && { leftText: route.meta.title },
  { ...route.meta.navbar }
))

const classname = computed(() => route.meta.navbar?.classname)

const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less">
.v-nav-bar {

}
</style>