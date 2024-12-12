import type Konva from 'konva'

// 详见：https://konvajs.org/docs/sandbox/Zooming_Relative_To_Pointer.html
export const scaleByPoint = function ({
  x,
  y,
  newScale,
  stage,
}: {
  x: number
  y: number
  newScale: number
  stage: Konva.Stage
}) {
  var oldScale = stage.scaleX()
  var pointer = { x, y }

  var mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  }

  stage.scale({ x: newScale, y: newScale })

  var newPos = {
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  }
  stage.position(newPos)
}
