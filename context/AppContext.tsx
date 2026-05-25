import React, { createContext, useContext, useState } from "react";

interface QuestType {
  title: string;
  description: string;
  xpReward: number;
}

interface AppContextType {
  xp: number;
  addXp: (amount: number) => void;
  quests: QuestType[];
  addQuest: (quest: QuestType) => void;
}

const AppContext = createContext<AppContextType>({
  xp: 0,
  addXp: () => {},
  quests: [],
  addQuest: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [xp, setXp] = useState(0); // kezdeti érték
  const [quests, setQuests] = useState<QuestType[]>([
    { title: "Gooning", description: "verd ki xdddd", xpReward: 140 },
    { title: "2L Cola", description: "yummy", xpReward: 50 },
  ]);

  const addXp = (amount: number) => {
    setXp((prev) => prev + amount);
  };

  const addQuest = (quest: QuestType) => {
    setQuests((prev) => [...prev, quest]);
  };

  return (
    <AppContext.Provider value={{ xp, addXp, quests, addQuest }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
