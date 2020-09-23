import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
