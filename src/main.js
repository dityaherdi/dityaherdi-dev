import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import UIkit from 'uikit'
import './assets/style/custom-style.less'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
