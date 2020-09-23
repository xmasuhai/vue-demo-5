<template>
<div v-x v-y>
  <p>hello</p>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  directives: {
    'x': {
      inserted: function (el) {
        el.addEventListener('click', () => {
          console.log('x');
        })
      }
    },
  }
}
</script>

<style scoped>

</style>
