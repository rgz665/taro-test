module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  rules: {
    // your rules
    'react/jsx-uses-react': 'off', //防止反应被错误地标记为未使用
    'react/react-in-jsx-scope': 'off', //使用JSX时防止丢失React
    'no-console': 2, //禁止使用console
    'no-debugger': 2, //禁止提交debugger
  },
};
