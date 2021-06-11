<template>
  <div>
    <button @click="showAnimateCSS = !showAnimateCSS">
      Toggle
    </button>
    <transition enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
      <p v-if="showAnimateCSS">hell O</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAnimateCSS: true
    }
  }
}
</script>

<style scoped>
</style>
