import { observer } from "mobx-react-lite";
import React from "react";
import { useDataStore } from "../stores/context";
import { IUser } from "../stores/user.type";

 const Info: React.FC = observer(()  => {
  const store = useDataStore();
  const { removeData, getUsers } = store;

  const deleteUser = (user: IUser): void => {
    removeData(user.id);
  };

  return (
    <div>
      {getUsers().map((user: IUser) => (
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
});

export default Info;
