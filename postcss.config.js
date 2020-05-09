/**
 * PostCSS 的配置文件
*/

// PostCSS 配置文件需要导出一个对象
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    // VueCLI 已经在内部配置了 autoprefixer
    // autoprefixer: {
    //   // browsers 用来配置要兼容的系统（浏览器）环境
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },

    // 把 px 转化成 rem
    'postcss-pxtorem': {
      // 750 宽的设计稿：750 / 10 = 75
      // 375 宽的设计稿：375 / 10 = 37.5
      // Vant 组件库是基于逻辑像素 375 写的
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
