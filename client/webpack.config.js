/*
  This webpack config was built instead of using the npx-create-react-app command.
  These comments are long, informational and very intrusive. Feel free to block
  them out or not read them unless you intend on changing the base code.
*/

const path = require("path"); //A Node.js library that provides tools for working with file directories.
const webpack = require("webpack"); //Webpack, duh. A module bundler mainly used to compile React with. I'm really new, so bear with these comments.

module.exports = {
  entry: "./src/index.js", //Tells Webpack what file to begin bundling at.
  mode: "development", //Lets WP know it's in development mode; saves the flag when starting dev server.
  module: {
    rules: [ //Here you can specify what loaders are being used and what file extensions they're used on.
      {
        test: /\.(js|jsx)$/, //Compiles JS and JSX files
        exclude: /(node_modules|bower_components)/, //Doesn't test files in these directories.
        loader: "babel-loader", // loader: is shorthand for use: ["loader"] when you only have 1 loader.
        options: { presets: ["@babel/env"] } //Directs WP into using Babel.
      },
      {
        test: /\.s[ac]ss$/i, //Compiles SASS files into CSS files into CommonJS.
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }, //Specifies which extensions WP will resolve.
  output: {
    path: path.resolve(__dirname, "dist/"), //Places output in a dist/ folder
    publicPath: "/dist/", //Tells WP what directory the bundle should go in, and what the public directory URL will be.
    filename: "paperdripClientApp.js"
  },
  devServer: { //Configures the development server for testing front end.
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/", //Tells WP where the bundled code actually is.
    hotOnly: true //Enables Hot Module Replacement, allowing us to update modules without a full refresh. MUST be turned off for production, but OK to use in development right now.
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};