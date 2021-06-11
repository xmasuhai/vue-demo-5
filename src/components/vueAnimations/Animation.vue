<template>
  <div>
    <show-panel title="Animation"
                transitionName="bounce"
                :showText="showText"></show-panel>
  </div>
</template>

<script>
import ShowPanel from '@/components/vueAnimations/ShowPanel.vue'

export default {
  data() {
    return {
      showText: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris facilisis enim libero, at lacinia diam fermentum id.
          Pellentesque habitant morbi tristique senectus et netus.
          `
    }
  },
  components: {
    ShowPanel
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .bounce-enter-active {
    animation: bounce-in .5s;
    }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
    }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
      }
    50% {
      transform: scale(1.5);
      }
    100% {
      transform: scale(1);
      }
    }
  }

</style>
