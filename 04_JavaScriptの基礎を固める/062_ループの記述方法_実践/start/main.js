// 配列の中にオブジェクトが入っている場合のループ処理
const todos = [
  {
    id: 1,
    title: "Go to school",
    completed: true,
  },
  {
    id: 2,
    title: "Go to museum",
    completed: true,
  },
  {
    id: 3,
    title: "Go shopping",
    completed: false,
  },
];

for (let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  if (todo.completed === true) {
    console.log(i, todo.title);
  }
}

// for in
for (let i in todos) {
  let todo = todos[i];
  if (todo.completed === true) {
    console.log(i, todo.title);
  }
}

// for of
for (let todo of todos) {
  if (todo.completed === true) {
    console.log(todo.title);
  }
}
