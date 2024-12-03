// 判断stage渲染完成，可能存在多个子组件有自己的渲染逻辑，需要所有渲染完成才能resolve
import { useData } from '../useData'

export const useRenderred = function ({ id }: { id?: string } = {}) {
  const { getData, setData } = useData({ id })

  if (!getData('renderFlags')) {
    setData('renderFlags', [])
  }

  const addRenderFlag = function (key: string) {
    let renderFlags = getData('renderFlags')
    const idx = renderFlags.findIndex(f => f.key === key)
    if (idx >= 0) {
      renderFlags.splice(idx, 1)
    }
    let resolve
    const done = new Promise(res => {
      resolve = res
    })

    renderFlags.push({
      key,
      done,
      resolve,
    })

    return { resolve }
  }
  const isRenderred = function () {
    const renderFlags = getData('renderFlags')
    return Promise.all(renderFlags.map(r => r.done))
  }

  return { isRenderred, addRenderFlag }
}
