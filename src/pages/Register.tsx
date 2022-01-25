import { observer } from "mobx-react";
import React from "react";
import { injectStore, WithStoreProps } from "../stores/root.stores";
import { IUser } from "../stores/user.type";

const Register: React.FC<WithStoreProps> = (props) => {
  const [user, setUser] = React.useState<IUser | {}>();

  const {
    store,
  } = props;

  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempUser = user as IUser;
    
    store?.usersStore.
    addUser(
      tempUser.fullName,
      tempUser.username,
      tempUser.password,
      tempUser.email,
      tempUser.acceptTerms
    );
  };

  const reset = () => {
  };

  return (
    <div className="register-form">
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            id="fullName"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            id="email"
            type="text"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            type="password"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group form-check">
          <input
            id="acceptTerms"
            type="checkbox"
            className={`form-check-input`}
            onChange={handleUserData}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
        </div>

        <div className="form-group buttons-group">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default injectStore(observer(Register));
