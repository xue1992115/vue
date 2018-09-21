<template>
  <div id="father">
    <div>
       我是父组件,我接受到了：
      {{ text || '暂无数据'  }}
      <button @click="getSonText()">接受数据</button>
      <child ref='child'></child>
    </div>
  </div>
</template>
 
<script>
import child from './Child04.vue'
export default {
  data: function () {
    return {
      text: ''
    }
  },
  components: {
    child: child
  },
  methods: {
    getSonText () {
      this.text = this.$refs.child.text
    }
  }
}

</script>