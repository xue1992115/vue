<template>
  <div id="father">
    <div>
      {{ '我是父组件,我的名称是:' + fatherComponentName }}
      <child  v-on:changeComponentName = "changeComponentName"></child>
    </div>
  </div>
</template>
 
<script>
import child from './Child02.vue'
export default {
  data: function () {
    return {
      fatherComponentName: 'A组件'
    }
  },
 
  methods: {
    /* 父组件监听相应的参数就在绑定的函数中通过参数获取传值 */
    changeComponentName: function (componentName) {
      this.fatherComponentName = componentName
    }
  },
 
  components: {
    child: child
  }
}
</script>