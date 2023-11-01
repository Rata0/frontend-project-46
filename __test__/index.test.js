import { test, expect, describe } from '@jest/globals';
import genDiff from '../src/index.js';
import resultStylish from '../__fixtures__/result.js';
import resultJson from '../__fixtures__/resultJson.js';
import resultPlain from '../__fixtures__/resultPlain.js';

describe('stylish', () => {
  test('JSON', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish);
  });

  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultStylish);
  });

  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultStylish);
  });
});

describe('json', () => {
  test('JSON', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json')).toBe(resultJson);
  });

  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'json')).toBe(resultJson);
  });

  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'json')).toBe(resultJson);
  });
});

describe('plain', () => {
  test('JSON', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain')).toBe(resultPlain);
  });

  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'plain')).toBe(resultPlain);
  });

  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'plain')).toBe(resultPlain);
  });
});
