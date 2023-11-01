import { readFileSync } from 'fs';
import path from 'path';
import parser from './parsers.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';

const getPath = (filename) => path.resolve(process.cwd(), filename);

const getFileFormat = (filename) => path.extname(filename).slice(1);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const path1 = getPath(filepath1);
  const data1 = parser(readFile(path1), getFileFormat(filepath1));

  const path2 = getPath(filepath2);
  const data2 = parser(readFile(path2), getFileFormat(filepath2));

  return formatter(buildAST(data1, data2), format);
};

export default genDiff;
