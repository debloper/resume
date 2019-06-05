let timeline = function (group, ends, color) {
  group
  .line(36, ends[0], 36, ends[1])
  .stroke({ color: color, width: 4 })
}

let title = function (group, text, altitude, fill) {
  group
  .text(text)
  .attr({ x: 60, y: altitude, fill: fill ? fill : '#333' })
}

let subtitle = function (group, text, altitude) {
  group
  .text(text)
  .attr({ x: 60, y: altitude })
  .font({ size: 12, fill: '#666' })
}

let legend = function (group, value, elevation) {
  group
  .text(value)
  .rotate(270)
  .fill('#444')
  .move((0-elevation), 0)
}

export { timeline, title, subtitle, legend }
