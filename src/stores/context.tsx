import { useLocalObservable } from "mobx-react-lite";
import React from "react";
import { createStore, TStore } from "./users.store";

const StoreContext = React.createContext<TStore | null>(null);
export const DataStoreProvider = ({ children }: any) => {
  const store = useLocalObservable(createStore);
  return (
    <StoreContext.Provider value={store}>{children}. </StoreContext.Provider>
  );
};

export const useDataStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};

export {}