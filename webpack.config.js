/* 
    webpack 配置文件
*/
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    // 入口文件
    entry: path.join(__dirname, "./src/main.js"),
    // 出口文件
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
    },
    // 配置第三方插件的配置节点
    plugins: [
        new HtmlWebpackPlugin({
            // 模板文件路径
            template: path.join(__dirname, "./src/index.html"),
            // 生成的模板文件的名称
            filename: "index.html",
        }),
        // vue-loader 插件
        new VueLoaderPlugin()
    ],
    // 配置第三方的 loader 模块
    module: {
        // 匹配规则
        rules: [
            // css
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            // less
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            // scss
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            // images
            { test: /\.(gif|bmp|jpeg|png|jpg|svg)$/, use: "url-loader?name=[hash:8]-[name].[ext" },
            // url
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: "url-loader" },
            // vue
            { test: /\.vue$/, use: "vue-loader" },
            // babel
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
        ]
    },
    // 解析
    resolve: {
        // 修改 Vue 被导入时包的路径
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}