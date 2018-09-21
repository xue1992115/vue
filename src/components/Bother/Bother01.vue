<template>
  <div>
    <p>我是兄弟组件：bother01</p>
    <p>我有一个可变数据text：{{ text }}</p>
  </div>
</template>
 
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>