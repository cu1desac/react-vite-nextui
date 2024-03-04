// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }


/**
 * eslint: eslint的核心代码。
 * @typescript-eslint/parser: eslint的解析器，用于解析typescript，从而检查和规范Typescript代码。
 * @typescript-eslint/eslint-plugin: 这是一个eslint插件，包含了各类定义好的检测Typescript代码的规范。
 */


module.exports = {
 parser: '@typescript-eslint/parser', // 定义eslint的解析器，在ts项目中必须指定解析器为@typescript-eslint/parser，才能正确的检测和规范TS代码。
 extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react-hooks/recommended',
  'plugin:prettier/recommended'
  ],
 plugins: ['react-refresh'],
 parserOptions: {
  ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
  sourceType: 'module', // Allows for the use of imports
  ecmaFeatures: {
   jsx: true // Allows for the parsing of JSX
   }
  },
 settings: {
  react: {
   version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
   }
  },
 env: {
  es2021: true,
  // 指定代码的运行环境
  browser: true, // env环境变量配置，形如console属性只有在browser环境下才会存在，如果没有设置支持browser，那么可能报console is undefined的错误。
  node: true
  },
 rules: {
  quotes: ['error', 'single'],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-this-alias': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  'react-hooks/exhaustive-deps': 'off',
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/jsx-uses-react': 'off',
  '@typescript-eslint/no-var-requires': 'off'
  }
}
