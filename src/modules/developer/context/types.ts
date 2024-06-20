import {
  IDeveloperEntity,
  IGetDevelopersResponse,
} from "@/modules/developer/types";

export interface TDevelopersContext {
  developers: IDeveloperEntity[] | undefined;
  metadata: Partial<Omit<IGetDevelopersResponse, "users">> | null;
}
