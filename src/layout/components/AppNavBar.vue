<template>
  <van-nav-bar
    :class="['v-nav-bar', classname]"
    v-bind="$attrs"
    @click-left="onClickLeft"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const classname = computed(() => route?.meta?.navbar?.classname)

const onClickLeft = () => {
  router.back()
}
</script>
