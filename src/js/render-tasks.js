import createMarkup from './markup-tasks';

export default function renderTask(arr) {
  return arr
    .map(({ id, name, description }) => createMarkup(id, name, description))
    .join('');
}
