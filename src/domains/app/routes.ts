import { ComponentType } from "react";

import { Login } from "../auth/pages";

interface IRoute {
  path: string;
  component: ComponentType;
}

export const ROUTES: IRoute[] = [{ path: "", component: Login }];
