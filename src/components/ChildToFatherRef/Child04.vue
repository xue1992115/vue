<template>
  <div>
    <p>我是子组件,我所拥有的数据： {{ text }}</p>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      text: '来自子组件的数据'
    }
  }
}
</script>