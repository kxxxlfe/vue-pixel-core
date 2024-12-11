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

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>必填；提供给hook使用；用于区分多个棋盘场景</td>
      <td>`string` or `number`</td>
    </tr>
    <tr>
      <td>pixelData</td>
      <td>像素图数据。为了支持多层，为3维数组</td>
      <td>
        `PixelData`
      </td>
    </tr>
        <tr>
      <td>grid</td>
      <td>像素格子相关配置</td>
      <td>
        ```
          {
            size: number; // 格子尺寸，默认20
            render: VueComponent; // 自定义渲染格子，传递一个vue组件
          }
        ```
      </td>
    </tr>
  </tbody>
</table>