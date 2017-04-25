import style from './header.styl'
import vince from './vince.jpg'

export default {
  name: 'Header',
  render () {
    return (
      <div class={style.header}>
        <a href={vince}>
          <img class={style.vince} src={vince} alt='V I N C E'/>
        </a>
      </div>
    )
  }
}
