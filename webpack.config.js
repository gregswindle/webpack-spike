// Since thie file isn't compiled by webpack,
// imports have to be commonjs format
const path = require('path')

module.exports = {
  // Webpack can only have one entry point sadly,
  // but this file basically webs over ever file it touches
  entry: './src/index.js',

  // Declare our main output
  output: {
    // This is the export path
    path: path.resolve(__dirname, 'dist'),

    // There are different types of things you can configure here,
    // But a simple bundle.js is good for getting everything
    filename: 'bundle.js',

    // I usually output my web used stuff as UMD to
    // make it easily consumed via web
    library: 'umd'
  },

  module: {
    // This is where you declare your main loaders
    // It will take them by file precedence as well
    rules: [
      {
        // Test anything that's a JS file
        test: /\.js$/,
        // Don't run babel over these files
        exclude: /(node_modules|bower_components)/,
        // Use is how you declare your main options for the loader
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  // If you have a ton of directories you could make the
  // path references easier by adding them here, but I prefer
  // to keep them relatively referenced so you can glance quickly
  // in a file. As well, anything that is `./filename` imported
  // can be assumed a local file, while 'filename' would be a dependency
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app')]
  }
}
