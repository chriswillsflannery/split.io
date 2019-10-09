const path = require('path');

module.exports = {
  entry: {
    'home': './client/index.js',
    'workouts': './client/splash.js'
  },
  mode: process.env.NODE_ENV,
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'build'),
    // chunkFileName: '[id].chunk.js'
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/build/'),
    compress: true,
    port: 8080,
    proxy: {
      '/signup': 'http://localhost:3000', // any front end element which fetches from express needs to be rerouted. it will by default try to fetch to 8080.
      '/login': 'http://localhost:3000', // any front end element which fetches from express needs to be rerouted. it will by default try to fetch to 8080.
      '/myworkouts': 'http://localhost:3000',
      '/workouts': 'http://localhost:3000',
      '/newworkout': 'http://localhost:3000'
      // "*": "http://[::1]:3000"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // THIS ORDER MATTERS !!!!
      //     // Creates `style` nodes from JS strings
      //     'style-loader',
      //     // Translates CSS into CommonJS
      //     'css-loader',
      //     // Compiles Sass to CSS
      //     'sass-loader',
      //   ],
      // },
    ]
  }
}