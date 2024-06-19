import {
  IDeveloperEntity,
  IGetDevelopersResponse,
} from "@/modules/developer/types";

export interface TDevelopersContext {
  developers: IDeveloperEntity[] | [];
  metadata: Partial<Omit<IGetDevelopersResponse, "users">> | null;
}
