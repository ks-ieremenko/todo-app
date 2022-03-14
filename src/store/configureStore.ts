import { createStore, applyMiddleware, compose, AnyAction, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./todo";

const combinedReducer = combineReducers({
  todoReducer,
});

const rootReducer = (state: any, action: AnyAction): any => {
  return combinedReducer(state, action);
};

type AppReducerT = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<AppReducerT>;

export default function configureStore() {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
  }
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
}
