// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      'rootValue': 40,  // 根元素大小px
      'propList': ['*'],  // *表示通用,所有属性都转为rem
      'selectorBlackList':['van'], //忽略转换正则匹配项
    }
  }
}
