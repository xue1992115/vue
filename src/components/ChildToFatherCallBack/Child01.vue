<template>
  <div>
    <p>我是子组件：一个button</p>
    <button @click="() => changeComponentName(newComponentName)">
      把父组件的名称修改为：彭湖湾的组件
    </button>
  </div>
</template>
 
<script>
export default {
  data: function () {
    return {
      newComponentName: '彭湖湾的组件'
    }
  },
  props: {
    changeComponentName: {
      type: Function,
      default: () => { }
    }
  }
}
</script>