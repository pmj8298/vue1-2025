<template>
  <div id="sb">
    <mark>{{ sbData }}</mark>
    <div>
      <button @click="upup">위로 던짐</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['sbData'],
  data() {
    return {
      upData: '데이터를 서브에서 퍼올렸어요.'
    }
  },
  methods: {
    upup() {
      this.$emit('upData', this.upData)
    }
  },
  components: {}
}
</script>
<style scoped>
#sb {
  border: 1px solid #000;
}
</style>
