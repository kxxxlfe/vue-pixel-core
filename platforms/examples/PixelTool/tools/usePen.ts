import { Ref, computed } from 'vue'
import { usePixEvent, PixelLayerData, PixelGridData } from '@kxxxl-front-end/vue-pixel-core'
import { useTool, ToolType } from '../usePixelTool'

// 画笔工具
export const usePen = function ({ pixelData, pixelId }: { pixelData: Ref<PixelLayerData[]>; pixelId: any }) {
  const { activeTool, toolForm } = useTool()
  const { when } = usePixEvent({ id: pixelId })

  when({
    onGridPressed({ evt, r, c, currGrid, passByGrids, layerId }) {
      if (activeTool.value !== ToolType.pen) {
        return
      }

      currGrid.color = toolForm.value.color
    },
  })
}
