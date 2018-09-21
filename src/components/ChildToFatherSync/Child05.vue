<template>
  <div>
    <p>我是子组件</p>
    <p>智力： {{ wisdom }}</p>
    <p>膜法： {{ magic }}</p>
    <p>攻击： {{ attack }}</p>
    <p>防御： {{ defense }}</p>
    <button @click="increment('wisdom')">增加智力</button>
    <button @click="increment('magic')">增加膜法</button>
    <button @click="increment('attack')">增加攻击</button>
    <button @click="increment('defense')">增加防御</button>
  </div>
</template>
 
<script>
export default {
  props: {
    wisdom: Number,
    magic: Number,
    attack: Number,
    defense: Number,
    analysisData: Object,
  },
  
  methods: {
    increment (dataName) {
/* 监听子组件改变的值,并且通过父组件修改数据*/
      let newValue = this[dataName] + 1
      this.$emit(`update:${dataName}`, newValue)
    }
  }
}
</script>
