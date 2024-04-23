// About.vue
<template>
  这是About页
</template>
<script setup>
import { getBanner } from '@/utils/api/banner'
// 使用api
// 定义一个变量接收
let bannerList = ref([])
onBeforeMount(() => {
  getBanner().then(res => {
    bannerList.value = res.data //  这里是接口返回值
    console.log(res)
  })
})
</script>
