import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { CategoryItem } from "@/src/services/category/types";

interface ContextValue {
  task: CategoryItem[];
  addTask: (task: CategoryItem) => Promise<void>;
  deleteTask: (url: string) => Promise<void>;
  
}

const BookmarkContext = createContext<ContextValue | undefined>(undefined);
const BOOKMARK_STORAGE_KEY = "BOOKMARK_STORAGE_KEY";

export default function BookmarkContextProvider({
  children,
}: PropsWithChildren) {
  const [task, setTasks] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(BOOKMARK_STORAGE_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (e) {
        console.error("Failed to load tasks", e);
      }
    };
    loadTasks();
  }, []);


  const persistTasks = async (tasks: CategoryItem[]) => {
    try {
      await AsyncStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks", e);
    }
  };

  const addTask = async (newTask:CategoryItem) => {
    const taskToAdd = { ...newTask };
    const updatedTasks = [...task, taskToAdd];
    setTasks(updatedTasks);
    await persistTasks(updatedTasks);
  };

  const deleteTask = async (url: string) => {
    const updatedTasks = task.filter((t) => t.url !== url);
    setTasks(updatedTasks);
    await persistTasks(updatedTasks);
  };

  return (
    <BookmarkContext.Provider 
    value={{
        task,
        addTask,
        deleteTask
    }}
    >
        {children}
    </BookmarkContext.Provider>
  );
}

export const useSave = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useSave must be used within TaskManagerContextProvider");
  }
  return context;
};