/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx",
  },
  builtins: {
    html: [{ template: "./index.html" }],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [{ loader: "import-glob-loader" }],
        type: "tsx",
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          { loader: "sass-loader" },
          { loader: "import-glob-loader" },
        ],
        type: "css",
      },
      {
        test: /\.png$/,
        type: "asset",
      },
    ],
  },
};
