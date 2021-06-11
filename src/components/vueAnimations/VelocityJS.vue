<template>
  <div>
    <show-panel title="Velocity.js"
                transitionName="Velocity"
                showText="Hello"></show-panel>
  </div>
</template>

<script>
import ShowPanel from '@/components/vueAnimations/ShowPanel.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    ShowPanel
  }
}
</script>

<style scoped>

</style>
