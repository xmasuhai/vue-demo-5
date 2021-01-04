<template>
  <div id="app">
    <!-- 之后用动态组件简化  https://vue-docs-next-zh-cn.netlify.app/guide/component-basics.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6 --->
    <h2>Directives</h2>
    <Directives />
    <hr />
    <br />
    <!-- --->
    <h2>Mixins</h2>
    <Mixins />
    <hr />
    <br />
    <!-- --->
    <h2>Extends</h2>
    <Extends />
    <hr />
    <br />
    <!-- --->
    <h2>Provide_Inject</h2>
    <Provide_Inject />
    <hr />
    <br />
    <!-- --->
    <h2>V_model</h2>
    <V_model />
    <hr />
    <br />
    <!-- --->
    <h2>VueRouter</h2>
    <VueRouter />
    <hr />
    <br />
    <!-- --->
    <h2>VueAnimations</h2>
    <VueAnimations />
    <hr />
    <br />
    <!-- --->
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
import Directives from "./components/Directives.vue";
import Mixins from "./components/Mixins.vue";
import Extends from "./components/Extends.vue";
import Provide_Inject from "./components/Provide-Inject.vue";
import V_model from "./components/V-model.vue";
import VueRouter from "./components/VueRouter.vue";
import VueAnimations from "./components/VueAnimations.vue";
// import VueAntDesign from "./components/VueAntDesign.vue";
export default {
  name: "App",
  components: {
    Directives,
    Mixins,
    Extends,
    Provide_Inject,
    V_model,
    VueRouter,
    VueAnimations,
    // VueAntDesign,
  },
};
</script>

<style lang="scss">
</style>
