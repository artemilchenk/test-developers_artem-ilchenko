import { useContext } from "react";
import { DevelopersContext } from "@/modules/developer/context/context";

export const useDevelopersData = () => {
  const context = useContext(DevelopersContext);

  if (useContext(DevelopersContext) === undefined) {
    throw new Error("useDevelopersData must be used within an Provider");
  }

  return context;
};
