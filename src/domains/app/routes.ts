import { Login } from "../auth/pages";

interface IRoute {
  path: string;
  component: any;
}

export const ROUTES: IRoute[] = [{ path: "", component: Login }];
