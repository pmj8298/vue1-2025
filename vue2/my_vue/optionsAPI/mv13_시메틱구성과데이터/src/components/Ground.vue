<template>
  <div class="Ground">
    <Header />
    <button @click="m = m === 'Memo' ? 'Memo2' : 'Memo'">
      외부데이터로 전환
    </button>
    <keep-alive>
      <component :is="m"></component>
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Memo from './Memo.vue'
import Memo2 from './Memo_out.vue'
import Footer from './Footer.vue'

export default {
  data() {
    return {
      m: 'Memo'
    }
  },
  components: {
    Header,
    Memo,
    Memo2,
    Footer
  }
}
</script>
<style>
/* component {
  height: 100%;
} */
</style>
