import { TodoStateInterface } from "../store/todo";

export const loading = (state: TodoStateInterface) => ({
  ...state,
  loading: true,
  error: null,
});

export const loaded = (state: TodoStateInterface, data: any) => ({
  ...state,
  loaded: true,
  loading: false,
  error: null,
  ...data,
});

export const error = (state: TodoStateInterface, error: Error) => ({
  ...state,
  loading: false,
  error,
});
