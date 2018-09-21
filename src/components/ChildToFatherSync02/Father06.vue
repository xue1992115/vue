<template>
  <div id="father">
    <div>
       我是父组件
      <child :analysisData.sync="analysisData">
      </child>
      <p>智力： {{ analysisData.wisdom }}</p>
      <p>膜法： {{ analysisData.magic }}</p>
      <p>攻击： {{ analysisData.attack }}</p>
      <p>防御： {{ analysisData.defense }}</p>
    </div>
  </div>
</template>
 
<script>
import child from './Child06.vue'
export default {
  data: function () {
    return {
      analysisData: {
        wisdom: 900,
        magic: 160,
        attack: 100,
        defense: 80
      }
    }
  },
  components: {
    child: child
  }
}

</script>