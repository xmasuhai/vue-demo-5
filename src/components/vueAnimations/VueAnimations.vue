<template>
  <div>
    <h1>Vue Animation</h1>
    <TransitionCSS></TransitionCSS>
    <Slide></Slide>
    <AnimateCSS></AnimateCSS>

    <h2>pure CSS animation</h2>
    <br>
    <div>
      <button @click="showAnimation = !showAnimation">Toggle show</button>
      <transition name="bounce">
        <p v-if="showAnimation">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Mauris facilisis enim libero,
          at lacinia diam fermentum id.
          Pellentesque habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </div>
    <br>
    <br>

    <h2>Animate.CSS again</h2>
    <div>
      <button @click="showAnimateCSS = !showAnimateCSS">
        Toggle render
      </button>
      <transition
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight">
        <p v-if="showAnimateCSS">hello</p>
      </transition>
    </div>
    <br>
    <br>

    <h3>Velocity.js</h3>
    <div>
      <button @click="showVelocity = !showVelocity">
        Toggle
      </button>
      <transition :css="false">
        <p v-if="showVelocity">
          Demo
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import TransitionCSS from '@/components/vueAnimations/TransitionCSS.vue'
import Slide from '@/components/vueAnimations/Slide.vue'
import AnimateCSS from '@/components/vueAnimations/AnimateCSS.vue'

export default {
  components: {
    TransitionCSS, Slide, AnimateCSS
  },
  data() {
    return {
      visible: true,
      show: true,
      showAnimation: true,
      showAnimateCSS: true,
      showVelocity: true,
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

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
</style>
