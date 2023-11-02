import _ from 'lodash';

const buildAST = (data1, data2) => {
  const keysSort = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const result = keysSort.map((key) => {
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        value: data2[key],
      };
    }

    if (!_.has(data2, key)) {
      return {
        type: 'removed',
        key,
        value: data1[key],
      };
    }

    if (!_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        type: 'nested',
        key,
        children: buildAST(data1[key], data2[key]),
      };
    }

    if (_.isEqual(data1[key], data2[key])) {
      return {
        type: 'unchanged',
        key,
        value: data1[key],
      };
    }

    return {
      type: 'changed',
      key,
      value: data1[key],
      value2: data2[key],
    };
  });
  return result;
};

const getDifferenceTree = (data1, data2) => ({
  type: 'root',
  children: buildAST(data1, data2),
});

export default getDifferenceTree;
