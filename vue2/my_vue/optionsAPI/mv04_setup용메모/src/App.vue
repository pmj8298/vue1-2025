<template>
  <div class="head" @click="stat = stat == 'memo' ? 'craw' : 'memo'">
    My Memo
  </div>
  <component :is="stat == 'memo' ? Memo : Crawling"></component>
</template>
<script setup>
import { ref } from 'vue'
import Memo from './components/Memo.vue'
import Crawling from './components/Crawling.vue'
const stat = ref('memo')
</script>
<style scoped>
.head {
  font-size: 1.6rem;
  padding: 20px;
  background-color: #7fc4e6;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2px;
  /* border-bottom: 1px solid #ddd; */
}
</style>
