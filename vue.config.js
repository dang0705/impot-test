const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 选项...
  chainWebpack: (config) => {
    config.resolve.alias.set("@utils", resolve("./utils"));
  },
};
