const { copySync, deleteSync, error } = require("devby");
const package = require("../package.json");
const fs = require("fs");

// 在线用例
fs.writeFileSync("./docs/js/system.js", `window.uniQuery_system = {
    "version": "${package.version}"
};`);