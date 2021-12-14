module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: '0.0.0.0:8080'
},
publicPath: "/"
};
