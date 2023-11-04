import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

// #ifdef H5
import Zdebug from 'zdebug.js'
Zdebug()
// #endif

// 引入全局uniQuery
import uniQuery from '@/libs/index'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uniQuery)

const app = new Vue({
  ...App
})
app.$mount()
