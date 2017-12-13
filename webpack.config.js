// Since thie file isn't compiled by webpack,
// imports have to be commonjs format
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths = {
  entry: './frontend-templates/src/main/resources/themes/c2b/default-theme/js',
  output: path.resolve(__dirname, './frontend-templates/target/main/resources/themes/c2b/default-theme/js')
}

module.exports = {
  // Webpack can only have one entry point sadly,
  // but this file basically webs over ever file it touches
  entry: {
    app: `${paths.entry}/index.js`,
    print: `${paths.entry}/print.js`,
  },

  plugins: [
    new CleanWebpackPlugin(['./frontend-templates/target']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],

  // Declare our main output
  output: {
    // This is the export path
    path: paths.output,

    // There are different types of things you can configure here,
    // But a simple bundle.js is good for getting everything
    filename: '[name].bundle.js',

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
      },
      // @see https://webpack.js.org/guides/asset-management/
      {
        // webpack uses a regular expression to determine which files it 
        // should look for and serve to a specific loader. In this case any
        // file that ends with .css will be served to the style-loader and 
        // the css-loader.
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  // If you have a ton of directories you could make the
  // path references easier by adding them here, but I prefer
  // to keep them relatively referenced so you can glance quickly
  // in a file. As well, anything that is `./filename` imported
  // can be assumed a local file, while 'filename' would be a dependency
  resolve: {
    modules: [
      'node_modules', 
      path.resolve(__dirname, 'frontend-templates/target/main/resources/themes/c2b/default-theme')
    ]
  }
}
