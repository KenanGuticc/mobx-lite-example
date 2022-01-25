import { inject } from "mobx-react";
import UsersStore from "./users.store";

export default class RootStore {
  public usersStore: UsersStore;

  constructor() {
    this.usersStore = new UsersStore();
  }
}

export interface WithStoreProps {
  store?: RootStore;
}

export const injectStore = inject(`store`);
