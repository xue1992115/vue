<template>
  <div id="father">
    {{ '我是父组件,名称是' + componentName }}
    <child  :changeComponentName = "changeComponentName"></child>
  </div>
</template>
<script>
  import child from './Child01'
  export default{
    data: function () {
      return {
        componentName: '组件A'
      }
    },
    methods: {
      changeComponentName: function (newComponentName) {
        this.componentName = newComponentName
      }
    },
   
    components: {
      child: child
    }
  }
</script>