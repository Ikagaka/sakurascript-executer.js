const config = require("webpack-config-narazaka-ts-js").node;

config.entry["sakurascript-executer"] = "./src/lib/sakurascript-executer.ts";
config.output.library = "sakurascriptExecuter";

module.exports = config;
