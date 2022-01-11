module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          // Add your aliases here
          "components": ["./src/components"],
          "constants": ["./src/constants"],
          "hooks": ["./src/hooks"],
          "interfaces": ["./src/interfaces"],
          "models": ["./src/models"],
          "pages": ["./src/pages"],
          "services": ["./src/services"],
          "shared": ["./src/shared"],
          "core": ["./src/core"],
          "styles": ["./src/style"]
        }
      }
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        minify: true,
        transpileTemplateLiterals: true,
        pure: false,
        namespace: 'lib-playground',
      },
    ],
  ],
};
