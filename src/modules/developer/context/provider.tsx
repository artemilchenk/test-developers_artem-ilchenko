import { DevelopersContext } from "@/modules/developer/context/context";
import { FC, ReactNode, useRef } from "react";
import {useDevelopersApi} from "@/modules/developer/hook";
import {
  IDeveloperEntity,
  IGetDevelopersResponse,
} from "@/modules/developer/types";

interface IDevelopersProvider {
  children?: ReactNode;
}

export const DevelopersProvider: FC<IDevelopersProvider> = ({ children }) => {
  const developers = useRef<IDeveloperEntity[] | undefined>();
  const { data } = useDevelopersApi();

  function dataGuard (){
    if(data?.users){
      if(!developers.current) {
        return data?.users
      }

      if(developers.current){
        return [...developers.current, ...data?.users];
      }
    } else return undefined
  }

  developers.current = dataGuard()

  let metadata: Omit<IGetDevelopersResponse, "users"> | null = null;
  if (data) {
    metadata = {
      page: data.page,
      count: data.count,
      links: data.links,
      success: data.success,
      total_pages: data.total_pages,
      total_users: data.total_users,
    };
  }

  return (
    <DevelopersContext.Provider
      value={{ developers: developers.current, metadata }}
    >
      {children}
    </DevelopersContext.Provider>
  );
};
