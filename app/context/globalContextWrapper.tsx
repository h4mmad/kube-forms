"use client";
import { useState } from "react";
import { GlobalContext } from "./globalContext";

const GlobalContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<string>("");
  return (
    <GlobalContext.Provider value={{ config, setConfig }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;
