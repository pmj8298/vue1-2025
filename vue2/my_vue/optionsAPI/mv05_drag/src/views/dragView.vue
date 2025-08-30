<template>
  <div class="body">
    <div class="container" @drop.prevent="drop($event)" @dragover.prevent>
      <button
        id="heart"
        class="draggable item"
        draggable="true"
        @dragstart="drag($event)"
      >
        ❤️
      </button>
    </div>
    <div
      class="container2"
      @drop.prevent="drop($event)"
      @dragover.prevent
    ></div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
function showEvent(e) {
  if (document.querySelectorAll('p').length === 10) {
    document.querySelectorAll('p').forEach((e) => e.remove())
  }
  const p = document.createElement('p')
  p.textContent = e
  document.body.append(p)
}
// =====================================
// // 드롭하여 옴기기 기능 함수

function drag(ev) {
  ev.dataTransfer.setData('some', ev.target.id)
  console.log(ev.target)
}

function drop(ev) {
  ev.preventDefault()
  const data = ev.dataTransfer.getData('some')
  // console.log(ev.currentTarget) // ev.target 으로 쓰니 타겟이 달라져서 같은 자리에 에러~ 교육할 것
  if (document.getElementById(data)) {
    ev.currentTarget.appendChild(document.getElementById(data))
  }
}
// =====================================

onMounted(() => {
  const item = document.querySelector('.item')
  const container2 = document.querySelector('.container2')

  // 1)
  item.addEventListener('dragstart', (e) => {
    showEvent('드래그를 시작하면 발생하는 이벤트')
  })

  // 2)
  // item.addEventListener('drag', (e) => {
  //   showEvent('드래그하면 발생하는 이벤트')
  // })

  // 3)
  container2.addEventListener('dragenter', (e) => {
    showEvent('드래그 요소가 이 영역에 진입하면 발생하는 이벤트')
  })

  // 4)
  // container2.addEventListener('dragover', (e) => {
  //   showEvent('드래그 요소가 이 영역에 위에 계속 위치하면 발생하는 이벤트')
  // })

  // 5)
  container2.addEventListener('dragleave', (e) => {
    e.preventDefault()
    showEvent('드래그 요소가 박스 영역을 떠나면 발생하는 이벤트')
  })
  // 6) 2단계 동시에 준비할것, 박스에 정확히 드롭
  container2.addEventListener('dragover', (e) => {
    e.preventDefault() // 필요함, 아래는 비활성
    // showEvent("드래그 요소가 '두' 번째 박스 영역에 계속 위치하면 발생하는 이벤트");
  })
  container2.addEventListener('drop', (e) => {
    e.preventDefault()
    showEvent('드래그 요소가 박스 영역에 드롭')
  })

  // 7) 아무데나 놓으면 발생
  item.addEventListener('dragend', (e) => {
    showEvent('드래그가 끝나면 발생하는 이벤트')
  })
})
</script>
<style scoped>
.body {
  display: flex;
  justify-content: center;
}

button {
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 20px;
  margin: 12px;
  cursor: move;
  font-size: 30px;
  background: #eaeaea4f;
}

.container,
.container2 {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  background-color: #b5c1dc57;
  border-radius: 20px;
}
</style>
