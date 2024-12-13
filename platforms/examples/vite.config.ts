import { resolve } from 'path'
import { defineConfig, loadEnv, type UserConfig } from 'vite'
import pluginVue2 from '@vitejs/plugin-vue2'
import pluginVue2JSX from '@vitejs/plugin-vue2-jsx'
import pluginBasicSsl from '@vitejs/plugin-basic-ssl'

export default ({ mode }) => {
  const envs = loadEnv(mode, process.cwd(), '')
  const isProd = envs.NODE_ENV === 'production'
  console.log(resolve(__dirname, 'src/index.ts'))
  const config = {
    publicDir: resolve('./public'), // 静态资源路径
    base: isProd ? './' : '',
    plugins: [
      pluginVue2(),
      pluginVue2JSX(),
      // pluginBasicSsl()
    ].filter(f => !!f),
    define: {
      'process.env': {
        VITE_ENV: true,
      },
    },
    server: {
      port: Number(4936),
      open: '/',
      cors: true,
      host: true,
      proxy: {},
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.jsx', '.tsx'],
      alias: [
        { find: '@', replacement: resolve('./') },
        { find: '~@', replacement: resolve('./') },
        { find: /^vue$/, replacement: resolve('./node_modules/vue/dist/vue.runtime.esm.js') },
        { find: 'lodash-es', replacement: resolve('./node_modules/lodash-es') },
      ],
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
        plugins: [],
        loader: {
          '.js': 'jsx',
        },
      },
    },

    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        // 告诉打包工具 在external配置的 都是外部依赖项  不需要打包
        external: [],
        output: {
          // 为入口文件配置不带hash的文件名
          entryFileNames: `[name].js`,
          // 为代码分块配置不带hash的文件名
          chunkFileNames: `[name].js`,
          // 为静态资源配置不带hash的文件名
          assetFileNames: `[name].[ext]`,
        },
      },
      sourcemap: isProd ? false : true,
    },
  } as UserConfig

  return defineConfig(config)
}
