const { copySync } = require("devby");

// 源码
copySync("./src/components", "./components");
copySync("./src/libs", "./libs");

// 在线用例
copySync("./dist/build/h5", "./docs/examples")