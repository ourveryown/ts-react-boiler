import { ComponentType } from "react";

import { Login } from "../auth/pages";

type route = { path: String; component: ComponentType };

export const ROUTES: Array<route> = [{ path: "", component: Login }];
