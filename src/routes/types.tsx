interface IRoute {
  path: string;
  component: React.FC;
  public?: boolean;
}

export default interface IRoutes {
  login: IRoute;
  home: IRoute;
}
