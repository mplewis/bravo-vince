import Vue from 'vue'

import Body from './components/body/body.jsx'

/* eslint-disable */
import '!style-loader!css-loader!milligram/dist/milligram.css'
import '!style-loader!css-loader!./app.styl'
/* eslint-enable */

const vue = new Vue({
  el: '#app',
  render () { return <Body /> }
})

export default vue
