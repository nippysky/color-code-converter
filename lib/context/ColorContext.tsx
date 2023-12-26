"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { getRandomHexColor } from "../utils/randomHexColor";

type MyContextType = {
  randomColor: string;
};

const ContextColor = createContext<MyContextType | undefined>(undefined);

type MyContextProviderProps = {
  children: ReactNode;
};

export const ContextColorProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [randomColor] = useState<string>(getRandomHexColor);

  return (
    <ContextColor.Provider value={{ randomColor }}>
      {children}
    </ContextColor.Provider>
  );
};

export const useContextColor = () => {
  const context = useContext(ContextColor);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
