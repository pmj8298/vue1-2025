<template>
  <div>sub기능{{ props.subNum }}</div>
  <button @click=";[(test += 2), fn()]">버튼동작 {{ test }}</button>
  <div>{{ test }}</div>
</template>
<script setup>
import { ref, onMounted, computed, defineProps } from 'vue'
const props = defineProps(['title', 'subNum'])
console.log(props.title)

const test = ref(0)
const fn = () => console.log(`네 일단 fn2 잘됨 ${test.value} 값임.`)
onMounted(() => {
  console.log('sub2 로드완료. 시작입니다.')
})
computed(fn)
</script>
<style></style>
