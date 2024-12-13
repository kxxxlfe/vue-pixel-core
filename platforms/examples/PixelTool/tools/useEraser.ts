import { Ref, computed } from 'vue'
import { usePixEvent, PixelLayerData, PixelGridData } from '@kxxxl-front-end/vue-pixel-core'
import { useTool, ToolType } from '../usePixelTool'

// 画笔工具
export const useEraser = function ({ pixelData, pixelId }: { pixelData: Ref<PixelLayerData[]>; pixelId: any }) {
  const { activeTool, toolForm } = useTool()
  const { when } = usePixEvent({ id: pixelId })

  when({
    onGridPressed({ evt, r, c, currGrid, passByGrids, layerId }) {
      if (activeTool.value !== ToolType.eraser) {
        return
      }

      currGrid.color = 'transparent'
    },
  })
}
