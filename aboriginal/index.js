export default function draw(container) {

  // Initiating main drawing area on #canvas element
  var svg = SVG(container).size(960, 360)


  // Reusables
  const titleFontEmp = { size: 16, fill: '#444', anchor: 'end' }
  const detailFontEmp = { size: 12, fill: '#666', anchor: 'end' }
  const titleFontEnt = { size: 16, fill: '#444' }
  const detailFontEnt = { size: 12, fill: '#666' }

  // SCALE //
  // Set the scale group, with year markers and legends
  var scale = svg.group()

  // month markers
  scale
  .line(480, 24, 480, 336)
  .stroke({ color: '#999', width: 8, dasharray: '1,8' })

  // year markers
  scale
  .line(480, 60, 480, 300)
  .stroke({ color: '#666', width: 16, dasharray: '2,70' })

  // year legends
  scale.text('2012').font({ fill: '#444' }).move(492, 270)
  scale.text('2014').font({ fill: '#444' }).move(492, 198)
  scale.text('2016').font({ fill: '#444' }).move(492, 126)
  scale.text('2018').font({ fill: '#444' }).move(492,  54)


  // EMPLOYMENT TIMELINES //
  // Put the lines along the scale according to duration
  var emp = svg.group()

  // long long ago
  emp
  .line(470, 336, 470, 300)
  .stroke({ color: '#999', width: 4 })

  emp
  .text('ThinkDigit, Nexshore, Olyvious')
  .attr({ x: 450, y: 300 })
  .font(titleFontEmp)

  emp
  .text('Technical Writer, Software Engineer, Software Engineer')
  .attr({ x: 450, y: 320 })
  .font(detailFontEmp)

  // mquotient
  emp
  .line(470, 286, 470, 268)
  .stroke({ color: '#e97770', width: 4 })

  emp
  .text(function (mq) {
    mq.tspan('mq').fill('#e97770')
    mq.tspan('uotient')
  })
  .attr({ x: 450, y: 275 })
  .font(titleFontEmp)

  emp
  .text('Software Engineer, Frontend Lead')
  .attr({ x: 450, y: 275 })
  .font(detailFontEmp)

  // Red Hat
  emp
  .line(470, 260, 470, 46)
  .stroke({ color: '#c00', width: 4 })

  emp
  .text('Red Hat')
  .attr({ x: 450, y: 120 })
  .font(titleFontEmp)
  .fill('#ee2737')

  emp
  .text('Software Engineer, Source Browser, 2012-2014\nTechnical Product Manager, Internal Tools, 2014-2016\nSoftware Engineer, openshift.io Planner, 2016-2018')
  .attr({ x: 450, y: 140 })
  .font(detailFontEmp)

  // DoSelect
  emp
  .line(470, 42, 470, 24)
  .stroke({ color: '#2ecc71', width: 4 })

  emp
  .text('DoSelect')
  .attr({ x: 450, y: 10 })
  .font(titleFontEmp)
  .fill('#2ecc71')

  emp
  .text('Senior Software Engineer, Full Stack')
  .attr({ x: 450, y: 30 })
  .font(detailFontEmp)


  // ENTREPRENEURSHIP TIMELINES //
  // Create polylines representing the endeavor duration
  var ent = svg.group()

  // mozilla
  ent
  .polyline([[560, 336], [560, 260], [580, 260], [560, 260], [560, 132], [554, 132]])
  .fill('none').stroke({ color: '#d92015', width: 2 })

  ent
  .text('Mozilla')
  .attr({ x: 600, y: 240 })
  .font(titleFontEnt)
  .fill('#d92015')

  ent
  .text('Volunteer, Speaker, Community Leader')
  .attr({ x: 600, y: 260 })
  .font(detailFontEnt)

  // NexVend
  ent
  .polyline([[544, 260], [550, 260], [550, 180], [580, 180], [550, 180], [550, 110], [544, 110]])
  .fill('none').stroke({ color: '#999', width: 2 })

  ent
  .text('NexVend Sdn. Bhd.')
  .attr({ x: 600, y: 160 })
  .font(titleFontEnt)
  .fill('#999')

  ent
  .text('Co-founder, Director & CTO')
  .attr({ x: 600, y: 180 })
  .font(detailFontEnt)

  // applait
  ent
  .polyline([[534, 220], [540, 220], [540, 90], [580, 90], [540, 90], [540, 30]])
  .fill('none').stroke({ color: '#222', width: 2 })

  ent
  .text('Applait Technologies LLP')
  .attr({ x: 600, y: 70 })
  .font(titleFontEnt)
  .fill('#222')

  ent
  .text('Co-founder, Director & CEO')
  .attr({ x: 600, y: 90 })
  .font(detailFontEnt)
}
