<template>
  <div><h1>Ex2. DataLink(with vuex)</h1></div>
  <div>counter:{{ counter }}</div>
  <div>test:{{ test }}</div>
  <div>this.$store.state.ct:{{ this.$store.state.ct }}</div>
  <div>this.$store.getters.cctt:{{ this.$store.getters.cctt }}</div>
  <div>getVx :{{ getVx }}</div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const counter = computed(() => store.state.ct)
const test = computed(() => store.getters.cctt)
const getVx = store.state.ct
store.dispatch('actCt', 33) // 비동기처리
store.commit('setCt', 77) // 동기
</script>
<style></style>
r
