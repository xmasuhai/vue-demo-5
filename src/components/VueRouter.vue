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
    </div>
    <br />
    <hr />
    <h4>history 模式</h4>
    <div>
      <a class="link_history" href="/1"> link/1 </a>
      <a class="link_history" href="/2"> link/2 </a>
      <a class="link_history" href="/3"> link/3 </a>
      <a class="link_history" href="/4"> link/4 </a>
      <div id="routerView_history"></div>
    </div>
    <br />
    <hr />
    <h4>memory 模式</h4>
    <div>
      <a class="link_memory" href="m1"> linkM1 </a>
      <a class="link_memory" href="m2"> linkM2 </a>
      <a class="link_memory" href="m3"> linkM3 </a>
      <a class="link_memory" href="m4"> linkM4 </a>
      <div id="routerView_memory"></div>
    </div>
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
      "m1": createRouteNode("divM1"),
      "m2": createRouteNode("divM2"),
      "m3": createRouteNode("divM3"),
      "m4": createRouteNode("divM4"),
      "1/1": createRouteNode("div1/1"),
      "1/2": createRouteNode("div1/2"),
      "1/3": createRouteNode("div1/3"),
      "1/4": createRouteNode("div1/4"),
    };
    // 获取界面
    const app = document.querySelector("#routerView_hash");
    const app2 = document.querySelector("#routerView_history");
    const app3 = document.querySelector("#routerView_memory");

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
      let hashNumber = window.location.hash.substr(1);
      hashNumber === "" ? (hashNumber = "1") : (hashNumber = null);
      let historyNumber = window.location.pathname;
      historyNumber === "/" ? (historyNumber = null) : (hashNumber = null);
      let div = routeTable[hashNumber];
      routeDiv(container, div);
    }
    // 路由history
    function routeHistory(container) {
      let historyNumber = window.location.pathname;
      historyNumber === "/" ? (historyNumber = "/1") : historyNumber;
      let hashNumber = window.location.hash.substr(1);
      hashNumber === "" ? (hashNumber = null) : (historyNumber = null);
      let div = routeTable[historyNumber];
      routeDiv(container, div);
    }
    // 路由memory
    function routeMemory(container) {
      let memoryNumber = window.localStorage.getItem("urlMemory")
      if(!memoryNumber){
        memoryNumber = "m1"
      }
      let div = routeTable[memoryNumber];
      routeDiv(container, div);
    }

    // 初次渲染
    routeHash(app);
    routeHistory(app2);
    routeMemory(app3)

    // 控制跳转
    function aJump() {
      const allHashA_Tags = document.querySelectorAll("a.link_hash");
      const allHistoryA_Tags = document.querySelectorAll("a.link_history");
      const allMemoryA_Tags = document.querySelectorAll("a.link_memory");

      for (let a of allHashA_Tags) {
        a.addEventListener("click", () => {
          /* 监听hash变化 */
          window.addEventListener("hashchange", () => {
            routeHash(app);
          });
        });
      }
      for (let a of allHistoryA_Tags) {
        a.addEventListener("click", (e) => {
          const href = a.getAttribute("href");
          e.preventDefault(); // 阻止a标签的默认动作
          // console.log(href)  // "/1" "/2" "/3" "/4"
          window.history.pushState(null, `${href}`, href);
          // 通知
          routeHistory(app2);
        });
      }
      for (let a of allMemoryA_Tags) {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const href = a.getAttribute("href");
          window.localStorage.setItem("urlMemory", href)
          // 通知
          routeMemory(app3);
        });
      }
    }
    aJump();
  },
};
</script>
