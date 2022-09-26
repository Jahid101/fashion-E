const withAntdLess = require("next-plugin-antd-less");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/ab/:path*",
        destination: `${process.env.BASEURL}/:path*`,
      },
    ];
  },

  // module.exports =
  ...withAntdLess({
    modifyVars: { "@primary-color": "#F09522" }, // optional
    // lessVarsFilePath: './styles/globals.less', // optional
    // lessVarsFilePath: './styles/colors.less', // optional
    lessVarsFilePathAppendToEndOfContent: false, // optional
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {
      // ...
      mode: "local",
      localIdentName: true ? "[local]--[hash:base64:4]" : "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
      exportLocalsConvention: "camelCase",
      exportOnlyLocals: false,
      // ...
      getLocalIdent: (context, localIdentName, localName, options) => {
        return "whatever_random_class_name";
      },
    },

    // for Next.js ONLY
    nextjs: {
      localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
    },

    // Other Config Here...

    webpack(config) {
      return config;
    },

    // ONLY for Next.js 10, if you use Next.js 11, delete this block
    future: {
      webpack5: true,
    },

    env: {
      BASEURL: process.env.BASEURL,
    },
  }),
};
