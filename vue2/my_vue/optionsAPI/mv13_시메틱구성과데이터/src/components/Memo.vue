<template>
  <div class="memo">
    <div>Memo 자체 데이터</div>
    <div class="act">
      <input
        class="data-input"
        type="text"
        v-model="inData"
        @keyup.enter="add()"
      /><button class="btn btn-primary" @click="add()">추가</button>
    </div>
    <h3>{{ str }}</h3>
    <ul>
      <li v-for="(d, i) in data" :key="i">{{ d }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
// import { reactive } from 'vue'
const str = ref('고치기전')
const data = reactive(['기본공지 1 내용', '기본메모 2 내용', '고정메모 3 내용'])
const inData = ref('')
const add = () => {
  str.value = '고쳤다'
  data.push(inData.value)
  inData.value = ''
}
</script>
<style scoped>
.memo ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  padding: 15px;
  margin: 5px;
  border: 1px solid #ddd;
}
.data-input {
  margin: 5px;
  width: 85%;
  height: 30px;
  border: 1px solid #ddd;
}
.btn {
  margin: 5px;
  height: 29px;
  padding: 2px;
}
</style>
