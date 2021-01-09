<template>
  <div>
    <button @click="changeColor">
      当前主题色： {{ displayColor }} 换肤 换成{{ showThemeName }}
    </button>
    <button @click="changefontSize('big')">大字</button>
    <button @click="changefontSize('small')">小字</button>
    <button @click="changefontSize('normal')">正常字</button>
  </div>
</template>

<script>
export default {
  inject: ["themeName", "changeTheme", "changefontSize"],
  data() {
    return {
      currentColor: this.themeName,
    };
  },
  computed: {
    displayColor() {
      return this.currentColor;
    },
    showThemeName() {
      return this.currentColor === "blue" ? "red" : "blue";
    },
  },
  methods: {
    changeColor() {
      const currentColor = this.changeTheme();
      // console.log(currentColor);
      this.currentColor = currentColor;
    },
  },
};
</script>
