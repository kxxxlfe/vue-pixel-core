<template>
  <div id="app">
    <div class="left-toolbar"></div>
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
    <div class="right-toolbar">
      <a
        href="https://stackblitz.com/~/github.com/kxxxlfe/vue-pixel-core?file=platforms/examples/App.vue"
        target="_blank"
      >
        查看代码
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { PixelPalette } from '@kxxxl-front-end/vue-pixel-core'
import { set } from 'lodash-es'

import data from './data.json'

export default defineComponent({
  components: { PixelPalette },
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
}
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;

  display: flex;

  .left-toolbar {
    width: 200px;
    height: 100%;
    background-color: #333;
  }
  .palette-wrapper {
    flex: 1;
  }
  .right-toolbar {
    width: 200px;
    height: 100%;
    background-color: #333;
  }
}
</style>
