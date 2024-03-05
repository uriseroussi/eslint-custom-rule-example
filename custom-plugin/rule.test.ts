import * as vitest from 'vitest';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { explicitGenerics } from './rule';

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('explicit-generics', explicitGenerics, {
  valid: [
    {
      code: 'foo<number>();',
      options: [{ functionNames: ['foo'] }],
    },
    {
      code: 'bar<string, number>();',
      options: [{ functionNames: ['bar'] }],
    },
  ],
  invalid: [
    {
      code: 'foo();',
      options: [{ functionNames: ['foo'] }],
      errors: [{ messageId: 'default' }],
    },
    {
      code: 'bar();',
      options: [{ functionNames: ['bar'] }],
      errors: [{ messageId: 'default' }],
    },
  ],
});
