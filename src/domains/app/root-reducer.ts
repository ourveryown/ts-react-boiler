import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import auth, { AuthAction } from "../auth/redux/reducers";

const rootReducer = combineReducers({
  auth
});

export type ApplicationState = StateType<typeof rootReducer>;

export type ApplicationAction = AuthAction;

export default rootReducer;
