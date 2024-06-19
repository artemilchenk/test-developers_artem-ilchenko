import { DevelopersContext } from "@/modules/developer/context/context";
import {} from "@/modules/developer/context/types";
import { FC, ReactNode, useRef } from "react";
import { useDevelopersData } from "@/modules/developer/hook";
import {
  IDeveloperEntity,
  IGetDevelopersResponse,
} from "@/modules/developer/types";

interface IDevelopersProvider {
  children?: ReactNode;
}

export const DevelopersProvider: FC<IDevelopersProvider> = ({ children }) => {
  const developers = useRef<IDeveloperEntity[]>([]);
  const { data } = useDevelopersData();

  developers.current = [...developers.current, ...(data?.users || [])];

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
