import { getThemeStorage, setThemeStorage } from './local-storage-api';
export default function changeTheme() {
  const body = document.body;
  let currentTheme = getThemeStorage();

  if (!currentTheme) {
    currentTheme = body.classList.contains('theme-dark') ? 'dark' : 'light';
  }

  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  body.classList.remove(`theme-${currentTheme}`);
  body.classList.add(`theme-${newTheme}`);

  setThemeStorage(newTheme);
}

export function initTheme() {
  const savedTheme = getThemeStorage() ?? 'light';
  document.body.classList.add(`theme-${savedTheme}`);
}
