// vue.config.js
module.exports = {
  // 选项...
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递给 css-loader
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else {
            // 将非html请求截获，对路由字符串进行处理，返回对应js文件的名称。
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            // require后，数据变化不生效。
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            // 所以需要清理缓存。
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        }
      }
    }
  }
};
