export default function (input) {
  const words = input.trim().toUpperCase().split(/\s+/)
  const vert = words[0].split('')
  const horiz = words.slice(1)
  horiz.forEach(h => {
    vert.forEach((v, i) => {
      if (v.length > 1) return
      if (v !== h[0]) return
      vert[i] = h.split('').join(' ')
    })
  })
  return vert.join('\n')
}
