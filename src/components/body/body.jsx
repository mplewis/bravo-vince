import Header from '../header/header.jsx'
import Input from '../input/input.jsx'
import Output from '../output/output.jsx'
import GhBanner from '../gh_banner/gh_banner.jsx'

import style from './body.styl'

export default {
  name: 'Body',
  render () {
    return (
      <div class={style.body}>
        <GhBanner />
        <div className='container'>
          <div class='row'>
            <div class='column'>
              <Header />
            </div>
          </div>
          <div class='row'>
            <div class='column'>
              <Input class={style.input} default='bravo vince artichoke' />
            </div>
          </div>
          <div class='row'>
            <div class='column'>
              <Output />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
