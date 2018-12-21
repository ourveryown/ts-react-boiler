import { action } from "typesafe-actions";
import { AuthActionTypes } from "./types";

export const loginAction = (token: string) => action(AuthActionTypes.LOGIN, { token });

export const loginInputChanged = (name: string, value: string) =>
  action(AuthActionTypes.INPUT_CHANGED, { name, value });

export const loadingAction = (loading: boolean) => action(AuthActionTypes.LOADING, { loading });
