<template>
  <div>
    <p>我是兄弟组件：bother02</p>
    <button @click="changeText">更改bother01兄弟组件中的文本</button>
  </div>
</template>
 
<script>
export default {
  props: {
    changeText: {
      type: Function,
      default: () => {}
    }
  }
}
</script>