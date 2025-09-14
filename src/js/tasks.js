import refs from './refs';
import renderTask from './render-tasks';

export default function renderTaskComponents(markup) {
  refs.tasks.insertAdjacentHTML('beforeend', renderTask(markup));
}

export function removeTask(item) {
  item.remove();
}
