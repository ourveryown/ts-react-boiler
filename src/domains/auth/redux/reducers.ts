import { AUTH_TOKEN } from "../../../constants/storageTokens";
import * as actions from "./actions";
import { AuthActionTypes } from "./types";

export interface IAuthState {
  readonly loading: boolean;
  readonly data: { email: string; password: string };
  readonly token: string | null;
}

export type AuthAction =
  | actions.IAuthLoading
  | actions.ILogin
  | actions.ILoginInputChange;

const initialState: IAuthState = {
  data: {
    email: "",
    password: ""
  },
  loading: false,
  token: localStorage.getItem(AUTH_TOKEN)
};

const updateObject = (oldObject: IAuthState, newValues: object) => {
  return Object.assign({}, oldObject, newValues);
};

export default (state: IAuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return updateObject(state, { token: action.token });
    }
    case AuthActionTypes.LOADING: {
      return updateObject(state, { loading: action.loading });
    }
    case AuthActionTypes.INPUT_CHANGED: {
      return updateObject(state, {
        data: { ...state.data, [action.name]: action.value }
      });
    }
    default:
      return state;
  }
};
