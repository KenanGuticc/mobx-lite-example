import { observer } from "mobx-react";
import React from "react";
import { injectStore, WithStoreProps } from "../stores/root.stores";
import { IUser } from "../stores/user.type";

 const Info: React.FC<WithStoreProps> = (props) => {
  const {
    store,
  } = props;

  const deleteUser = (user: IUser): void => {
    store?.usersStore.removeUser(user)
  };

  return (
    <div>
      {store?.usersStore.getUsers().map((user: IUser) => (
        <div className="User" key={user.id}>
          <div>
            <h1>{user.fullName}</h1>
            <p>{user.username}</p>
          </div>
          <button onClick={() => deleteUser(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default injectStore((observer(Info)));
