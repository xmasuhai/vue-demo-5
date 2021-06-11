<template>
<div id="provideInject" :class="`app theme-${themeName} fontSize-${fontSizeName}`">
  <!-- :class="`app theme-${themeName}`" 双引号中的是值 反引号中的是JS字符串 -->
  <ChangeThemeButton />
  <change-theme-button />
  <Child1 />
  <button>x</button>
  <Child2 />
  <button>x</button>
  <Child3 />
  <button>x</button>
  <Child4 />
  <button>x</button>
  <Child5 />
  <button>x</button>
</div>
</template>

<script>
import Child1 from "../Child1.vue";
import Child2 from "../Child2.vue";
import Child3 from "../Child3.vue";
import Child4 from "../Child4.vue";
import Child5 from "../Child5.vue";
import ChangeThemeButton from "../ChangeThemeButton.vue";
export default {
  name: "ProvideInject",
  data() {
    return {
      themeName: "blue", // "red"
      fontSizeName: "normal", // "big" | "small"
    };
  },
  provide() {
    return {
      themeName: this.themeName,
      changeTheme: this.changeTheme,
      changefontSize: this.changefontSize,
    };
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
    ChangeThemeButton,
  },
  methods: {
    changeTheme() {
      this.themeName === "blue" ?
        (this.themeName = "red") :
        (this.themeName = "blue");
      return this.themeName;
    },
    changefontSize(name) {
      /*
      if (name === "normal" || name === "big" || name === "small") {
        this.fontSizeName = name;
      }
       */

      if (["normal", "big", "small"].indexOf(name) >= 0) {
        this.fontSizeName = name;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  font-family: "Avenir", Helvetica, sans-serif;
  text-align: center;
  color: #2c3ef0;
  margin-top: 60px;

  // .app.theme-blue （注意没有空格）表示同时满足 .app 和 .theme-blue 两个类
  // 但我用SCSS
  &.theme-blue {
    color: #2c3ef0;

    button {
      background-color: blue;
      color: white;
    }
  }

  &.theme-red {
    color: darkgoldenrod;

    button {
      background-color: red;
      color: white;
    }
  }

  & button {
    font-size: inherit;
  }

  &.fontSize-normal {
    font-size: 16px;
  }

  &.fontSize-big {
    font-size: 26px;
  }

  &.fontSize-small {
    font-size: 12px;
  }
}
</style>
