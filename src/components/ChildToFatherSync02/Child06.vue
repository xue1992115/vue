<template>
  <div>
    <p>我是子组件</p>
    <p>智力： {{ analysisData.wisdom }}</p>
    <p>膜法： {{ analysisData.magic }}</p>
    <p>攻击： {{ analysisData.attack }}</p>
    <p>防御： {{ analysisData.defense }}</p>
    <button @click="increment('wisdom')">增加智力</button>
    <button @click="increment('magic')">增加膜法</button>
    <button @click="increment('attack')">增加攻击</button>
    <button @click="increment('defense')">增加防御</button>
  </div>
</template>
 
<script>
export default {
  props: {
    analysisData: Object
  },

  methods: {
    increment (dataName) {
      let newObj = JSON.parse(JSON.stringify(this.analysisData))
      newObj[dataName] += 1
      this.$emit('update:analysisData', newObj)
    }
  }
}
</script>