import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../domains/app/root-reducer";

export default function configureStore(initialState?: object) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
