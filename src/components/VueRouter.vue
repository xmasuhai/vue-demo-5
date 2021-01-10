<template>
  <div id="router">
    <h3>原生JS模拟router原理</h3>
    <br />
    <h4>hash 模式</h4>
    <div>
      <a class="link_hash" href="#1"> link#1 </a>
      <a class="link_hash" href="#2"> link#2 </a>
      <a class="link_hash" href="#3"> link#3 </a>
      <a class="link_hash" href="#4"> link#4 </a>
      <div id="routerView_hash"></div>
      <div id="div404" class="showNone">#404</div>
    </div>
    <br />
    <hr />
    <h4>history 模式</h4>
    <div>
      <a class="link_histtory" href="/1"> link/1 </a>
      <a class="link_histtory" href="/2"> link/2 </a>
      <a class="link_histtory" href="/3"> link/3 </a>
      <a class="link_histtory" href="/4"> link/4 </a>
      <div id="routerView_history"></div>
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
      1: createRouteNode("div#1"),
      2: createRouteNode("div#2"),
      3: createRouteNode("div#3"),
      4: createRouteNode("div#4"),
      "/1": createRouteNode("div/1"),
      "/2": createRouteNode("div/2"),
      "/3": createRouteNode("div/3"),
      "/4": createRouteNode("div/4"),
      "1/1": createRouteNode("div1/1"),
      "1/2": createRouteNode("div1/2"),
      "1/3": createRouteNode("div1/3"),
      "1/4": createRouteNode("div1/4"),
    };
    // 获取界面
    const app = document.querySelector("#routerView_hash");
    const app2 = document.querySelector("#routerView_history");

    // 路由函数
    function routeDiv(container, div) {
      if (!div) {
        div = document.createElement("div");
        div.innerHTML = "#div404";
      }
      container.innerHTML = "";
      // 展示内容
      div.style.display = "block";
      const cloneNode = div.cloneNode(true);
      container.appendChild(cloneNode);
      div = null;
    }
    // 路由hash
    function routeHash(container) {
      let hashNumber = window.location.hash.substr(1) || "1";
      let div = routeTable[hashNumber];
      routeDiv(container, div);
    }
    // 路由history
    function routeHistory(container) {
      let historyNumber;
      window.location.pathname === "/"
        ? (historyNumber = "/1")
        : (historyNumber = window.location.pathname);
      let div = routeTable[historyNumber];
      routeDiv(container, div);
    }

    // 渲染函数
    routeHash(app);
    routeHistory(app2);

    // 控制跳转
    function ajump() {
      const allHashA_Tags = document.querySelectorAll("a.link_hash");
      const allHsitoryA_Tags = document.querySelectorAll("a.link_histtory");
      for (let a of allHashA_Tags) {
        a.addEventListener("click", () => {
          /* 监听hash变化 */
          window.addEventListener("hashchange", () => {
            routeHash(app);
          });
        });
      }
      for (let a of allHsitoryA_Tags) {
        a.addEventListener("click", (e) => {
          const href = a.getAttribute("href");
          e.preventDefault(); // 阻止a标签的默认动作
          // console.log(href)  // "/1" "/2" "/3" "/4"
          window.history.pushState(null, `${href}`, href);
          // 通知
          routeHistory(app2);
        });
      }
    }
    ajump();
  },
};
</script>

<style scoped>
.showNone {
  display: none;
}
</style>
