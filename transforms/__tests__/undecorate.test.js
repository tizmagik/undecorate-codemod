const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = [
  'default-exported-class',
  'exported-later',
  'multiple-decorators',
  'named-export',
  'not-exported',
  'with-param'
];

tests.forEach(test => {
  defineTest(
    __dirname,
    'undecorate',
    {flow: false},
    `undecorate/${test}`
  );
});
