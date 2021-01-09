<template>
  <div id="router">
    <h2>原生JS</h2>
    <br />
    <div id="originJsRouter">
      <a href="#1"> link#1 </a>
      <a href="#2"> link#2 </a>
      <a href="#3"> link#3 </a>
      <a href="#4"> link#4 </a>
      <div id="showRouter"></div>
      <!--
      <div id="div1" class="showNone">1</div>
      <div id="div2" class="showNone">2</div>
      <div id="div3" class="showNone">3</div>
      <div id="div4" class="showNone">4</div>
      -->
      <div id="div404" class="showNone">#404</div>
    </div>
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
  mounted: function () {
    // JS Router http://localhost:8080/#1
    /* 获取用户取得的地址 */
    console.log(`-------------------`);

    // 路由表 哈希值：div节点对象
    const createDiv = () => document.createElement("div");
    const [div1, div2, div3, div4] = [
      createDiv(),
      createDiv(),
      createDiv(),
      createDiv(),
    ];
    [div1.innerHTML, div2.innerHTML, div3.innerHTML, div4.innerHTML] = [
      "1",
      "2",
      "3",
      "4",
    ];
    const routeTable = {
      1: div1,
      2: div2,
      3: div3,
      4: div4,
    };

    function route() {
      // 获取界面
      let hashNumber = window.location.hash.substr(1) || "1";
      let app = document.querySelector("#showRouter");
      // let div = document.querySelector(`#div${hashNumber}`)
      let div = routeTable[hashNumber];

      // 渲染页面
      if (!div) {
        div = document.querySelector("#div404");
      }
      // 判断并清除原来的节点
      /*
    if (app.children.length > 0){
      app.children[0].style.display = "none"
      document.querySelector('#originJsRouter').appendChild(app.children[0])
    }
  */
      app.innerHTML = "";
      // 展示内容
      div.style.display = "block";
      app.appendChild(div);
    }

    route();

    /* 监听hash变化 */
    window.addEventListener("hashchange", () => {
      console.log("hash变了");
      route();
    });
  },
};
</script>

<style scoped>
.showNone {
  display: none;
}
</style>
