<template>
<div>
  <h1>Vue Animation</h1>
  <TransitionCSS></TransitionCSS>
  <Slide></Slide>

    <h2>animation</h2>
    <br>
    <div>
      <button @click="showAnimation = !showAnimation">Toggle show</button>
      <transition name="bounce">
        <p v-if="showAnimation">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris facilisis enim libero, at lacinia diam fermentum id.
          Pellentesque habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </div>
    <br>
    <br>

    <h2>Animate.CSS</h2>
    <div>
      <button @click="showAnimateCSS = !showAnimateCSS">
        Toggle render
      </button>
      <transition name="custom-classes-transition"
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
      <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
        <p v-if="showVelocity">
          Demo
        </p>
      </transition>
    </div>

  </div>
</template>

<script>
import TransitionCSS from '@/components/VueAnimations/TransitionCSS.vue'
import Slide from '@/components/VueAnimations/Slide.vue'
import Velocity from "velocity-animate";
export default {
  components: {
    TransitionCSS, Slide
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
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, {
          opacity: 1,
          fontSize: '2em'
        }, {
          duration: 300
        })
      Velocity(el, {
          fontSize: '1em'
        }, {
          duration: 500,
          complete: done
        })
    },
    leave: function (el, done) {
      Velocity(el, {
          translateX: 15,
          rotateZ: 50
        }, [ 500, 20 ])
        Velocity(el, {
          transform:"rotateZ(100deg)"
        }, [ 500, 20 ])
        Velocity(el, {
          rotateZ: 45,
          translateY: 30,
          translateX: 30,
          opacity: 0
        }, {
          duration: 500,
          complete: done
        })
      console.log(el);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/animate.min.css";

/* animation */
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
