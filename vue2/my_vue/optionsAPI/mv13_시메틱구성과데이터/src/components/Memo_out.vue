<template>
  <div class="memo">
    <div>Memo 외부 데이터</div>
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, i) in data" :key="i">{{ d }}</li>
    </ul>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import axios from 'axios'
const data = reactive([])
axios.get('/v1/memos').then((res) => {
  console.log(res)
  const memo = res.data
  // console.log(memo)
  memo.forEach((v) => {
    data.push(v)
  })
})
const add = () => {
  data.push('추가될 메모 내용')
  // console.log(data)
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
