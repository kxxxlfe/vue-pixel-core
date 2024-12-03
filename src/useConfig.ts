// 记录全局配置
import { reactive, toRefs, provide, Ref, computed } from 'vue'
import { merge, isEmpty, cloneDeep } from 'lodash-es'
import { useData } from './useData'
import { DeepPartial } from './types'

const defaultConfig = {
  grid: { size: 20, render: null as null | Function },
  border: {
    size: 1,
    color: '#595959',
    groupColor: '#bfbfbf',
  },
  board: { backLayerRender: null as null | Function, foreLayerRender: null as null | Function },
  groupInfo: { row: 0, col: 0 },
  rowNum: 0,
  colNum: 0,
}

export type PixelCommonConfig = typeof defaultConfig

// 父元素通过root ref
export const useConfig = function ({ id }: { id?: string } = {}) {
  const { getData, setData } = useData({ id })

  let pixelConfig: PixelCommonConfig = getData('config')
  if (!pixelConfig) {
    pixelConfig = reactive(cloneDeep(defaultConfig))
    setData('config', pixelConfig)
  }

  const setConfig = function (cfg: DeepPartial<PixelCommonConfig>) {
    merge(pixelConfig, cfg)
  }

  // 整个棋盘的rect宽高
  const boardRect = computed(() => {
    const { colNum, rowNum, grid, border } = pixelConfig
    return {
      width: colNum * grid.size + (colNum + 1) * border.size,
      height: rowNum * grid.size + (rowNum + 1) * border.size,
    }
  })

  return { ...toRefs(pixelConfig), setConfig, boardRect }
}
