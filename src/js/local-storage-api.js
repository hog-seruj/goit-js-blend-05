const localStorageKey = 'tasks';
const localStorageThemeKey = 'theme';

function getTasksStorage() {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

function setTasksStorage(data) {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

function updateTasksStorage(id) {
  const updatedStore = getTasksStorage().filter(item => item.id !== id);
  setTasksStorage(updatedStore);
}

function getThemeStorage() {
  return JSON.parse(localStorage.getItem(localStorageThemeKey));
}

function setThemeStorage(name) {
  localStorage.setItem(localStorageThemeKey, JSON.stringify(name));
}

export {
  localStorageKey,
  getTasksStorage,
  setTasksStorage,
  updateTasksStorage,
  localStorageThemeKey,
  getThemeStorage,
  setThemeStorage
};
