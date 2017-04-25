import Header from '../header/header.jsx'
import Input from '../input/input.jsx'
import Output from '../output/output.jsx'
import Footer from '../footer/footer.jsx'

import style from './body.styl'

export default {
  name: 'Body',
  render () {
    return (
      <div class={style.body}>
        <div className='container'>
          <div class='row'>
            <div class='column'>
              <Header />
            </div>
          </div>
          <div class='row'>
            <div class='column'>
              <Input default='BRAVO VINCE' />
            </div>
            <div class='column'>
              <Output />
            </div>
          </div>
          <div class='row'>
            <div class='column'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
