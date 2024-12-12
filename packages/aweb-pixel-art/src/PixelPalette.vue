<template>
  <div class="palette" ref="wrapperRef" style="width: 100%; height: 100%">
    <KStage :config="stageConfig" ref="stage">
      <KLayer>
        <KGroup id="pixelBoardArea">
          <PixelBackground />
          <PixelBaseLine v-if="useBaseline" />
          <PixelLayer v-for="layer in innerLayers" :key="layer.id" :layerId="layer.id" :grids="layer.grids" />
        </KGroup>
      </KLayer>
    </KStage>
  </div>
</template>

<script lang="ts">
// 完整画板
import {
  PropType,
  computed,
  defineComponent,
  ref,
  onMounted,
  getCurrentInstance,
  toRef,
  provide,
  watch,
  nextTick,
} from 'vue'
import { v4 } from 'uuid'
import { KonvaComps } from './konva'
import { useUndo } from '@aweb/pkg-common'

import { useConfig, PixelCommonConfig } from './useConfig'
import { useData } from './useData'
import { usePixFunc } from './use/usePixFunc'
import { usePixelUndo } from './usePixelUndo'
import { useRenderred } from './use/useRenderred'
import { PixelLayerData, PixelGridData } from './types'
import PixelLayer from './PixelLayerGrids.vue'
import PixelBaseLine from './PixelBaseLine.vue'
import PixelBackground from './layers/PixelBackLayer.vue'

const { KStage, KLayer, KGroup, KRect } = KonvaComps

export default defineComponent({
  name: 'PixelPalette',
  components: { KStage, KLayer, KGroup, KRect, PixelLayer, PixelBaseLine, PixelBackground },
  props: {
    id: { type: String, default: v4() }, // 必须有，兼容多实例
    pixelData: { type: Array as PropType<PixelLayerData[]>, required: true },
    grid: { type: Object as PropType<Partial<PixelCommonConfig['grid']>> },
    border: { type: Object as PropType<Partial<PixelCommonConfig['border']>> },
    groupInfo: { type: Object as PropType<Partial<PixelCommonConfig['groupInfo']>> },
    layout: { type: Object as PropType<{ width: number; height: number }> },
    useBaseline: { type: Boolean, default: true },
    useUndo: { type: Boolean, default: false },
  },
  model: {
    prop: 'pixelData',
    event: 'change',
  },
  emits: ['change'],
  setup(props, { emit }) {
    // 可能有多个实例，设置id
    const pixelPaletteId = props.id
    provide('pixelPaletteId', pixelPaletteId)

    // 当前组件内容提供给use
    const ctx = getCurrentInstance()?.proxy as any
    const { setData } = useData({ id: props.id })
    setData('component', ctx)
    const pixelDataRef = toRef(props, 'pixelData')
    setData('pixelData', {
      get: () => pixelDataRef,
      set: newData => emit('change', newData),
    })

    const { setConfig, grid: gridCfg, border, colNum, rowNum } = useConfig({ id: props.id })
    const { addRenderFlag } = useRenderred({ id: props.id })
    const { resolve: paletteResolve } = addRenderFlag('palette')

    const innerLayers = computed(() => {
      if (!props.pixelData?.length) {
        return []
      }
      if (props.pixelData[0].grids) {
        return props.pixelData
      }

      // 支持单层编辑
      return [
        {
          id: '1',
          name: 'layer0',
          zIndex: 0,
          grids: props.pixelData,
        },
      ] as any as PixelLayerData[]
    })
    setConfig({
      grid: props.grid,
      border: props.border,
    })
    // 数据变化，行列配置变化
    const { centerAndPosition } = usePixFunc({ id: props.id })
    const freshPalette = async function () {
      setConfig({
        rowNum: innerLayers.value[0]?.grids.length || 0,
        colNum: innerLayers.value[0]?.grids[0]?.length || 0,
      })
      if (rowNum.value === 0) {
        return
      }
      await nextTick()
      centerAndPosition()
      paletteResolve()
    }
    watch(
      () => props.pixelData,
      function () {
        freshPalette()
      },
      { immediate: true }
    )

    const stageConfig = ref({
      width: props.layout?.width || 500,
      height: props.layout?.height || 500,
    })
    const wrapperRef = ref<HTMLElement>(null as any)
    const stage = ref<any>(null as any)
    provide('stageRef', stage)
    onMounted(async () => {
      // 容器有布局时使用容器布局，否则使用默认
      if (!props.layout) {
        const rect = wrapperRef.value.getBoundingClientRect()
        if (rect.width) {
          Object.assign(stageConfig.value, {
            width: rect.width,
            height: rect.height,
          })
        }
      }

      freshPalette()
    })

    // redo/undo
    let historyDo = null as any
    if (props.useUndo) {
      const { pixelHistory } = usePixelUndo()
      historyDo = useUndo({ editRecord: pixelHistory, isEnable: ref(true) })
    }

    return { wrapperRef, innerLayers, stageConfig, stage, pixelPaletteId, historyDo }
  },
})
</script>
