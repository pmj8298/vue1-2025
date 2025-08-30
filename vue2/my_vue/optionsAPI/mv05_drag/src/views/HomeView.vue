<template>
  <div class="home">
    <keep-alive>
      <HelloWorld />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
div {
  display: inline-block;
  text-align: center;
}
</style>
