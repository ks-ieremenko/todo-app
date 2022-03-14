import data from "../data.json";
import { TodoItemModel } from "../interfaces/todo.interface";

export class TodoService {
  getTodos(): TodoItemModel[] {
    const localStorageTodos = localStorage.getItem("todos");
    if (!localStorageTodos) this.saveTodos(data.todos);

    return JSON.parse(localStorageTodos!);
  }

  saveTodos(todos: TodoItemModel[]): void {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  createTodo(todo: TodoItemModel): TodoItemModel {
    const todos = this.getTodos();
    this.saveTodos([...todos, todo]);
    return todo;
  }

  updateTodo(todo: TodoItemModel): TodoItemModel[] {
    const updatedTodos = this.getTodos().map((item: TodoItemModel) => (todo.id === item.id ? todo : item));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;
  }

  deleteTodo(id: string): TodoItemModel[] {
    const updatedTodos = this.getTodos().filter((item: TodoItemModel) => id !== item.id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;
  }
}

export default new TodoService();
