export interface TDevelopersContext {
  developers: IDeveloperEntity[] | [];
  metadata: Partial<Omit<IGetDevelopersResponse, "users">>;
}
