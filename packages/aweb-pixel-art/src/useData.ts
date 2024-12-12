import { Ref, onMounted, shallowRef, nextTick, inject, getCurrentInstance, provide, ComponentInstance } from 'vue'
import { v4 } from 'uuid'
import type Konva from 'konva'

import { EditRecord } from '@aweb/pkg-common'
import type { PixelWhenData } from './use/useEvent'
import type { PixelCommonConfig } from './useConfig'
import PixelPalette from './PixelPalette.vue'

type PixelPaletteInst = InstanceType<typeof PixelPalette>

// 棋盘数据，类似store
type PixelCommonData = {
  pixelData: {
    get: () => Ref<PixelPaletteInst['pixelData']>
    set: (args: any) => void
  }
  config: PixelCommonConfig
  component: PixelPaletteInst
  when: Partial<PixelWhenData>
  layers: { layerId: string; layer: Konva.Layer }[]
  renderFlags: any[]
}
const paletteMap = {} as Record<string, PixelCommonData>

export const useData = function ({ id }: { id?: string } = {}) {
  // 情况1：外部组件使用
  let pid = id || ''
  // 情况2：子组件使用
  if (!pid) {
    pid = inject('pixelPaletteId', '')
  }
  // 情况3：根组件自己
  if (!pid) {
    pid = (getCurrentInstance()?.proxy as any)?.$props.id
  }

  const getData = function <T extends keyof PixelCommonData>(key: T) {
    if (!paletteMap[pid]) {
      paletteMap[pid] = {} as any
    }
    return paletteMap[pid][key]
  }
  const setData = function (key, data) {
    if (!paletteMap[pid]) {
      paletteMap[pid] = {} as any
    }
    paletteMap[pid][key] = data
  }

  return { getData, setData }
}
