// Initiating main drawing area on #canvas element
var svg = SVG('canvas').size(960, 360)


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


// EMPLOYEE TIMELINES //
// Put the lines along the scale according to duration
var emp = svg.group()

emp
.line(470, 336, 470, 300)
.stroke({ color: '#999', width: 4 })

emp
.line(470, 286, 470, 268)
.stroke({ color: '#e97770', width: 4 })

emp
.line(470, 260, 470, 46)
.stroke({ color: '#c00', width: 4 })

emp
.line(470, 42, 470, 24)
.stroke({ color: '#2ecc71', width: 4 })

// ENTREPRENEUR TIMELINES //
// Create polylines representing the endeavor duration
var ent = svg.group()

ent
.polyline([[560, 336], [560, 260], [580, 260], [560, 260], [560, 132], [554, 132]])
.fill('none').stroke({ color: '#d92015', width: 2 })

ent
.polyline([[544, 260], [550, 260], [550, 180], [580, 180], [550, 180], [550, 110], [544, 110]])
.fill('none').stroke({ color: '#999', width: 2 })

ent
.polyline([[534, 220], [540, 220], [540, 90], [580, 90], [540, 90], [540, 30]])
.fill('none').stroke({ color: '#222', width: 2 })

