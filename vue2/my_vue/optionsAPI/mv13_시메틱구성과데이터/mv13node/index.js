const express = require('express')
// const mongoose = require('mongoose')
const app = express()
const port = 3000

const memos = [
  '메모 1 외부서버 내용',
  '메모 2 외부서버 내용',
  '메모 3 외부서버 내용',
  '메모 4 외부서버 내용',
  '메모 5 외부서버 내용'
]
app.get('/v1/memos', (req, res) => {
  res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
