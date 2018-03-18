// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import router from './router'
import http from './plugglables/http'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'bulma/css/bulma.css'
import 'bulmaswatch/minty/bulmaswatch.min.css'
import 'bulma-switch/dist/bulma-switch.min.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(http)
Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Root)
})
