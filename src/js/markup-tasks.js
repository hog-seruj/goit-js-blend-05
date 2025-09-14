export default function createMarkup (id, title, text) {
  return `
      <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${text}</p>
    </li>
  `;
}
