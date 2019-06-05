import { canvasW, canvasH } from './config.js'

let timeline = function (group, ends, color) {
  group
  .line(36, ends[0], 36, ends[1])
  .stroke({ color: color, width: 4 })
}

let spanner = function (group, ends, offset, color) {
  group
  .polyline([
    [canvasW - 40, ends[0]],
    [canvasW - offset - 40, ends[0]],
    [canvasW - offset - 40, ends[1]],
    [canvasW - 40, ends[1]]
  ])
  .fill('none').stroke({ color: color, width: 2 })
}

let title = function (group, text, altitude, fill, from) {
  let offset = (from === 'rtl') ? (canvasW - 120) : 60
  let anchor = (from === 'rtl') ? 'end' : 'start'

  group
  .text(text)
  .attr({
    x: offset,
    y: altitude,
    fill: fill ? fill : '#333'
  })
  .font({ anchor: anchor })
}

let subtitle = function (group, text, altitude, from) {
  let offset = (from === 'rtl') ? (canvasW - 120) : 60
  let anchor = (from === 'rtl') ? 'end' : 'start'

  group
  .text(text)
  .attr({ x: offset, y: altitude })
  .font({ size: 12, fill: '#666', anchor: anchor })
}

let legend = function (group, value, elevation, from) {
  let angle = (from === 'rtl') ? 90 : 270
  let posX  = (from === 'rtl') ? elevation : (0-elevation)
  let posY  = (from === 'rtl') ? -208 : 0

  group
  .text(value)
  .rotate(angle)
  .fill('#444')
  .move(posX, posY)
}

export { timeline, spanner, title, subtitle, legend }
