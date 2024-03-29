const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    mode: 'production',
    entry:{
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'main.js',
        assetModuleFilename: '[name][ext]'
    },
    performance:{
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer:{
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'My Web Page',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
  };