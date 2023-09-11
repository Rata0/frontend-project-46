import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const path1 = readFileSync(filepath1, 'utf-8');
  const path2 = readFileSync(filepath2, 'utf-8');

  const dataParse1 = JSON.parse(path1);
  const dataParse2 = JSON.parse(path2);

  const keys1 = Object.keys(dataParse1);
  const keys2 = Object.keys(dataParse2);
  const keys = _.sortBy(_.union(keys1, keys2));
  
  const result = [];
  result.push('{');
  
  for (let key of keys) {
    if (_.has(dataParse1, key) && !_.has(dataParse2, key)) {
        result.push(`  - ${key}: ${dataParse1[key]}`);
    } else if (!_.has(dataParse1, key) && _.has(dataParse2, key)) {
        result.push(`  + ${key}: ${dataParse2[key]}`);
    } else if (_.has(dataParse1, key) && _.has(dataParse2, key)) {
        if (dataParse1[key] === dataParse2[key]) {
            result.push(`    ${key}: ${dataParse2[key]}`);
        } else if (dataParse1[key] !== dataParse2[key]){
            result.push(`  - ${key}: ${dataParse1[key]}`);
            result.push(`  + ${key}: ${dataParse2[key]}`);
        }
    }
  }

  result.push('}');
  return result.join('\n');
};

export default genDiff;