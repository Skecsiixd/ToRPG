import React, { createContext, useContext, useState } from "react";

interface XpContextType {
  xp: number;
  addXp: (amount: number) => void;
}

const XpContext = createContext<XpContextType>({
  xp: 0,
  addXp: () => {},
});

export const XpProvider = ({ children }: { children: React.ReactNode }) => {
  const [xp, setXp] = useState(0); // kezdeti érték

  const addXp = (amount: number) => {
    setXp((prev) => prev + amount);
  };

  return (
    <XpContext.Provider value={{ xp, addXp }}>{children}</XpContext.Provider>
  );
};

export const useXp = () => useContext(XpContext);
