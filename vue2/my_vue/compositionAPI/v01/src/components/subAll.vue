<template>
  <div>sub기능{{ stats.prp }} 공통사용</div>
  <button @click="fn">fn기본 {{ test }}</button><br />
  <button @click="fn(stats.prp)">fn({{ stats.prp }})펑션 {{ test }}</button>
  <div>{{ test }}</div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue' // defineEmits
const test = ref(0)
// const stats = defineProps(['prp']) // 배열에 담기네??
const stats = defineProps({ prp: Number }) // 객체로 초기화 typescript
const emit = defineEmits(['emt1', 'emt2', 'emt3'])

const fn = (e) => {
  if (e.target) {
    e.target.innerHTML = 'console에 이벤트를 출력하였습니다.' // e.target이 존재 할때만
    console.log(e.target)
  }
  if (e === 1) {
    test.value += 1
    emit('emt1', test.value)
  } else if (e === 2) {
    test.value += 2
    emit('emt2', test.value)
  } else if (e === 3) {
    test.value = (test.value || test.value + 1) * 2
    emit('emt3', test.value)
  } else if (e > 3) {
    test.value += e
  }
}
</script>
<style></style>
