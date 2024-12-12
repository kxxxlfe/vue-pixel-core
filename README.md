# vue-pixel-core

<h2 align="center"> 基于`Vue`和`konva`的像素图编辑基础组件 </h2>
<p align="center">`vue-pixel-core` 用于实现像素编辑器的基础组件。项目不实现具体的编辑功能，只提供绘制和必要的hook</p>

## Quick Start

**Step1. Install**

```bash
$ npm install @kxxxl-front-end/vue-pixel-core
```

**Step2. Use `PixelPalette` component in your project**

```
<template>
  <div id="app">
      <PixelPalette
        :id="pixelId"
        :pixelData="pixelData"
        :enableUndo="true"
        @change="onChangeData"
      />
  </div>
</template>

<script>
import { PixelPalette } from "@kxxxl-front-end/vue-pixel-core";

export default defineComponent({
  components: { PixelPalette },
})
<script>
```

<br/>

## Demo

[地址](https://kxxxlfe.github.io/vue-pixel-core/)

## 数据定义

> 为了实现多层编辑，需要一个3维数组格式如下

```typescript
// 每个格子数据
interface PixelGridData {
  color?: string
  disabled?: boolean
  [key: string]: any
}

// 每一层数据
interface PixelLayerData {
  id: string
  name: string
  zIndex: number
  grids: PixelGridData[][]
}

// pixelData格式
type PixelData = PixelLayerData[]
```

## Props

| Name                        | Description                                    | Default                                                |
|-----------------------------|------------------------------------------------|--------------------------------------------------------|
| [id](#api-id)               | 提供给hook使用；用于区分多个棋盘场景。           | required                                               |
| [pixelData](#api-pixelData) | 像素图数据                                     | `[]`                                                   |
| [grid](#api-grid)           | 像素格子相关配置                               | `{ size: 20, render: null }`                           |
| [border](#api-border)       | 边框相关配置                                   | `{ size: 1, color: '#595959', groupColor: '#bfbfbf',}` |
| showBaseline                | 是否显示棋盘基线以及格子数字标识               | true                                                   |
| layout                      | 棋盘宽高数据；不设置会使用当前棋盘容器dom的宽高 | 无                                                     |
| enableUndo                  | 是否支持撤销/重做，会占用快捷键                 | false                                                  |
| groupInfo                   | 矩阵内的格子为一组，可以按组展示                | 默认不分组：`groupInfo: { row: 0, col: 0 },`            |

<details><summary><b>Props详细<b></summary>

<section id="api-id">
  <h4>id</h4>

  ```typescript
  import { usePixFunc, usePixEvent } from '@kxxxl-front-end/vue-pixel-core'

  const { getStage, scaleByCenter, centerAndPosition } = usePixFunc({ id: pixelId })
  const { when } = usePixEvent({ id: pixelId })
  ```
</section>

<section id="api-pixelData">
 <h4>pixelData</h4>

  - 为了实现多层编辑，需要一个3维数组格式如下

  ```typescript
  // 每个格子数据
  interface PixelGridData {
    color?: string // 当前格子色值
    disabled?: boolean // 格子是否可以编辑
    [key: string]: any // 可以添加自定义字段，用于自定义格子渲染
  }

  // 每一层数据
  interface PixelLayerData {
    id: string
    name: string
    zIndex: number
    grids: PixelGridData[][]
  }

  // pixelData格式
  type PixelData = PixelLayerData[]
  ```
  
  - [样例数据](https://github.com/kxxxlfe/vue-pixel-core/blob/main/examples/data.json)
</section>

<section id="api-grid">
  <h4>grid</h4>

  - demo
  
  ```html
    <PixelPalette
      :id="pixelId"
      :pixelData="pixelData"
      :grid="{ size: 20, render: CustomGrid }"
    />
  ```

  - 说明
    - size: 格子尺寸
    - render: 传递一个vue组件，用于自定义渲染每一个格子

  - render实例

  ```typescript

  <template>
    <KGroup :width="gridSize" :height="gridSize">
      <KRect :config="rectConfig" :x="0" :y="0" :width="gridSize" :height="gridSize" />
      <KText v-if="grid.colorIdx" :config="{ x: 18, y: 18, align: 'right', fill: '#fff'}" />
      <KImage v-if="grid.isQuill" :config="{ x: 18, y: 18, image: quillImage }" />
    </KGroup>
  </template>

  <script lang="ts">
  // 自定义树形，支持自定义节点
  import { PropType, computed, defineComponent, ref } from 'vue'
  import { KonvaComps, PixelGridData } from '@kxxxl-front-end/vue-pixel-core'

  import quillPng from './quill.png'
  const quillImage = new Image()
  quillImage.src = quillPng // konva要求传递的image数据

  const { KText, KGroup, KRect, KImage } = KonvaComps

  export default defineComponent({
    name: 'CustomGrid',
    components: { KText, KGroup, KRect, KImage },
    props: {
      grid: { type: Object as PropType<PixelGridData>, required: true }, // 当前渲染的格子
      isHover: Boolean, // 指针是否经过格子
      // 格子所在行列数
      row: { type: Number, required: true }, 
      col: { type: Number, required: true },
    },
    setup(props, { emit }) {

      return { quillImage }
    },
  })
  </script>

  ```
</section>


</details>