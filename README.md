To reproduce:

1. Clone the project
2. `npm install` _(done on npm 7+)_
3. `npm run dev`
4. `npm run build`

Logs:

```bash
  vite:config bundled config file loaded in 52ms +0ms
  vite:config using resolved config: {
  vite:config   resolve: { dedupe: undefined, conditions: [ 'solid' ], alias: [ [Object] ] },
  vite:config   plugin: [ [Function: solidPlugin] ],
  vite:config   server: {},
  vite:config   configFile: '/home/alexandre/Temp/vite-parsing-reproduction/vite.config.js',
  vite:config   inlineConfig: {
  vite:config     root: undefined,
  vite:config     base: undefined,
  vite:config     mode: undefined,
  vite:config     configFile: undefined,
  vite:config     logLevel: undefined,
  vite:config     clearScreen: undefined,
  vite:config     server: {}
  vite:config   },
  vite:config   root: '/home/alexandre/Temp/vite-parsing-reproduction',
  vite:config   base: '/',
  vite:config   publicDir: '/home/alexandre/Temp/vite-parsing-reproduction/public',
  vite:config   command: 'serve',
  vite:config   mode: 'development',
  vite:config   isProduction: false,
  vite:config   optimizeCacheDir: '/home/alexandre/Temp/vite-parsing-reproduction/node_modules/.vite',
  vite:config   plugins: [
  vite:config     'vite:pre-alias',
  vite:config     'alias',
  vite:config     'vite:dynamic-import-polyfill',
  vite:config     'vite:resolve',
  vite:config     'vite:html',
  vite:config     'vite:css',
  vite:config     'vite:esbuild',
  vite:config     'vite:json',
  vite:config     'vite:wasm',
  vite:config     'vite:worker',
  vite:config     'vite:asset',
  vite:config     'vite:define',
  vite:config     'vite:css-post',
  vite:config     'vite:client-inject',
  vite:config     'vite:import-analysis'
  vite:config   ],
  vite:config   build: {
  vite:config     target: [ 'es2019', 'edge16', 'firefox60', 'chrome61', 'safari11' ],
  vite:config     polyfillDynamicImport: true,
  vite:config     outDir: 'dist',
  vite:config     assetsDir: 'assets',
  vite:config     assetsInlineLimit: 4096,
  vite:config     cssCodeSplit: true,
  vite:config     sourcemap: false,
  vite:config     rollupOptions: {},
  vite:config     commonjsOptions: { include: [Array], extensions: [Array] },
  vite:config     minify: 'terser',
  vite:config     terserOptions: {},
  vite:config     cleanCssOptions: {},
  vite:config     write: true,
  vite:config     emptyOutDir: null,
  vite:config     manifest: false,
  vite:config     lib: false,
  vite:config     ssr: false,
  vite:config     ssrManifest: false,
  vite:config     brotliSize: true,
  vite:config     chunkSizeWarningLimit: 500
  vite:config   },
  vite:config   env: { BASE_URL: '/', MODE: 'development', DEV: true, PROD: false },
  vite:config   assetsInclude: [Function: assetsInclude],
  vite:config   logger: {
  vite:config     hasWarned: false,
  vite:config     info: [Function: info],
  vite:config     warn: [Function: warn],
  vite:config     error: [Function: error],
  vite:config     clearScreen: [Function: clearScreen]
  vite:config   },
  vite:config   createResolver: [Function: createResolver]
  vite:config } +2ms
  vite:deps Crawling dependencies using entries:
  vite:deps   /home/alexandre/Temp/vite-parsing-reproduction/index.html +0ms
  vite:resolve 0ms   ./index.jsx -> /home/alexandre/Temp/vite-parsing-reproduction/index.jsx +0ms
  vite:resolve 2ms   solid-js/web -> /home/alexandre/Temp/vite-parsing-reproduction/node_modules/solid-js/web/dist/web.js +3ms
  vite:resolve 1ms   solid-meta -> /home/alexandre/Temp/vite-parsing-reproduction/node_modules/solid-meta/dist/index.jsx +1ms
  vite:deps Scan completed in 123ms: {
  'solid-js/web': '/home/alexandre/Temp/vite-parsing-reproduction/node_modules/solid-js/web/dist/web.js',
  'solid-meta': '/home/alexandre/Temp/vite-parsing-reproduction/node_modules/solid-meta/dist/index.jsx'
} +117ms
Pre-bundling dependencies:
  solid-js/web
  solid-meta
(this will be run only when your dependencies or config have changed)
error when starting dev server:
Error: Parse error @:61:90
    at parse$4 (/home/alexandre/Temp/vite-parsing-reproduction/node_modules/vite/dist/node/chunks/dep-d13406fa.js:18339:353)
    at optimizeDeps (/home/alexandre/Temp/vite-parsing-reproduction/node_modules/vite/dist/node/chunks/dep-d13406fa.js:67549:29)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async runOptimize (/home/alexandre/Temp/vite-parsing-reproduction/node_modules/vite/dist/node/chunks/dep-d13406fa.js:68030:48)
    at async Server.httpServer.listen (/home/alexandre/Temp/vite-parsing-reproduction/node_modules/vite/dist/node/chunks/dep-d13406fa.js:68044:17)
```
