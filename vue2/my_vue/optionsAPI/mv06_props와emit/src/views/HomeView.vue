<template>
  <div>
    <h1>Home 페이지</h1>
    <div>{{ showupdata }}</div>
    <div><button @click="data = '위에서 받음;;;'">아래로 던짐</button></div>
  </div>
  <sbMain :sbData="data" @upData="showUpData"></sbMain>
</template>
<script>
import sbMain from '@/components/HomeSub.vue'
export default {
  name: 'Home',
  components: { sbMain },

  data() {
    return {
      data: 'Home에서 서브로 가져온 내용입니다.',
      showupdata: '여기는 홈뷰'
    }
  },
  methods: {
    showUpData(e) {
      console.log(e)
      this.showupdata = e
    }
  }
}
</script>
