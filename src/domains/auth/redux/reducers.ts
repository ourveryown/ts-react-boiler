import { ActionType } from "typesafe-actions";
import { AUTH_TOKEN } from "../../../constants/storageTokens";
import * as actions from "./actions";
import { AuthActionTypes, IAuthState } from "./types";

export type AuthAction = ActionType<typeof actions>;

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
      return updateObject(state, { token: action.payload.token });
    }
    case AuthActionTypes.LOADING: {
      return updateObject(state, { loading: action.payload.loading });
    }
    case AuthActionTypes.INPUT_CHANGED: {
      return updateObject(state, {
        data: { ...state.data, [action.payload.name]: action.payload.value }
      });
    }
    default:
      return state;
  }
};
