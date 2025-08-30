<template>
  <div>
    <header>
      <div>기본 헤더의 글</div>
    </header>

    <div ref="scrollLine">
      ====================이곳이 사라지면====================
    </div>
    <div>
      <div v-for="n in 100" :key="n">{{ n }}</div>
    </div>
  </div>
  <header class="header_fixed" v-if="isFixed">
    <div>상단에 고정되는 글</div>
    <div>scrollY:{{ scrollY }}</div>
    <div>뷰높이 innerHeight: {{ innerHeight }}</div>
    <div>지정라인지점: {{ line }}</div>
    <div>라인의 끝: {{ lineEnd }}</div>
    <div>Body의 높이 offsetHeight: {{ offsetHeight }}</div>
    <button @click="gotop">최상단</button>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isFixed: false,
      scrollY: '',
      innerHeight: '',
      line: '',
      lineEnd: '',
      offsetHeight: ''
    }
  },
  mounted() {
    console.log('마운트됨')
    document.addEventListener('scroll', this.scroll)
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      this.scrollY = window.scrollY // 현재라인
      this.innerHeight = window.innerHeight // 뷰높이
      this.line = this.$refs.scrollLine.offsetTop // 지정라인지점
      this.lineEnd = this.innerHeight + this.scrollY // 라인의 끝
      this.offsetHeight = document.body.offsetHeight
      console.log('body높이', document.body.clientHeight)
      if (window.scrollY > this.$refs.scrollLine.offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
      // if (lineEnd > offsetHeight) {
      //   this.gotop()
      // }
    },
    gotop() {
      console.log('동작해봄')
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style>
.header_fixed {
  position: fixed;
  top: 0;
  /* right: 0; */
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  padding: 5px;
}
</style>
