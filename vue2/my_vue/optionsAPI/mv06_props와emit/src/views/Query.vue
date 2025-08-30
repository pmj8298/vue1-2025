<template>
  <div>
    <h1>Query</h1>
    <h2>Query로 받은 데이터</h2>
    <h3>name: {{ $route.query.name }}</h3>
    <h3>data: {{ $route.query.data }}</h3>
    <h3>num: {{ $route.query.num }}</h3>
  </div>
  <hr />
  <h2>props로 받은 데이터</h2>
  <h3>
    <em>name: {{ name }}</em>
  </h3>
  <h3>
    <em>data: {{ data }}</em>
  </h3>
  <h3>
    <em>num: {{ num }}</em>
  </h3>
</template>

<script>
export default {
  name: 'Query',
  props: {
    name: {
      type: String,
      default: ''
    },
    data: {
      type: String,
      default: ''
    },
    num: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.$route.query.name)
    console.log(this.$route.query.data)
    console.log(this.$route.query.num)
  }
}
</script>
