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
let hashNumber = window.location.hash.substr(1) || "1"
// 获取界面
let div = document.querySelector(`#div${hashNumber}`)
let app = document.querySelector("#showRouter")
// 渲染页面
if (div) {
  div.style.display = 'block'
}else{
  div = document.querySelector('#div404')
  div.style.display = 'block'
}
// 展示内容
if (app) app.appendChild(div)

/* 监听hash变化 */
window.addEventListener('hashchange', () => {
  console.log("hash变了")

  const hashNumber2 = window.location.hash.substr(1)

  // 获取界面
  let div2 = document.querySelector(`#div${hashNumber2}`)
  let app2 = document.querySelector("#showRouter")
// 渲染页面
  if (div2) {
    div2.style.display = 'block'
  }else{
    div2 = document.querySelector('#div404')
    div2.style.display = 'block'
  }
  // 先将容器中清空
  console.log(app2);
  app2.children[0].style.display = "none"
  // 展示内容
  document.body.appendChild(app2.children[0])
  app2.appendChild(div2)
})
