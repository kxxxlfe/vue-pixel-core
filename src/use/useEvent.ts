import { reactive, Ref, onMounted, shallowRef, nextTick, provide, inject, toRefs, onBeforeUnmount } from 'vue'
import type Konva from 'konva'
import { merge, isEmpty, cloneDeep } from 'lodash-es'

import { useData } from '../useData'
import type { PressEvent, PixelPaletteInst } from '../types'

const defaultWhen = {
  onGridPressed: [] as ((e: PressEvent) => any)[], // 按下格子，Press和Pressmove都算，可以通过type判断类型
  onGridHover: [] as ((e: { r: number; c: number; grid: any; layerId: any }) => any)[],
}

export type PixelWhenData = typeof defaultWhen
type PixelWhenSetData = {
  [K in keyof PixelWhenData]: PixelWhenData[K] extends (infer U)[] ? U : never
}

// 对外暴露的事件
export const usePixEvent = function ({ id }: { id?: string } = {}) {
  const { getData, setData } = useData({ id })
  let pixelWhen = getData('when')
  if (!pixelWhen) {
    pixelWhen = reactive(cloneDeep(defaultWhen))
    setData('when', pixelWhen)
  }

  const unbinds = [] as Function[]
  const when = function (cfg: Partial<PixelWhenSetData>) {
    Object.entries(cfg).forEach(([key, func]) => {
      const target = pixelWhen[key]
      if (!target.includes(func)) {
        target.push(func)
      }
    })
    // 卸载方法
    unbinds.push(() => {
      Object.entries(cfg).forEach(([key, func]) => {
        const target = pixelWhen[key]
        if (target.includes(func)) {
          pixelWhen[key] = target.filter(f => f !== func)
        }
      })
    })
  }

  onBeforeUnmount(() => {
    unbinds.forEach(func => func())
  })

  const call = function <T extends keyof PixelWhenData>(key: T, ...data: Parameters<PixelWhenData[T][number]>) {
    const handlers = pixelWhen[key]
    handlers?.forEach(handler => {
      return handler(...data)
    })
  }

  return { ...toRefs(pixelWhen), call, when }
}
