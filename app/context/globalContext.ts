"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ContextType = {
  config: string;
  setConfig: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<ContextType>({
  config: null as any,
  setConfig: null as any,
});
