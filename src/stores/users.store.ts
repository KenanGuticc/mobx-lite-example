import { action, configure, makeAutoObservable, observable } from "mobx";
import { IUser } from "./user.type";

export default class UsersStore {
  @observable
  users: IUser[] = [
    {
      id: 1,
      fullName: "John",
      username: "John123",
      email: "john@hotmail.com",
      password: "123456",
      acceptTerms: true,
    },
    {
      id: 2,
      fullName: "Terry",
      username: "Terry123",
      email: "terry@hotmail.com",
      password: "123456",
      acceptTerms: true,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getUsers() {
    return this.users;
  }

  @action
  async addUser(
    fullName: string,
    username: string,
    password: string,
    email: string,
    acceptTerms: boolean
  ) {
    const id = Math.random();
    this.users.push({
      id,
      fullName,
      username,
      password,
      email,
      acceptTerms,
    });
  }

  @action
  async removeUser(user: IUser) {
    this.users = this.users.filter((u) => u.id !== user.id);
  }
}
