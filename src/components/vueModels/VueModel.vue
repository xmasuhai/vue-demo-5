<template>
  <div>
    <h2>v-model 示例</h2>
    <br/>
    <vue-input-box/>
    <br/>
    <vue-check-box/>
    <br/>
    <vue-radio-box/>
    <br/>
    <vue-select-box/>
    <br/>
    <vue-form/>
    <br/>
  </div>
</template>

<script>
import VueInputBox from '@/components/vueModels/VueInputBox.vue'
import VueCheckBox from '@/components/vueModels/VueCheckBox'
import VueRadioBox from '@/components/vueModels/VueRadioBox'
import VueSelectBox from '@/components/vueModels/VueSelectBox'
import VueForm from '@/components/vueModels/VueForm'

export default {
  components: {
    VueForm,
    VueSelectBox,
    VueRadioBox,
    VueCheckBox,
    VueInputBox,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
pre {
  width: 200px;
  background: #cccccc;
  display: inline-block;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
