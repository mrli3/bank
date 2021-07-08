const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5, // 换算的基数
            selectorBlackList: [], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ]
      }
    }
  },
  chainWebpack: config => {
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
        .test(/\.pdf|ico$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
            limit: 10000,
        })
    },
    // 部署应用时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // publicPath:'/monitor/',
    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: 'dist',
    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    indexPath: 'index.html',
    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,
    // 构建多页面应用，页面的配置
    lintOnSave: false,
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '质量评定',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // 当使用只有入口的字符串格式时，模板会被推导为 `public/subpage.html`，并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      subpage: 'src/main.js'
    },
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,
    // Babel 显式转译列表
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: true,
    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
    integrity: false,
    // 配置less
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
          path.resolve(__dirname, './src/assets/common/global.less')
        ]
      }
    },
    devServer: {
        open: true, //是否启动打开浏览器
        // 跨域
        proxy: {
            "/api": {
            // target:"http://192.168.1.131:8087",   //本地
            target:"http://120.46.158.119:18087",   //测试
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            },
            publicPath: './',
            outputDir: 'dist',
            assetsDir: 'static'
        }
      },
  
    },
  }
  