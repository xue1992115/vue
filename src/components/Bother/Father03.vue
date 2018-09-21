<template>
  <div id="father">
    <div>
      {{ '我是父组件:father' }}
      <bother01 :text = "text"></bother01>
      <bother02 :changeText="()=>changeText()"></bother02>
    </div>
  </div> 
</template>
 
<script>
import bother01 from './Bother01.vue'
import bother02 from './Bother02.vue'
 
export default {
  data: function () {
    return {
      text: '我是一行文本'
    }
  },
 
  methods: {
    changeText: function () {
      this.text = '我是经过改动的一行文本'
    }
  },
 
  components: {
    bother01: bother01,
    bother02: bother02
  }
}
</script>