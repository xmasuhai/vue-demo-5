<template>
  <div>
    <h2>原生JS</h2>
    <br />
    <a href="#1"> link#1 </a>
    <a href="#2"> link#2 </a>
    <a href="#3"> link#3 </a>
    <a href="#4"> link#4 </a>
    <div id="showRouter"></div>
    <div id="div1" class="showNone">1</div>
    <div id="div2" class="showNone">2</div>
    <div id="div3" class="showNone">3</div>
    <div id="div4" class="showNone">4</div>
    <div id="div404" class="showNone">#404</div>
    <br />
    <hr />
    <h2>hash 模式</h2>
    <br />
    <hr />
    <h2>history 模式</h2>
    <br />
    <hr />
    <h2>memory 模式</h2>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.showNone {
  display: none;
}
</style>
