import { Ref, onMounted, shallowRef, nextTick } from 'vue'
import type Konva from 'konva'

import type { PixelPaletteInst } from '../types'
import { useConfig } from '../useConfig'
import { useData } from '../useData'
import { useRenderred } from './useRenderred'
import { scaleByPoint } from '../utils'

export const usePixFunc = function ({ id }: { id?: string } = {}) {
  let innerStage: Ref<Konva.Stage> = shallowRef(null as any)
  const { getData } = useData({ id })
  const getStage = function () {
    if (innerStage.value) {
      return innerStage.value
    }
    innerStage.value = getData('component')?.stage?.getNode()
    return innerStage.value
  }
  const getHistoryDo = () => getData('component')?.historyDo

  // 将棋盘重置到容器中间，缩放到合适大小
  const { rowNum, colNum, grid, border } = useConfig({ id })
  const centerAndPosition = async function () {
    const stage = getStage()
    stage.scale({ x: 1, y: 1 })
    stage.position({ x: 0, y: 0 })
    const { size: gsize } = grid.value
    const { size: bsize } = border.value
    const bwidth = (gsize + bsize) * colNum.value + bsize
    const bheight = (gsize + bsize) * rowNum.value + bsize
    const stageWidth = stage.width()
    const stageHeight = stage.height()
    const padding = { x: 100, y: 100 }
    const ratio = +Math.min((stageWidth - padding.x) / bwidth, (stage.height() - padding.y) / bheight).toFixed(1)
    stage.scale({ x: ratio, y: ratio })
    // scaleByPoint({ x: stageWidth / 2, y: stageHeight / 2, scale: ratio })

    stage.position({
      x: Math.round(Math.abs(stageWidth - bwidth * ratio) / 2),
      y: Math.round(Math.abs(stageHeight - bheight * ratio) / 2),
    })
  }
  const scaleByCenter = function ({ newScale }: { newScale: number }) {
    const stage = getStage()
    return scaleByPoint({ x: stage.width() / 2, y: stage.height() / 2, newScale, stage })
  }
  const positionByDelta = function ({ deltaX = 0, deltaY = 0 }) {
    const stage = getStage()
    const { x, y } = stage.position()
    stage.position({ x: x + deltaX, y: y + deltaY })
  }

  // 渲染完成
  const { isRenderred } = useRenderred({ id })
  // 当前棋盘导出图片，参数 https://konvajs.org/api/Konva.Layer.html#toDataURL__anchor
  const exportImage = async function (...args) {
    await isRenderred()
    const stage = getStage()
    const area = stage.find('#pixelBoardArea')[0]

    return area.toDataURL(...args)
  }

  return {
    getStage,
    getHistoryDo,
    stage: innerStage,
    centerAndPosition,
    scaleByCenter,
    positionByDelta,
    exportImage,
    isRenderred,
  }
}
