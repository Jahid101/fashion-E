const withAntdLess = require("next-plugin-antd-less");

module.exports = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/ab/:path*",
  //       destination: `${process.env.BASEURL}/:path*`,
  //     },
  //   ];
  // },

  ...withAntdLess({
    modifyVars: { "@primary-color": "#F09522" },
    lessVarsFilePathAppendToEndOfContent: false, 
    cssLoaderOptions: {
      mode: "local",
      localIdentName: true ? "[local]--[hash:base64:4]" : "[hash:base64:8]", 
      exportLocalsConvention: "camelCase",
      exportOnlyLocals: false,
      // ...
      getLocalIdent: (context, localIdentName, localName, options) => {
        return "whatever_random_class_name";
      },
    },

    nextjs: {
      localIdentNameFollowDev: true, 
    },

    webpack(config) {
      return config;
    },

    future: {
      webpack5: true,
    },

    // env: {
    //   BASEURL: process.env.BASEURL,
    // },
  }),
};
