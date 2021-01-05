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

function route() {
// 获取界面
  let hashNumber = window.location.hash.substr(1) || '1'
  let app = document.querySelector('#showRouter')
  let div = document.querySelector(`#div${hashNumber}`)
// 渲染页面
  if (!div) {
    div = document.querySelector('#div404')
  }
// 判断并清除原来的节点
  if (app.children.length > 0){
    app.children[0].style.display = "none"
    document.querySelector('#originJsRouter').appendChild(app.children[0])
  }

// 展示内容
  div.style.display = 'block'
  app.appendChild(div)
}

route()

/* 监听hash变化 */
window.addEventListener('hashchange', () => {
  console.log("hash变了")
  route()
})
