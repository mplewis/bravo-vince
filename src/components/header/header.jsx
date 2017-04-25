import style from './header.styl'

export default {
  name: 'Header',
  render () {
    return (
      <div class={style.header}>
        <h1 class={style.h1}>
          B
        </h1>
        <h1 class={style.h1}>
          R
        </h1>
        <h1 class={style.h1}>
          A
        </h1>
        <h1 class={style.h1}>
          V I N C E
        </h1>
        <h1 class={style.h1}>
          O
        </h1>
      </div>
    )
  }
}
