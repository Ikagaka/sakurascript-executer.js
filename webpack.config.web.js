const config = require("webpack-config-narazaka-ts-js").web;

config.entry["sakurascript-executer"] = "./src/lib/sakurascript-executer.ts";
config.output.library = "sakurascriptExecuter";

module.exports = config;
