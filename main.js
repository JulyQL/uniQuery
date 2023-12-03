import App from './App'

// 引入全局uniQuery
import uniQuery from '@/libs/index'

// #ifdef H5
import Zdebug from 'zdebug.js'
Zdebug()
// #endif

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(uniQuery)

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)

	app.use(uniQuery)

	return {
		app
	}
}
// #endif