const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000,
   watchContentBase: true
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: [{
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            plugins: ['@babel/plugin-transform-runtime']
        }
    }]
     },
     {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
      },
    },
   ]
 },
 resolve: {
  extensions: ['.wasm', '.mjs', '.js', '.json'],
  alias: {
    Component: path.resolve(__dirname, 'src/components/')
  }
},
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
}