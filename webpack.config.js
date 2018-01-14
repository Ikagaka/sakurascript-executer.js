const path = require("path");
const tsconfig = require("./tsconfig.json");

tsconfig.compilerOptions.target = "es5";
tsconfig.compilerOptions.outDir = "web"; // for d.ts

module.exports = {
  entry:  {"sakurascript-executer": "./lib/sakurascript-executer.ts"},
  output: {
    library:       "sakurascriptExecuter",
    libraryTarget: "umd",
    path:          path.resolve("."),
    filename:      "web/lib/[name].js",
  },
  module: {
    rules: [
      {
        test:    /\.ts$/,
        loader:  "ts-loader",
        exclude: /node_modules/,
        options: {compilerOptions: tsconfig.compilerOptions},
      },
    ],
  },
  resolve: {
    extensions: [
      ".ts",
      ".js",
    ],
  },
  externals: ["sakurascript"],
  devtool:   "source-map",
};
