export default function draw(container) {

  //// CONST ////
  const canvasW = 320
  const canvasH = 640

  // Initiating main drawing area on #canvas element
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

  // alternate year legends (@TODO: DRY)
  scale.text('2018').rotate(270).font({ fill: '#444' }).move(-145, 0)
  scale.text('2016').rotate(270).font({ fill: '#444' }).move(-265, 0)
  scale.text('2014').rotate(270).font({ fill: '#444' }).move(-385, 0)
  scale.text('2012').rotate(270).font({ fill: '#444' }).move(-505, 0)

  //// SPANS ////
  let terms = svg.group().id("emp-terms")

  // Long ago
  let termLongAgo = terms.group().id("emp-term-long-ago")

  termLongAgo
  .line(36, 625, 36, 550)
  .stroke({ color: '#999', width: 4 })

  termLongAgo
  .text('ThinkDigit, Nexshore, Olyvious')
  .attr({ x: 60, y: 550 })

  termLongAgo
  .text('Technical Writer &\nSoftware Engineer')
  .attr({ x: 60, y: 570 })

  // mquotient
  let termMQ = terms.group().id("emp-term-mq")

  termMQ
  .line(36, 535, 36, 505)
  .stroke({ color: '#e97770', width: 4 })

  termMQ
  .text(function (mq) {
    mq.tspan('mq').fill('#e97770')
    mq.tspan('uotient')
  })
  .attr({ x: 60, y: 515 })

  termMQ
  .text('Software Engineer, Frontend Lead')
  .attr({ x: 60, y: 515 })

  // Red Hat
  let termRH = terms.group().id("emp-term-rh")

  termRH
  .line(36, 490, 36, 145)
  .stroke({ color: '#c00', width: 4 })

  termRH
  .text('Red Hat')
  .attr({ x: 60, y: 180 })
  .fill('#ee2737')

  termRH
  .text('Software Engineer\nSource Browser\n2012-2014')
  .attr({ x: 60, y: 400 })

  termRH
  .text('Technical Product Manager\nInternal Tools\n2014-2016')
  .attr({ x: 60, y: 310 })

  termRH
  .text('Software Engineer\nopenshift.io Planner\n2016-2018')
  .attr({ x: 60, y: 220 })

  // DoSelect
  let termDO = terms.group().id("emp-term-DO")

  termDO
  .line(36, 145, 36, 100)
  .stroke({ color: '#2ecc71', width: 4 })

  termDO
  .text('DoSelect')
  .attr({ x: 60, y: 100 })
  .fill('#2ecc71')

  termDO
  .text('Senior Software Engineer, Full Stack')
  .attr({ x: 60, y: 120 })
}