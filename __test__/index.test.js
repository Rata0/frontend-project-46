import path from 'node:path';
import { test } from '@jest/globals';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
import resultStylish from '../__fixtures__/resultStylish.js';
import resultJson from '../__fixtures__/resultJson.js';
import resultPlain from '../__fixtures__/resultPlain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('Stylish format', () => {
  test('file json', () => {
    const filename1 = getFixturePath('file1.json');
    const filename2 = getFixturePath('file2.json');
    expect(gendiff(filename1, filename2, 'stylish')).toBe(resultStylish);
  });

  test('file Stylish', () => {
    const filename1 = getFixturePath('file1.yaml');
    const filename2 = getFixturePath('file2.yaml');
    expect(gendiff(filename1, filename2, 'stylish')).toBe(resultStylish);
  });

  test('file yml', () => {
    const filename1 = getFixturePath('file1.yml');
    const filename2 = getFixturePath('file2.yml');
    expect(gendiff(filename1, filename2, 'stylish')).toBe(resultStylish);
  });
});

describe('Json format', () => {
  test('file json', () => {
    const filename1 = getFixturePath('file1.json');
    const filename2 = getFixturePath('file2.json');
    expect(gendiff(filename1, filename2, 'json')).toBe(resultJson);
  });

  test('file Stylish', () => {
    const filename1 = getFixturePath('file1.yaml');
    const filename2 = getFixturePath('file2.yaml');
    expect(gendiff(filename1, filename2, 'json')).toBe(resultJson);
  });

  test('file yml', () => {
    const filename1 = getFixturePath('file1.yml');
    const filename2 = getFixturePath('file2.yml');
    expect(gendiff(filename1, filename2, 'json')).toBe(resultJson);
  });
});

describe('Plain format', () => {
  test('file json', () => {
    const filename1 = getFixturePath('file1.json');
    const filename2 = getFixturePath('file2.json');
    expect(gendiff(filename1, filename2, 'plain')).toBe(resultPlain);
  });

  test('file Stylish', () => {
    const filename1 = getFixturePath('file1.yaml');
    const filename2 = getFixturePath('file2.yaml');
    expect(gendiff(filename1, filename2, 'plain')).toBe(resultPlain);
  });

  test('file yml', () => {
    const filename1 = getFixturePath('file1.yml');
    const filename2 = getFixturePath('file2.yml');
    expect(gendiff(filename1, filename2, 'plain')).toBe(resultPlain);
  });
});
