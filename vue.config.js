var path = require('path');
var webpack = require('webpack');

console.log('The custom config is used');

module.exports = {
  configureWebpack: {
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
            result.request = result.request.replace(/typeorm/, "typeorm/browser");
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    optimization: {
        minimize: false
    }
  }
    
};