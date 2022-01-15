module.exports = {
    lintOnSave: false, //这里禁止使用eslint-loader
    publicPath: "./",
    chainWebpack: config => {
        console.log(config, 'chainWebpack')
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
        // 移除 preload 插件
        config.plugins.delete('preload');
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 192, // // 设计稿宽度的1/10
                        selectorBlackList: ['.ivu'], // 忽略转换正则匹配项
                        minPixelValue: 2,
                        propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
                    })
                ]
            }
        }
    }
}