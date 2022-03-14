import { PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AppState } from "../configureStore";
import {
  createTodoError,
  createTodoRequest,
  createTodoSuccess,
  deleteTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
  updateTodoError,
  updateTodoRequest,
  updateTodoSuccess,
} from "./index";
import todoService from "../../services/todo.service";
import { TodoItemModel } from "../../interfaces/todo.interface";

export const getTodosThunk = () => (dispatch: ThunkDispatch<AppState, {}, PayloadAction<any>>) => {
  dispatch(getTodosRequest());
  try {
    const todos: TodoItemModel[] = todoService.getTodos();
    dispatch(getTodosSuccess(todos));
  } catch (error: any) {
    dispatch(getTodosError(error));
  }
};

export const createTodoThunk =
  (createdTodo: TodoItemModel) => (dispatch: ThunkDispatch<AppState, {}, PayloadAction<any>>) => {
    dispatch(createTodoRequest());
    try {
      const todo: TodoItemModel = todoService.createTodo(createdTodo);
      dispatch(createTodoSuccess(todo));
    } catch (error) {
      dispatch(createTodoError(error as Error));
    }
  };

export const updateTodoThunk =
  (updatedTodo: TodoItemModel) => (dispatch: ThunkDispatch<AppState, {}, PayloadAction<any>>) => {
    dispatch(updateTodoRequest());
    try {
      const todos: TodoItemModel[] = todoService.updateTodo(updatedTodo);
      dispatch(updateTodoSuccess(todos));
    } catch (error) {
      dispatch(updateTodoError(error as Error));
    }
  };

export const deleteTodosThunk = (id: string) => (dispatch: ThunkDispatch<AppState, {}, PayloadAction<any>>) => {
  dispatch(deleteTodoRequest());
  try {
    const todos: TodoItemModel[] = todoService.deleteTodo(id);
    dispatch(deleteTodoSuccess(todos));
  } catch (error) {
    dispatch(deleteTodoError(error as Error));
  }
};
