import Header from '../header/header.jsx'
import Input from '../input/input.jsx'
import Output from '../output/output.jsx'
import Footer from '../footer/footer.jsx'

export default {
  name: 'Body',
  render () {
    return (
      <div class='container'>
        <div class='row'>
          <div class='column'>
            <Header />
          </div>
        </div>
        <div class='row'>
          <div class='column'>
            <Input />
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
    )
  }
}
