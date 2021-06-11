<template>
  <div>
    <h3>单选框 radio box:</h3>
    <hr/>
    你想要： {{ radio }}
    <br/>
    <label>
      <input type="radio" v-model="radio" :value="1" name="want"/>
      <span>1抽烟 </span>
    </label>
    <label>
      <input type="radio" v-model="radio" :value="2" name="want"/>
      <span>2喝酒 </span>
    </label>
    <label>
      <input type="radio" v-model="radio" :value="3" name="want"/>
      <span>3烫头 </span>
    </label>
    <br/>
    加上属性name，表示单选框是同一组的
  </div>
</template>

<script>
export default {
  name: 'VueRadioBox',
  data() {
    return {
      radio: '',
    }
  }
}
</script>
