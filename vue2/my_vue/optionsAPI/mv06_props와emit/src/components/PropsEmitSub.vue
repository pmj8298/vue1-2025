<template>
  <div id="inner">
    <h3>Sub의 내용입니다.</h3>
    <div>{{ downdata }}</div>
    <button @click="$emit('updata', '아래에서 위로 던져진 데이터')">
      데이터 위로 던지기
    </button>
    <button @click="$emit('updata', 111)">111을 위로 던지기</button>
    <button @click="$emit('updata', 999)">999를 위로 던지기</button>
    <button @click="$emit('updata', '안녕')">'안녕'을 위로 던지기</button><br />
    v-on:Keyup형식:
    <input type="text" @keyup="$emit('updata', $event.target.value)" />
    v-model형식
    <input type="text" v-model="upup" />
  </div>
</template>
<script>
export default {
  name: 'insub',
  props: ['downdata'],
  data() {
    return {
      upup: ''
    }
  },
  watch: {
    upup: function () {
      this.$emit('updata', this.upup)
    }
  }
}
</script>
<style scoped>
#inner {
  border: 1px dashed red;
  margin: 10px;
  padding: 10px;
}
</style>
