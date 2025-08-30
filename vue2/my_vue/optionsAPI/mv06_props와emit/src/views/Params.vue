<template>
  <div>
    <h1>Params</h1>

    <h2>params로 받은 데이터</h2>
    <h3>name: {{ $route.params.name }}</h3>
    <h3>data: {{ $route.params.data }}</h3>
    <h3>num: {{ $route.params.num }}</h3>
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
  </div>
</template>

<script>
export default {
  name: 'Params',
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
    console.log(this.$route.params.name)
    console.log(this.$route.params.data)
    console.log(this.$route.params.num)
  }
}
</script>
