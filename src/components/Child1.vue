<template>
<div>Child1</div>
</template>

<script>
import MyVue from "../MyVue.js";
export default {
  data() {
    return {
      name: "Child1",
    };
  },
  extends: MyVue,
};
</script>

<style scoped>
</style>
