module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  },
  lintOnSave: true,
  // css:{
  //   loaderOptions: {
  //     postcss: {
  //       plugins: {
  //         autoprefixer: {},
  //         "postcss-px-to-viewport": {
  //           viewportWidth:375, //视察的宽度，对应设计稿的宽度
  //           viewportHeigth:667, //视窗的高度，对应设计稿的高度（也可以不配置）
  //           unitPrecision:5, //指定px转换为视窗单位值的小数位数
  //           viewportUnit:'vw', //指定需要转换成的视窗单位，建议使用vw
  //           selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类，
  //           minPixelValue:1, //小于或等于‘1px’不转换为视窗单位
  //           mediaQuery:false,// 允许在媒体查询中转换px'
  //         }
  //       }
  //     }
  //   }
  // }
}