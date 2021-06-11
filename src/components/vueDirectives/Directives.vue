<template>
  <div v-x v-y>
    <h2 id="h2">hello</h2>
    <p>
      <button v-on:click="hi">点我</button>
    </p>
    <p id="h2">
      <button v-on2:click="hi">再点</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  directives: {
    x: {
      inserted: function (el) {
        el.addEventListener("click", () => {
          console.log("x");
        });
      },
    },
    on2: {
      // inserted 可以改为 bind
      inserted(el, info) {
        /*
        console.log(`el: ${el}`)
        console.log(el)
        console.log(`info: ${info}`);
        console.log(info)
        console.log(`info.arg: ${info.arg}`);
        console.log(info.value)
        */
        el.addEventListener(info.arg, info.value("hi"));
      },
      unbind(el, info) {
        el.removeEventListener(info.arg, info.value);
      },
    },
  },
  methods: {
    hi(/* words */) {
      // console.log(`${words}`);
    },
  },
};
</script>

<style scoped>
</style>
