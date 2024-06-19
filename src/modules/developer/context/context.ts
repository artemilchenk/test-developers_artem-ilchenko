import { createContext } from "react";
import { TDevelopersContext } from "@/modules/developer/context/types";

const defaultValue: TDevelopersContext = {
  developers: [],
  metadata: null
};

export const DevelopersContext =
  createContext<TDevelopersContext>(defaultValue);
