<template>
  <div id="father">
  {{'我是父组件'}}
    <child :text='text'></child>
  </div>
</template>

<script>
  import child from './Child'
  export default {
    name: 'father',
    /* 定义父组件要传递的参数 */
    data() {
      return {
        text: '从父组件传过来的数据'
      }
    },
    components: {
      child
    }
  }
</script>

<style>
</style>