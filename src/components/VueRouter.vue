<template>
  <div id="router">
    <h3>原生JS模拟router原理</h3>
    <br />
    <h4>hash 模式</h4>
    <div>
      <a class="link" href="#1"> link#1 </a>
      <a class="link" href="#2"> link#2 </a>
      <a class="link" href="#3"> link#3 </a>
      <a class="link" href="#4"> link#4 </a>
      <div id="showRouter_hash"></div>
      <div id="div404" class="showNone">#404</div>
    </div>
    <br />
    <hr />
    <h4>history 模式</h4>
    <div>
      <a class="link" href="/1"> link/1 </a>
      <a class="link" href="/2"> link/2 </a>
      <a class="link" href="/3"> link/3 </a>
      <a class="link" href="/4"> link/4 </a>
      <div id="showRouter_history"></div>
    </div>
    <br />
    <hr />
    <h4>memory 模式</h4>
    <br />
    <hr />
    <h4>嵌套路由</h4>
    <br />
    <hr />
    <h3>vue router应用</h3>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted: function () {
    console.log(`-------------------`);
    // JS Router http://localhost:8080/#1
    /* 获取用户取得的地址 */
    // 路由表 哈希值：div节点对象
    // fun("div1") ---> div1 div1.innerHTML "div1"
    function createRouteNode(div_str) {
      const hashName = {};
      hashName[div_str] = document.createElement("div");
      hashName[div_str].innerHTML = Object.keys(hashName)[0];
      return hashName[div_str];
    }

    const routeTable = {
      1: createRouteNode("div1"),
      2: createRouteNode("div2"),
      3: createRouteNode("div3"),
      4: createRouteNode("div4"),
      "/1": createRouteNode("/div1"),
      "/2": createRouteNode("/div2"),
      "/3": createRouteNode("/div3"),
      "/4": createRouteNode("/div4"),
      "1/1": createRouteNode("div1/1"),
      "1/2": createRouteNode("div1/2"),
      "1/3": createRouteNode("div1/3"),
      "1/4": createRouteNode("div1/4"),
    };
    // 获取界面
    const app = document.querySelector("#showRouter_hash");
    const app2 = document.querySelector("#showRouter_history");

    // 路由hash
    function routHash(container) {
      let hashNumber = window.location.hash.substr(1) || "1";
      let div = routeTable[hashNumber];
      if (!div) {
        div = document.querySelector("#div404");
      }
      container.innerHTML = "";
      // 展示内容
      div.style.display = "block";
      container.appendChild(div);
    }
    // 路由history
    function routHistroy(container) {
      let historyNumber = window.location.pathname[1] || "/1";
      let div = routeTable[historyNumber];
      if (!div) {
        div = document.querySelector("#div404");
      }
      container.innerHTML = "";
      // 展示内容
      div.style.display = "block";
      const cloneNode = div.cloneNode(true);
      container.appendChild(cloneNode);
    }

    // 渲染函数
    function render() {
      routHash(app);
      routHistroy(app2);
      // 阻止a标签的默认动作
      const allATags = document.querySelectorAll("a.link");
      for (let a of allATags) {
        a.addEventListener("click", (e) => {
          const href = a.getAttribute("href");
          e.preventDefault();
          // console.log(href) // "#1"  // "/1"
          window.history.pushState(null, `${href}`, href);
          // 通知
          if (window.location.hash.includes("#")) {
            routHash(app);
          } else {
            routHistroy(app2);
          }
        });
      }
    }
    // 渲染页面
    render();

    /* 监听hash变化 */
    /*
    window.addEventListener("hashchange", () => {
      console.log(`-------------------`);
      console.log("hash变了");
      render();
    });
    */
  },
};
</script>

<style scoped>
.showNone {
  display: none;
}
</style>
