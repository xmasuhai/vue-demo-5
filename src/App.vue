<template>
  <div id="app">
    <h1>Demo</h1>
    <!-- 之后用动态组件简化
    https://vue-docs-next-zh-cn.netlify.app/guide/component-basics.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6
    -->
    <h2>Directives</h2>
    <Directives/>
    <hr/>
    <br/>
    <!-- -->
    <h2>Mixins</h2>
    <Mixins/>
    <hr/>
    <br/>
    <!-- -->
    <h2>Extends</h2>
    <Extends/>
    <hr/>
    <br/>
    <!-- -->
    <h2>ProvideInject</h2>
    <ProvideInject/>
    <hr/>
    <br/>
    <!-- -->
    <h2>VueModel</h2>
    <VueModel/>
    <hr/>
    <br/>
    <!-- -->
    <h2>VueRouter</h2>
    <VueRouter/>
    <hr/>
    <br/>
    <!-- -->
    <h2>VueAnimations</h2>
    <VueAnimations/>
    <hr/>
    <br/>
    <button @click="showAnimateCSS = !showAnimateCSS">
      Toggle
    </button>
    <transition name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
      <p v-if="showAnimateCSS">hell O</p>
    </transition>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <!-- -->
    <!--
    <h2>AntDesign</h2>
    <br />
    <VueAntDesign />
    <br />
    <br />
    <br />
    -->
  </div>
</template>

<script>
import Directives from './components/vueDirectives/Directives.vue'
import Mixins from './components/vueMixins/Mixins.vue'
import Extends from './components/vueExtends/Extends.vue'
import ProvideInject from './components/vueProvideInject/ProvideInject.vue'
import VueModel from './components/vueModels/VueModel.vue'
import VueRouter from './components/vueRouter/VueRouter.vue'
import VueAnimations from './components/vueAnimations/VueAnimations.vue'

export default {
  name: 'App',
  components: {
    Directives,
    Mixins,
    Extends,
    ProvideInject,
    VueModel,
    VueRouter,
    VueAnimations,
    // VueAntDesign,
  },
  data() {
    return {
      showAnimateCSS: true
    }
  }
}
</script>

<style lang="scss">
</style>
