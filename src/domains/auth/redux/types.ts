export enum AuthActionTypes {
  LOGIN = "auth/LOGIN",
  LOADING = "auth/LOADING",
  INPUT_CHANGED = "auth/INPUT_CHANGED"
}

export interface IAuthState {
  readonly loading: boolean;
  readonly data: { email: string; password: string };
  readonly token: string | null;
}
