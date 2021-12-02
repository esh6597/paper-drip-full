/*
  This webpack config was built instead of using the npx-create-react-app command.
  These comments are long, informational and very intrusive. Feel free to block
  them out or not read them unless you intend on changing the base code.
*/

const path = require("path"); //A Node.js library that provides tools for working with file directories.

module.exports = {
  entry: path.resolve('./src/index.js'), //Tells Webpack what file to begin bundling at.
  output: {
    path: path.resolve(__dirname, 'dist'), //Places output in a dist/ folder
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/, 
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.txt/, 
        use: ['raw-loader']
      },//implement sass-loader here
    ],
  },
  devServer: { //Configures the development server for testing front end.
    port: 3000,
    static: {
      directory: path.join(__dirname, './public')
    } //Where the dev server serves its content from
  }
};