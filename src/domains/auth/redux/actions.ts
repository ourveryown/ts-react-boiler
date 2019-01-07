import { AuthActionTypes } from "./types";

export interface ILogin {
  type: AuthActionTypes.LOGIN;
  token: string;
}

export interface ILoginInputChange {
  type: AuthActionTypes.INPUT_CHANGED;
  name: string;
  value: string;
}

export interface IAuthLoading {
  type: AuthActionTypes.LOADING;
  loading: boolean;
}

export const loginAction = (token: string): ILogin => ({
  type: AuthActionTypes.LOGIN,
  token
});

export const loginInputChanged = (
  name: string,
  value: string
): ILoginInputChange => ({
  type: AuthActionTypes.INPUT_CHANGED,
  name,
  value
});

export const loadingAction = (loading: boolean): IAuthLoading => ({
  type: AuthActionTypes.LOADING,
  loading
});
