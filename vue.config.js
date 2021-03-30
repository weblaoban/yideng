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
                target: "http://47.118.51.151:8866/",
                // pathRewrite: {
                //     '^/api': ''
                // },
                changeOrigin: true
            }
        }
    }
}