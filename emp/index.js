import * as utils from '../shared/utils.js'

export default function draw(container) {

  //// CONST ////
  const canvasW = 240
  const canvasH = 640

  //// INIT ////
  let svg = SVG(container).size(canvasW, canvasH)

  //// SCALE ////
  let scale = svg.group().id("emp-scale")

  // quarter markers: 1 quarter is 15px, i.e. (1+14)px
  scale
  .line(32, 10, 32, canvasH)
  .stroke({ color: '#999', width: 8, dasharray: '1,14' })

  // year markers: 1 year is 60px, i.e. (3+57)px
  scale
  .line(24, 40, 24, canvasH)
  .stroke({ color: '#777', width: 16, dasharray: '1,59' })

  // alternate year legends
  for (let y = 2012; y <= 2020; y += 2) {
    let elevation = 505 - (y - 2012) * 60
    utils.legend(scale, y.toString(), elevation)
  }

  //// TERMS ////
  let terms = svg.group().id("emp-terms")

  // Long ago
  let termLongAgo = terms.group().id("emp-term-long-ago")

  utils.timeline(termLongAgo, [625, 550], '#999')

  utils.title(termLongAgo, 'ThinkDigit (9dot9)', 585)
  utils.subtitle(termLongAgo, 'Junior Writer', 605)

  utils.title(termLongAgo, 'Nexshore, Olyvious', 545)
  utils.subtitle(termLongAgo, 'Software Engineer', 565)

  // mquotient
  let termMQ = terms.group().id("emp-term-mq")

  utils.timeline(termMQ, [535, 505], '#e97770')
  utils.title(termMQ, function (mq) {
    mq.tspan('mq').fill('#e97770')
    mq.tspan('uotient')
  }, 510)
  utils.subtitle(termMQ, 'Software Engineer\nFrontend Lead', 510)

  // Red Hat
  let termRH = terms.group().id("emp-term-rh")

  utils.timeline(termRH, [490, 145], '#c00')
  utils.title(termRH, 'Red Hat', 180, '#ee2737')

  utils.subtitle(termRH, 'Software Engineer\nSource Browser\n2012-2014', 400)
  utils.subtitle(termRH, 'Technical Product Manager\nInternal Tools\n2014-2016', 310)
  utils.subtitle(termRH, 'Software Engineer\nopenshift.io Planner\n2016-2018', 220)

  // DoSelect
  let termDO = terms.group().id("emp-term-DO")

  utils.timeline(termDO, [145, 105], '#2ecc71')
  utils.title(termDO, 'DoSelect', 95, '#2ecc71')
  utils.subtitle(termDO, 'Senior Software Engineer\nFull Stack', 115)
}
