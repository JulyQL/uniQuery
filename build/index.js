const { copySync } = require("devby");
const package = require("../package.json");
const fs = require("fs");

// 在线用例
copySync("./unpackage/dist/build/h5", "./docs/examples");

fs.writeFileSync("./docs/js/system.js", `window.uniQuery_system = {
    "version": "${package.version}"
};`);