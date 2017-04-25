import Vue from 'vue'

import Body from './components/body/body.jsx'

import 'milligram/dist/milligram.css'
import './app.styl'

const vue = new Vue({
  el: '#app',
  render () {
    return <Body />
  }
})

export default vue
