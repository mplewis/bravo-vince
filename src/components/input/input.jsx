import style from './input.styl'

export default {
  name: 'Input',
  props: {
    default: { type: String, required: true }
  },
  methods: {
    handleKeyup (e) {
      this.$store.dispatch('newInput', e.target.value)
    }
  },
  created () {
    this.$store.dispatch('newInput', this.default)
  },
  render () {
    return (
      <input class={style.in} type='text' onKeyup={this.handleKeyup} value={this.default} />
    )
  }
}
