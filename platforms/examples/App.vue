<template>
  <div id="app">
    <div class="top-toolbar">
      <a
        href="https://stackblitz.com/~/github.com/kxxxlfe/vue-pixel-core?file=platforms/examples/App.vue"
        target="_blank"
      >
        查看代码(stackblitz)
      </a>
      <PixelTool :pixelData="pixelData" :pixelId="pixelId" />
    </div>
    <div class="palette-wrapper">
      <PixelPalette
        class="palette"
        :id="pixelId"
        :pixelData="pixelData"
        :grid="{ size: 20 }"
        :enableUndo="true"
        @change="onChangeData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { PixelPalette } from '@kxxxl-front-end/vue-pixel-core'
import { set } from 'lodash-es'

import PixelTool from './PixelTool/PixelTool.vue'
import data from './data.json'

export default defineComponent({
  components: { PixelPalette, PixelTool },
  setup(props, { emit }) {
    const state = reactive({
      pixelId: Date.now() + '',
    })

    const pixelData = ref(data)
    // 数据处理
    const onChangeData = function (newData: Function | { path: string; data: any } | any) {
      if (Reflect.has(newData, 'path')) {
        const { path, data } = newData
        set(pixelData.value, path, data)
        return
      }

      if (typeof newData === 'function') {
        return newData()
      }

      pixelData.value = newData
    }

    return {
      ...toRefs(state),
      pixelData,
      onChangeData,
    }
  },
})
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .top-toolbar {
    height: 200px;
    background-color: #333;
    flex-shrink: 0;

    a {
      font-size: 14px;
      color: #91caff;
      font-weight: bold;
    }
  }
  .palette-wrapper {
    flex: 1;
  }
}
</style>
