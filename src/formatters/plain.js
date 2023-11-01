import _ from 'lodash';

const getPath = (nodeNames) => nodeNames.flat().join('.');

const checkVal = (value) => {
  switch (typeof value) {
    case 'object': {
      return !value ? 'null' : '[complex value]';
    }
    case 'string': {
      return `'${value}'`;
    }
    default: {
      return `${value}`;
    }
  }
};

const plainFormatDiff = (tree) => {
  const iters = (node, path) => node.map((child) => {
    const currectPath = getPath([path, child.key]);
    switch (child.type) {
      case 'nested': {
        return iters(child.children, currectPath);
      }
      case 'added': {
        return `Property ${currectPath} was added with value: ${checkVal.value}`;
      }
      case 'removed': {
        return `Property ${currectPath} was removed`;
      }
      case 'changed': {
        return `Property ${currectPath} was updated. From ${checkVal(child.value)} to ${checkVal(child.value2)}`;
      }
      case 'unchanged': {
        return null;
      }
      default: {
        throw Error('Incorrect data');
      }
    }
  });
  return iters(tree.children, []);
};

export default function makePlain(data) {
  const result = plainFormatDiff(data);
  const flatten = _.flattenDeep(result);
  const elFiltering = flatten.filter((el) => el);
  return elFiltering.join('\n');
};
