<template>
  <div>크롤링 페이지</div>
  <div class="info"></div>
</template>
<script setup>
const url = 'http://www.google.com'
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const div = document.querySelector('.info')
    const data0 = data[0].basePrice
    div.innerHTML = '현재 환률은 : ' + data0 + '원'
  })
</script>
<style></style>
