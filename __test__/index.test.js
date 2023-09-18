import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import result from '../__fixtures__/result.js';

console.log(result);
test('JSON', () => {
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(result);
});

test('yaml', () => {
  expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(result);
});

test('yml', () => {
  expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(result);
});
