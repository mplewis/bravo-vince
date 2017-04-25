import Vue from 'vue'

// eslint-disable-next-line no-unused-vars
import Body from './components/body/body.jsx'

import 'milligram/dist/milligram.css'
import './app.styl'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render () {
    return <Body />
  }
})
