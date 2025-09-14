import { nanoid } from 'nanoid';
import refs from './js/refs';
import {
  setTasksStorage,
  getTasksStorage,
  updateTasksStorage,
} from './js/local-storage-api';
import renderTaskComponents, { removeTask } from './js/tasks';
import changeTheme, {initTheme} from './js/theme-switcher';

const dataArr = getTasksStorage() ?? [];

renderTaskComponents(dataArr);

function submitHandler(e) {
  e.preventDefault();

  const name = e.target.elements.taskName.value.trim();
  const description = e.target.elements.taskDescription.value.trim();

   const formData = {
    id: nanoid(),
    name,
    description,
  };

  dataArr.push(formData);

  refs.form.reset();
  setTasksStorage(dataArr);

  renderTaskComponents([formData]);
}

function deleteTaskHandler(e) {
  if (!e.target.classList.contains('task-list-item-btn')) return;

  const currentTask = e.target.closest('.task-list-item');
  const tasksId = currentTask.dataset.id;

  updateTasksStorage(tasksId);
  removeTask(currentTask);
}

refs.form.addEventListener('submit', submitHandler);

refs.tasks.addEventListener('click', deleteTaskHandler);

initTheme();
refs.triggerThemeButton.addEventListener('click', changeTheme);
