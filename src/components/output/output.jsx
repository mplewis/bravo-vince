export default {
  name: 'Output',
  render () {
    return (
      <pre><code>{this.$store.state.output}</code></pre>
    )
  }
}
