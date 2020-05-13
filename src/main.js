import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载Vant组件库
import Vant from 'vant'
// 加载Vant组件库样式
import 'vant/lib/index.css'

// 自动设置 REM 基准值（html 标签字体大小）
import 'amfe-flexible'

// 加载全局样式(最好放到最后，方便覆盖第三方样式)
import './styles/index.less'
import './styles/icon.less'

import './utils/dayjs'

// 全局注册 Vant 中的组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
