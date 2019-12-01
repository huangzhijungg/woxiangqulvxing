const webpack = require('webpack')
module.exports = {
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    // // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // // outputDir: 'dist',
    // // pages:{ type:Object,Default:undfind }
    // assetsDir: "./",
    // devServer: {
    //     port: 8888, // 端口号
    //     host: "localhost",
    //     https: false, // https:{type:Boolean}
    //     open: true, //配置自动启动浏览器
    //     // proxy: {
    //     //     '/api': {
    //     //       target: 'http://woxiangqu-tour.cn/mobile/amanager/info/hotel/ajaxHotelList.htm',
    //     //       changeOrigin: true,
    //     //       ws: true,
    //     //       pathRewrite: {
    //     //         '^/api': ''
    //     //       }
    //     //     }
    //     //   }
    // },
   
    runtimeCompiler: true,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"

            })

        ]

    },
  
};
