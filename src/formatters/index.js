import plainFormat from './plain.js';
import stylishFormat from './stylish.js';

export default function formatter(tree, format) {
  switch (format) {
    case 'stylish':
      return stylishFormat(tree);
    case 'plain':
      return plainFormat(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error('Введите нужный формат');
  }
}
