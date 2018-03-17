// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import router from './router'
import Http from './plugglables/http'
import '../node_modules/bulma/css/bulma.css'
import '../node_modules/bulmaswatch/minty/bulmaswatch.min.css'

Vue.use(Http)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Root)
})
