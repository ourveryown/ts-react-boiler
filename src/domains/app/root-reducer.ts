import { combineReducers } from "redux";
import auth, { AuthAction, IAuthState } from "../auth/redux/reducers";

const rootReducer = combineReducers({
  auth
});

export interface IApplicationState {
  auth: IAuthState;
}

export type ApplicationAction = AuthAction;

export default rootReducer;
