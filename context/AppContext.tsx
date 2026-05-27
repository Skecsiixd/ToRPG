import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface QuestType {
  id?: number;
  title: string;
  description: string;
  xp_reward: number;
}

interface AppContextType {
  xp: number;
  addXp: (amount: number) => void;
  quests: QuestType[];
  addQuest: (quest: QuestType) => Promise<void>;
}

const AppContext = createContext<AppContextType>({
  xp: 0,
  addXp: () => {},
  quests: [],
  addQuest: async () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [xp, setXp] = useState(0); // kezdeti érték
  const [quests, setQuests] = useState<QuestType[]>([]);

  useEffect(() => {
    const getQuests = async () => {
      try {
        const { data: fetchedQuests, error } = await supabase
          .from("quests")
          .select();

        if (error) {
          console.error("Error fetching todos:", error.message);
          return;
        }

        if (fetchedQuests && fetchedQuests.length > 0) {
          setQuests(fetchedQuests);
        }
      } catch (err: any) {
        console.error("Error fetching todos:", err.message);
      }
    };

    getQuests();
  }, []);
  const addXp = (amount: number) => {
    setXp((prev) => prev + amount);
  };

  const addQuest = async (quest: QuestType) => {
    const { data, error } = await supabase
      .from("quests")
      .insert(quest)
      .select()
      .single();

    if (error) {
      console.error("Error adding quest:", error.message);
      return;
    }

    setQuests((prev) => [...prev, data]);
  };

  return (
    <AppContext.Provider value={{ xp, addXp, quests, addQuest }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
