<template>
  <div>
    <show-panel title="Animation"
                transitionName="bounce"
                showText="Hello"></show-panel>
  </div>
</template>

<script>
import ShowPanel from '@/components/ShowPanel.vue'
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
