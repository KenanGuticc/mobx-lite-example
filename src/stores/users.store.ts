import { IUser } from "./user.type";

export function createStore() {
  return {
     users: [{
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
    },] as IUser[],
     addUser(user: IUser) {
       user.id = Math.random();
       this.users.push(user);
     },
     removeData(id: number){
       this.users = this.users.filter(u => u.id !== id);
     },
     getUsers() {
       return this.users
     }
  };
}
export type TStore = ReturnType<typeof createStore>;