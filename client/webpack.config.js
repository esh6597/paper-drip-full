/*
  This webpack config was built instead of using the npx-create-react-app command.
  These comments are long, informational and very intrusive. Feel free to block
  them out or not read them unless you intend on changing the base code.

  Many/most are quite obvious if you know what you're doing. I just don't.
*/

const path = require("path"); //A Node.js library that provides tools for working with file directories.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Moves .css files to a separate directory to make loading faster for large stylesheets.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Extracts webpack bundles to a .html file.

module.exports = {
  //Tells Webpack what file to begin bundling at; path.resolve here is not necessary but I'm
  //  keeping it here in case I need to change the path.
  mode: 'production',
  entry: {
    index: './src/index.js' //The object notation here is so I can support multiple entry points later on. They're named after the resulting file for now due to output settings.
  },
  output: {
    path: path.resolve(__dirname, 'build'), //Controls output folder.
    filename: '[name].js',
    publicPath: '/' //Redirects server requests to index.html
  },
  module: {
    rules: [ //Controls what files are tested, and what loaders to test them with.
      { //Notice that you don't need to import the loaders.
        test: /\.m?js$/,
        exclude: /node_modules/, //Doesn't test the dependency folder.
        use: [
          {
            loader: 'babel-loader', //Babel is used to transform React and JSX code into more compatible, earlier JavaScript.
            options: {
              presets: ['@babel/preset-env'] //A smart preset that transforms modern JS without needing to micromanage which syntax you're using.
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/, //Compiles .scss, .sass, and .css into CommonJS.
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', //Adds many features like compatibility and linting.
          'sass-loader',
        ]
      },
      {
        test: /\.txt/, //Compiles .txt files in case I need to add some more informational data.
        use: ['raw-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html' //The index.html file is in the src/ folder since WP compiles this into its own index.html in the public folder.
    }),
    new MiniCssExtractPlugin({
      filename: './index.css'
    }),
  ],
  devServer: { //Configures the development server for testing front end.
    port: 3000, //Port that it serves at; using a generic number.
    static: {
      directory: path.join(__dirname, 'public') //Directory that the dev server serves its files from.
    },
    historyApiFallback: true //Redirects 404s to index.html
  }
};