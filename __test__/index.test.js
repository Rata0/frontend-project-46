import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const filePath1 = getFixturePath('filepath1.json');
const filepath2 = getFixturePath('filepath2.json');
const expected = readFile('expect.txt');

test('gendiff test', () => {
  expect(gendiff(filePath1, filepath2)).toEqual(expected);
});