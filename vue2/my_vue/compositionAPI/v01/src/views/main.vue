<template>
  <h1>Ex1. v-for로 component 순회(with props,emit)</h1>
  <div id="coms">
    <div v-for="(n, i) in subs" :key="i">
      <component :is="subs[i]" title="이거슨 하달된 명령!" :subNum="i + 1" />
    </div>
    <!-- <sub1 title="이거슨 하달된 명령!"></sub1> -->
    <!-- <div><sub2></sub2></div><div><sub3></sub3></div> -->
    <div class="subAll" v-for="n in 3" :key="n">
      <subAll :prp="n" @emt1="emtfn1" @emt2="emtfn2" @emt3="emtfn3"></subAll>
    </div>
    <div id="emit" v-for="(v, i) in emitData" :key="v">
      받은 데이터:{{ emitData[i] }}
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import sub1 from '@/components/sub1.vue'
import sub2 from '@/components/sub2.vue'
import sub3 from '@/components/sub3.vue'
import subAll from '@/components/subAll.vue'
const subs = [sub1, sub2, sub3]
const emitData = reactive([])
const emtfn1 = (text) => {
  console.log(emitData)
  emitData[0] = text
}
const emtfn2 = (text) => {
  emitData[1] = text
}
const emtfn3 = (text) => {
  emitData[2] = text
}

// 연습중..  https://vuejs.org/guide/essentials/component-basics.html
</script>
<style scoped>
#coms {
  display: flex;
  flex-wrap: wrap;
}
#coms div,
.subAll {
  border-radius: 10px;
  margin: 5px;
  min-width: 30%;
  padding-top: 30px;
  background-color: cadetblue;
  height: 100px;
  color: #fff;
}
#coms .subAll {
  background-color: cornflowerblue;
}
#coms #emit {
  background-color: lightsalmon;
}
</style>
