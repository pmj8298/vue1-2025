<template>
  <div class="black-bg" v-if="modal" @click="modal = false">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <div class="in-text">
        <p>분류코드:{{ data[datail].id }}</p>
        <p>타이틀:{{ data[datail].title }}</p>
        <p>위치정보:{{ data[datail].image }}</p>
        <p>내용:{{ data[datail].content }}</p>
        <p>비용:{{ data[datail].price }}</p>
      </div>
    </div>
  </div>
  <div class="menu">
    <a v-for="(v, i) in menubar" :key="i">{{ v }}</a>
  </div>
  <div id="container">
    <div class="card" v-for="(e, j) in products" :key="j">
      <div @click=";[(modal = true), (datail = ch(j))]">
        <h3>{{ '여행지' + e }}</h3>
        <img
          :src="'/img0' + ((j % 6) + 1) + '.jpg'"
          alt="안나옴"
          class="imgs"
        />
        <h4>{{ data[j].title }}</h4>
        <p>{{ data[j].price }} 원</p>
      </div>
      <button @click="inc(j)">추천</button><span> 추천수 : {{ pick[j] }}</span>
    </div>
  </div>
</template>
<script>
import data from './assets/data.js'
export default {
  data() {
    return {
      datail: 0,
      data,
      modal: false,
      pick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      menubar: ['Home', 'location', 'infomation', 'About'],
      products: data.length
    }
  },
  methods: {
    inc(i) {
      this.pick[i]++
    },
    ch(e) {
      return e
    }
  },
  components: {}
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  position: relative;
  margin: auto;
  width: 460px;
  height: 400px;
  top: 20%;
  /* left: auto;/ */
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
}
.card {
  width: 30%;
  min-width: 320px;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 15px;
}
.card:hover {
  background-color: rgb(179, 195, 219);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  text-decoration-line: none;
}
.imgs {
  width: 85%;
  border-radius: 10px;
}
.in-text {
  text-align: left;
  color: darkcyan;
  font-size: 1.2em;
}
</style>
