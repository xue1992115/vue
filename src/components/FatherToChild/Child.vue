<template>
  <div>
   {{'我是子组件，我接收了'+text}}
  </div>
</template>

<script>
export default {
  /* 定义子组件要接收的父组件的参数以类型 */
  props: {
    text:{
      type:String,
      default:''
    }
  }
}
</script>

<style>

</style>
