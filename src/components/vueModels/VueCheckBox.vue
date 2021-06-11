<template>
  <div>
    <h3>复选框 check box:</h3>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="checkbox">{{ checked }}</label>
    <br/>
    <label>
      <span>
        <input type="checkbox" v-model="checked"/> </span
      >{{ checked }}
    </label>
    <br/>
    <label>
      <span>
        <input type="checkbox" v-model="checked"/> </span
      >用label包住input 不需要再在input上加id属性和对应的label上加for属性
    </label>
    <br/>
    不良嗜好：{{ hobby }}
    <br/>
    <label>
      <input type="checkbox" v-model="hobby" value="抽烟"/>
      <span>抽烟 </span>
    </label>
    <br/>
    <label>
      <input type="checkbox" v-model="hobby" value="喝酒"/>
      <span>喝酒 </span>
    </label>
    <br/>
    <label>
      <input type="checkbox" v-model="hobby" value="烫头"/>
      <span>烫头 </span>
    </label>
    <br/>
    动态绑定：{{ hobby2 }} ':value'
    <br/>
    <label>
      <input type="checkbox" v-model="hobby2" :value="1"/>
      <span>1抽烟 </span>
    </label>
    <br/>
    <label>
      <input type="checkbox" v-model="hobby2" :value="2"/>
      <span>2喝酒 </span>
    </label>
    <br/>
    <label>
      <input type="checkbox" v-model="hobby2" :value="3"/>
      <span>3烫头 </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'VueCheckBox',
  data() {
    return {
      checked: true,
      hobby: [],
      hobby2: [],
    }
  }
}
</script>

<style scoped>

</style>
