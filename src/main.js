import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
// import FullPage from 'FullPage'
// import fullPageMixin from 'fullPageMixin'
import commcss from './tools/comm.css'
import fastclick from 'fastclick'
import echarts from 'echarts'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import {chartPaint} from './tools/paint_charts.js'  //echarts 图形方法
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.use(VueTouch,{name:'v-touch'});
Vue.use(VueFullpage);
// Vue.use({chartPaint});
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$chartPaint = chartPaint;
fastclick.attach(document.body)
// AOS.init();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // mixins:[fullPageMixin],
  render: h => h(App)
})
