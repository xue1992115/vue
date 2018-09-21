<template>
  <div>
    <p>我是子组件:一个按钮</p>
    <button @click="clickCallback">
      修改父组件的名称为：彭湖湾的组件
    </button>
  </div>
</template>
 
<script>
export default {
  data: function () {
    return {
      fatherComponentName: '彭湖湾的组件'
    }
  },
  /* this.$emit的作用就是触发自定义事件，这里边自定义的函数就是changeComponentName，
  changeComponentName这个函数是子组件自定义的函数。
  */
  methods: {
    clickCallback: function () {
      this.$emit('changeComponentName', this.fatherComponentName)
    }
  }
}
</script>