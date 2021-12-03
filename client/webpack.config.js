/*
  This webpack config was built instead of using the npx-create-react-app command.
  These comments are long, informational and very intrusive. Feel free to block
  them out or not read them unless you intend on changing the base code.

  Many/most are quite obvious if you know what you're doing. I just don't.
*/

const path = require("path"); //A Node.js library that provides tools for working with file directories.

module.exports = {
  //Tells Webpack what file to begin bundling at; path.resolve here is not necessary but I'm
  //  keeping it here in case I need to change the path.
  entry: path.resolve('./src/index.js'), 
  output: {
    path: path.resolve(__dirname, 'dist'), //Places output in a dist/ folder
    filename: 'bundle.js' //Controls the name of the outputed file.
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
        test: /\.s[ac]ss$/i, //Compiles both .sass and scss into CSS then CommonJS.
        use: [
          {loader: 'style-loader'}, //This requires all 3 of these loaders in this exact order (WP loads them last first)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.txt/, //Compiles .txt files in case I need to add some more informational data.
        use: ['raw-loader']
      }
    ]
  },
  devServer: { //Configures the development server for testing front end.
    port: 3000, //Port that it serves at
    static: {
      directory: path.join(__dirname, 'public') //Needs to be served from here for now; I tried 'dist' and it currently doesn't work and I don't know why.
    }
  }
};