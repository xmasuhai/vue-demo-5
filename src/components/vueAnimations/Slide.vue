<template>
  <div>
    <ShowPanel title="Transition-Slide"
               transitionName="slide-fade"
               show-text="hello"></ShowPanel>
  </div>
</template>

<script>
import ShowPanel from '@/components/vueAnimations/ShowPanel.vue'
export default {
  data() {
    return {};
  },
  components: {
    ShowPanel
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 3s ease;
    }

  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

  .slide-fade-enter,
  .slide-fade-leave-to

    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(50px);
    opacity: 0;
    }

  }
</style>
