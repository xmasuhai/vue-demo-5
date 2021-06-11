<template>
  <div>
    <h3>选择框</h3>
    <hr/>
    你想要{{ want }}
    <br/>
    <select v-model="want" name="want2" id="want2">
      <option disabled value="">---请选择---</option>
      <option :value="1">抽烟</option>
      <option :value="2">喝酒</option>
      <option :value="3">烫头</option>
      <option v-for="item in want2" :value="item.value" :key="item.value">
        {{ item.text }}
      </option>
    </select>
    <br/>
    你想要{{ hope }}
    <br/>
    <select multiple v-model="hope" name="hope" id="hope">
      <option disabled value="">---请选择---</option>
      <option :value="1">抽烟</option>
      <option :value="2">喝酒</option>
      <option :value="3">烫头</option>
      <option v-for="item in want2" :value="item.value" :key="item.value">
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'VueSelectBox',
  data() {
    return {
      want: '',
      want2: [
        {text: '抽烟', value: 4},
        {text: '喝酒', value: 5},
        {text: '烫头', value: 6},
      ],
      hope: [],
    }
  }
}
</script>
