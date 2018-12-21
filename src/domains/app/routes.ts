import { Login } from "../auth/pages";
import { Home } from "../home/pages";

import { ComponentType } from "react";

interface IRoute {
  path: string;
  component: ComponentType;
}

export const LOGGED_IN_ROUTES: IRoute[] = [{ path: "", component: Home }];
export const NO_LOGIN_ROUTES: IRoute[] = [{ path: "", component: Login }];
