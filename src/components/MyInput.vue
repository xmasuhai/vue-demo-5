<template>
  <div class="MyInput">
    methods value:
    <br>
    <input :value="value" @input="onInput" type="text">&nbsp;
    <input :value="value" @input="$emit('input', $event.target.value)" type="text">
    <br>
    computed _value:
    <br>
    <input :value="_value" @input="_value = $event.target.value" type="text">
    <br>
    v-model inside _value:
    <br>
    <input v-model="_value" type="text">
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: {
      type: String,
    }
  },
  // 使用`computed`可以封装为`mixin`
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
  methods: {
    onInput(e) {
      const event = e.target.value
      this.$emit('input', event)
    }
  },
  }
</script>

<style scoped>
.MyInput {
  background: darkorange;
  border: 1px solid indianred;
  }
</style>
