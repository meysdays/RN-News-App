import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import NetInfo from "@react-native-community/netinfo";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function checkInternetConnection() {
  const state = await NetInfo.fetch();

  return Boolean(
    state.isConnected &&
      state.isInternetReachable !== false
  );
}