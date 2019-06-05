import * as utils from '../shared/utils.js'
import * as config from '../shared/config.js'

export default function draw (container) {

  //// INIT ////
  let svg = SVG(container).size(config.canvasW, config.canvasH)

  //// SCALE ////
  let scale = svg.group().id("ent-scale")

  // quarter markers: 1 quarter is 15px, i.e. (1+14)px
  scale
  .line(config.canvasW - 32, 10, config.canvasW - 32, config.canvasH)
  .stroke({ color: '#999', width: 8, dasharray: '1,14' })

  // year markers: 1 year is 60px, i.e. (1+59)px
  scale
  .line(config.canvasW - 24, 40, config.canvasW - 24, config.canvasH)
  .stroke({ color: '#777', width: 16, dasharray: '1,59' })

  // alternate year legends
  for (let y = 2012; y <= 2020; y += 2) {
    let elevation = 505 - (y - 2012) * 60
    utils.legend(scale, y.toString(), elevation, 'rtl')
  }

  //// TERMS ////
  let terms = svg.group().id("ent-terms")

  // Mozilla
  let termMozilla = terms.group().id("ent-term-mozilla")

  utils.spanner(termMozilla, [650, 220], 16, '#d92015')
  utils.title(termMozilla, 'Mozilla', 500, "#d92015", 'rtl')
  utils.subtitle(termMozilla, 'Volunteer\nPublic Speaker\nCommunity Leader', 525, 'rtl')

  // NexVend
  let termNexVend = terms.group().id("ent-term-nv")

  utils.spanner(termNexVend, [480, 235], 32, '#999')
  utils.title(termNexVend, 'NexVend', 300, "#999", 'rtl')
  utils.subtitle(termNexVend, 'Co-founder\nDirector & CTO', 325, 'rtl')

  // Applait
  let termApplait = terms.group().id("ent-term-applait")

  utils.spanner(termApplait, [380, 115], 48, '#222')
  utils.title(termApplait, 'Applait', 150, "#222", 'rtl')
  utils.subtitle(termApplait, 'Co-founder\nDirector & CEO', 175, 'rtl')
}
