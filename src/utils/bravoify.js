export default function (input) {
  const words = input.trim().toUpperCase().split(/\s+/)
  const vert = words[0].split('')
  const horiz = words.slice(1)
  horiz.forEach(h => {
    let found = false
    vert.forEach((v, i) => {
      if (found) return
      if (v.length > 1) return
      if (v !== h[0]) return
      vert[i] = h.split('').join(' ')
      found = true
    })
  })
  return vert.join('\n')
}
