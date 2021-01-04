import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import { Form } from 'ant-design-vue'

Vue.use(Form)
Vue.config.productionTip = false

// 全局指令

Vue.directive('y', {
  inserted: function (el) {
    console.log(el)
    // 点击即出现一个y
    el.addEventListener('click', () => {
      console.log('y')
    })
  },
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// JS Router http://localhost:8080/#1
/* 获取用户取得的地址 */
console.log(`-------------------`)
console.log(window.location.hash)
const showRouter = document.querySelector('#showRouter')
const createDiv = () => document.createElement("div")
const [div1, div2, div3, div4] = [createDiv(), createDiv(), createDiv(), createDiv()]
  ;[div1.innerHTML, div2.innerHTML, div3.innerHTML, div4.innerHTML] = ["1", "2", "3", "4"]
const routeTable = {
  "1": div1,
  "2": div2,
  "3": div3,
  "4": div4
};
function doRoute(container) {
  // 获取hash地址 #1 #$ 中的数字 1 $
  let number = window.location.hash.substr(1);

  // 默认路由，当hash值为空时将它设为1
  number = number || 1;

  // 根据hash得到路由表中相应页面
  let div = routeTable[number.toString()];

  // 如果路由表中不存在则跳转到404页面
  if (!div) {
    div = document.querySelector("#div404");
  }

  // 渲染页面
  div.style.display = "block";

  // 先将容器中清空
  container.innerHTML = "";

  // 展示内容
  container.appendChild(div);
  console.log(number);
}

doRoute(showRouter)

/* 监听hash变化 */
window.addEventListener('hashchange', () => {
  doRoute(showRouter)
})

