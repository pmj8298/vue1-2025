<template>
  <div id="container">
    <div id="cylinder"></div>
    <div class="nomal" id="piston"></div>
  </div>
  {{ size.toFixed(0) }}
  <hr />
  <div>
    <button @click="on1">동작</button>
    <button @click="getOut">위치확인</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const bt = ref(false)
const size = ref(0)
const getOut = () => {
  size.value = document.querySelector('#piston').getBoundingClientRect().x
  if (size.value === 400) {
    console.log('400도달', size.value)
    const pis = document.getElementById('piston')
    pis.className = 'nomal'
    bt.value = !bt.value
    showSize()
  }
}
const on1 = () => {
  bt.value = !bt.value
  const pis = document.getElementById('piston')
  console.log(bt.value, pis.className)
  if (bt.value) {
    pis.className = 'act'
  } else {
    pis.className = 'nomal'
  }
  showSize()
}
const showSize = () => {
  const tt = setInterval(getOut, 2)
  const t0 = setTimeout(() => {
    clearInterval(tt)
    clearTimeout(t0)
  }, 1100)
}
</script>
<style scoped>
#container {
  display: flex;
  justify-content: center;
}
#cylinder,
#piston {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
#cylinder {
  position: relative;
  width: 180px;
  height: 80px;
  border: 1px solid gray;
  background-color: yellow;
  z-index: 2;
}

#piston {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  left: -180px;
  top: 10px;
  width: 200px;
  height: 60px;
  border: 1px solid gray;
  transition: 1s linear;
}
.act {
  transition: 1s linear;
  transform: translateX(150px);
}
</style>
