import { createContext, useContext } from "react";

const IdeasContext = createContext();
const UserContext = createContext();

export function useIdeas() {
  return useContext(IdeasContext);
}

export function useUser() {
  return useContext(UserContext);
}
