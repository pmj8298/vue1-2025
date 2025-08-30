<template>
  <div class="content">
    <div class="list" v-if="mode === 'list'">
      <ul>
        <li v-for="memo in memos" :key="memo" @click="open(memo.id)">
          {{ memo.content }}
        </li>
      </ul>
      <button class="add-btn" @click=";(mode = 'write'), (inData = '')">
        +
      </button>
    </div>
    <!-- <div class="write" v-if="mode!=='list'"> -->
    <div class="write" v-else>
      <textarea v-model="inData" autofocus></textarea>
      <div>
        <button v-if="mode === 'write'" class="save-btn" @click="save">
          저장
        </button>
        <button v-if="mode === 'edit'" class="del-btn" @click="del">
          삭제
        </button>
        <button class="x-btn" @click=";(mode = 'list'), (inData = '')">
          취소
        </button>
      </div>
      <div>
        <button class="edit-btn" v-if="mode == 'edit'" @click="edit">
          수정
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const mode = ref('list')
const inData = ref('비었음')
const memos = reactive(JSON.parse(localStorage.getItem('memos')) ?? [])
let memo = reactive({})
const save = () => {
  memos.push({
    id: (memos[memos.length - 1]?.id ?? 0) + 1,
    content: inData.value,
    regData: new Date()
  })
  console.log(memos[memos.length - 1]?.id ?? 0)
  localStorage.setItem('memos', JSON.stringify(memos))
  mode.value = 'list' // value 잘 이해할것
}
const open = (m) => {
  for (const v of memos) {
    if (m === v.id) memo = v
  }
  inData.value = memo.content
  mode.value = 'edit'
}
const edit = () => {
  for (const v of memos) {
    if (memo.id === v.id) {
      v.content = inData.value
      v.regData = new Date()
    }
  }
  localStorage.setItem('memos', JSON.stringify(memos))
  mode.value = 'list' // value 잘 이해할것
}
const del = () => {
  memos.forEach((v, i) => {
    if (memo.id === v.id) {
      memos.splice(i, 1)
    }
  })
  localStorage.setItem('memos', JSON.stringify(memos))
  mode.value = 'list'
}
// return { mode, inData, memos, save, open, edit, del } // 필요없음
</script>
<style scoped>
textarea {
  width: 100%;
  height: 330px;
  font-size: 2.5em;
  padding: 10px;
  box-sizing: border-box;
}

ul {
  /* list-style: none; */
  margin: 0;
  padding: 0;
}

ul li {
  /* font-size: 16px; */
  padding: 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.add-btn {
  /* display: inline-block; */
  /* outline: 0; */
  padding: 20px 25px;
  font-size: 30px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: #459ad6;
  color: #fff;
  margin: 10px;
  border: none;
  border-radius: 50%;
}

.save-btn,
.del-btn,
.edit-btn,
.x-btn {
  color: #fff;
  width: 50%;
  height: 50px;
  font-size: 1.3em;
}

.save-btn {
  background-color: #459ad6;
}

.x-btn {
  color: #e48686;
  background-color: #d9d9d9;
}

.del-btn {
  background-color: #e48686;
}

.edit-btn {
  background-color: #133b5b;
  margin-top: 5px;
  width: 100%;
}
</style>
