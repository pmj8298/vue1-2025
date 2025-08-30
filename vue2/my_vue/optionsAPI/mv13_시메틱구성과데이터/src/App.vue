<template>
  <div class="app">
    <div class="line nav">
      <Nav />
    </div>
    <div class="line">
      <Ground />
    </div>
    <div class="line adv"><Adv /></div>
  </div>
</template>

<script>
import Ground from './components/Ground.vue'
import Adv from './components/adv.vue'
import Nav from './components/nav.vue'
export default {
  components: { Ground, Adv, Nav }
}
</script>
<style scoped>
.app {
  display: grid;
  height: 800px;
  grid-template-columns: 1fr 4fr 1fr;
}
.line {
  padding: 5px;
  margin: 5px;
  border: 1px solid gray;
}
</style>
