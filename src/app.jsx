import Vue from 'vue'

import store from './store.js'
import Body from './components/body/body.jsx'

/* eslint-disable */
import '!style-loader!css-loader!milligram/dist/milligram.css'
import '!style-loader!css-loader!./app.styl'
/* eslint-enable */

const app = new Vue({
  store,
  ...Body
})

app.$mount('#app')
