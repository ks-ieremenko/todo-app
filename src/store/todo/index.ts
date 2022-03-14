import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItemModel } from "../../interfaces/todo.interface";
import { loaded, loading, error } from "../../helpers/redux";

export interface TodoStateInterface {
  loading: boolean;
  loaded: boolean;
  todos: TodoItemModel[] | null;
  error: Error | null;
  isModalOpen: boolean;
}

const initialState: TodoStateInterface = {
  loading: false,
  loaded: false,
  todos: null,
  error: null,
  isModalOpen: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodosRequest: (state: TodoStateInterface) => loading(state),
    getTodosSuccess: (state: TodoStateInterface, action: PayloadAction<TodoItemModel[]>) =>
      loaded(state, { todos: action.payload }),
    getTodosError: (state: TodoStateInterface, action: PayloadAction<Error>) => error(state, action.payload),

    createTodoRequest: (state: TodoStateInterface) => loading(state),
    createTodoSuccess: (state: TodoStateInterface, action: PayloadAction<TodoItemModel>) =>
      loaded(state, { todos: [...(state.todos || []), action.payload] }),
    createTodoError: (state: TodoStateInterface, action: PayloadAction<Error>) => error(state, action.payload),

    updateTodoRequest: (state: TodoStateInterface) => loading(state),
    updateTodoSuccess: (state: TodoStateInterface, action: PayloadAction<TodoItemModel[]>) =>
      loaded(state, { todos: action.payload }),
    updateTodoError: (state: TodoStateInterface, action: PayloadAction<Error>) => error(state, action.payload),

    deleteTodoRequest: (state: TodoStateInterface) => loading(state),
    deleteTodoSuccess: (state: TodoStateInterface, action: PayloadAction<TodoItemModel[]>) =>
      loaded(state, { todos: action.payload }),
    deleteTodoError: (state: TodoStateInterface, action: PayloadAction<Error>) => error(state, action.payload),

    setModalState: (state: TodoStateInterface, action: PayloadAction<any>) => ({
      ...state,
      isModalOpen: action.payload.isModalOpen,
      item: action.payload?.updatedTodo,
    }),
  },
});

export const {
  getTodosRequest,
  getTodosSuccess,
  getTodosError,
  createTodoRequest,
  createTodoSuccess,
  createTodoError,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  setModalState,
} = todoSlice.actions;

export default todoSlice.reducer;
