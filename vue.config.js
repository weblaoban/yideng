module.exports = {
    filenameHashing: true,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        exclude: /(node_module)/,
                        remUnit: 100,
                        baseDpr: 2
                    })
                ]
            },
            sass: {
                // data: `@import "@/scss/resource.scss";`
            }
        }
    },
    devServer: {
        port: '8089',
        proxy: {
            "/api": {
                // target: "http://47.99.112.124:8885/allwxopeninterface",
                target: "http://www.hw1234.cn:8885/allwxopeninterface",
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    }
}