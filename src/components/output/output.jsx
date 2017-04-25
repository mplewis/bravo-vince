import style from './output.styl'

export default {
  name: 'Output',
  render () {
    return (
      <div class={style.container}>
        <pre class={style.pre}>
          <code class={style.code}>
            {this.$store.state.output}
          </code>
        </pre>
      </div>
    )
  }
}
