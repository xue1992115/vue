<template>
  <div id="father">
    <div>
       我是父组件
      <child
        :wisdom.sync="wisdom"
        :magic.sync="magic"
        :attack.sync="attack"
        :defense.sync="defense">
      </child>
      <p>智力： {{ wisdom }}</p>
      <p>膜法： {{ magic }}</p>
      <p>攻击： {{ attack }}</p>
      <p>防御： {{ defense }}</p>
    </div>
  </div>
</template>
 
<script>
import child from './Child05.vue'
export default {
  data: function () {
    return {
      wisdom: 90,
      magic: 160,
      attack: 100,
      defense: 80,
      analysisData:{wisdom: 1,magic: 2,attack: 3,defense: 4},
    }
  },
  components: {
    child: child
  }
}

</script>