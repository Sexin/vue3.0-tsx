module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: "http://192.168.0.43:8080/pallasa_cloudteachsly/",
                changeOrign: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        overlay: {
            warning: false,
            errors: false
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}